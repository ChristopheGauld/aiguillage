const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const base=path.join(__dirname,'../dist');
function runtime(saved){
  const main={innerHTML:'',focus(){}},body={innerHTML:''};
  const memory=new Map(saved||[]),frames=[];
  const track={getTotalLength:()=>1000,getPointAtLength:n=>({x:n,y:170})};
  const dialog={open:false,showModal(){this.open=true},close(){this.open=false}};
  const nodes={'#main':main,'#dialog':dialog,'#dialog-body':body,'#live':{textContent:''},'#path-a':track,'#path-b':track,'#ties-a':{innerHTML:''},'#ties-b':{innerHTML:''},'#tram':{setAttribute(){}},'.dispatch':{scrollIntoView(){}}};
  const c={Collection:{offer(){},send(){},statusMarkup(){return ''}},document:{querySelector:s=>nodes[s]||null,addEventListener(){}},window:{innerWidth:1200,addEventListener(){},scrollTo(){},matchMedia:()=>({matches:true})},sessionStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v)},requestAnimationFrame:f=>{frames.push(f);return frames.length},cancelAnimationFrame(){},setTimeout,clearTimeout,console};
  vm.createContext(c);vm.runInContext(['sources.js','cases.js','app.js'].map(f=>fs.readFileSync(path.join(base,f),'utf8')).join('\n'),c);
  const run=s=>vm.runInContext(s,c);
  let tick=0;
  const flush=()=>{let n=0;while(frames.length){assert(++n<10);frames.shift()(tick+=500)}};
  return {run,main,body,memory,dialog,c,flush};
}
function visible(html){return html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
function clean(html){const t=visible(html);assert(!t.includes('undefined'));assert(!t.includes('${'));assert(!/\.(?:\s|$)/.test(t));assert(!t.includes('Des situations fictives'));}
test('40 unique scenes with complete choices, categories and references',()=>{
 const {run}=runtime();const cases=run('CASES');assert.equal(cases.length,40);assert.equal(new Set(cases.map(c=>c.id)).size,40);
 assert.equal(cases.filter(c=>c.category==='clinique').length,24);
 for(const c of cases){assert(run(`!!CATEGORIES[${JSON.stringify(c.category)}]`));assert(c.topic);assert.equal(c.outcomes.length,2);assert(c.sources.length);for(const k of c.sources)assert(run(`!!SOURCES[${JSON.stringify(k)}]`));for(const k of ['a','b']){assert(c[k].name.length<=28);assert(c[k].detail.length<=40)}clean([c.title,c.intro,c.aside,c.twist,c.discussion,...c.outcomes.flat()].join(' '));}
});
test('short mixed routes balance clinical and other dilemmas without duplicates',()=>{
 const {run}=runtime();for(let i=0;i<30;i++){const ids=run('makeRoute()');assert.equal(ids.length,8);assert.equal(new Set(ids).size,8);assert.equal(run(`CASES.filter(c=>${JSON.stringify(ids)}.includes(c.id)&&c.category==='clinique').length`),4)}
});
test('every category supports short and complete journeys',()=>{
 const {run}=runtime();for(const key of run('Object.keys(CATEGORIES)')){run(`state.category=${JSON.stringify(key)};state.length='all'`);const ids=run('makeRoute()');assert.equal(ids.length,run('pool().length'));assert(ids.every(id=>run(`CASES.find(c=>c.id===${JSON.stringify(id)}).category`)===key));run("state.length='8'");assert.equal(run('makeRoute().length'),Math.min(8,ids.length));}
});
test('all 40 scenes can be played, reconsidered and exported without off-by-one endings',()=>{
 const r=runtime();r.run("state.profileAsked=true;state.length='all';beginRoute(CASES.map(c=>c.id))");
 for(let i=0;i<40;i++){
  assert.equal(r.run('state.index'),i);clean(r.main.innerHTML);assert(r.main.innerHTML.includes('category-tag'));assert(r.main.innerHTML.includes('</div><p class="route-hint">'));
  r.run("action('lever')");r.flush();assert.equal(r.run('state.phase'),'arrived');clean(r.main.innerHTML);
  r.run("action('revise')");r.run("action('pass')");r.flush();
  if(r.run('!!current().third')){r.run("action('third')");assert(r.main.innerHTML.includes('Construire des créneaux'))}
  r.run("action('next')");
 }
 assert.equal(r.run('state.view'),'end');assert.equal(r.run('state.records.length'),40);assert.equal(r.run('state.seen.length'),40);
 const exported=r.run('exportData(false)');assert.equal(exported.journey.length,40);assert(!('profile' in exported));assert(exported.journey.every(c=>c.category&&c.topic&&c.first!==c.final));
});
test('catalog search and one-scene journeys work independently of route length',()=>{
 const r=runtime();assert.equal((r.run("catalogList('TDAH')").match(/data-case-id/g)||[]).length,2);assert(r.run("catalogList('éthique')").includes('nuits'));assert(r.run("catalogList('xxxyyyzzz')").includes('Aucune situation'));
 r.run("state.profileAsked=true;beginRoute(['tdah-benefice'])");r.run("action('pass')");r.flush();r.run("action('next')");assert.equal(r.run('state.view'),'end');assert.equal(r.run('state.records.length'),1);
});
test('reload preserves route order and progress; optional profile stays optional',()=>{
 const r=runtime();r.run('start()');assert(r.dialog.open);r.run("action('skip-profile')");const ids=JSON.stringify(r.run('state.route'));
 r.run("action('pass')");r.flush();r.run("action('next')");const resumed=runtime(r.memory);assert.equal(JSON.stringify(resumed.run('state.route')),ids);assert.equal(resumed.run('state.index'),1);assert.equal(resumed.run('state.profile'),null);
 for(const width of [320,390,768,1200]){resumed.c.window.innerWidth=width;resumed.run('render(false)');clean(resumed.main.innerHTML)}
});
