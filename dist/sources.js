const SOURCES = {
  "philopsy": {
    "title": "PhiloPsy — Gauld & Micoulaud-Franchi · concepts de philosophie de la psychiatrie"
  },
  "ref-59": {
    "title": "Référentiel CNUP–AESP–CUNEA, 4e éd, 2024 · item 59, précarité"
  },
  "ref-61": {
    "title": "Référentiel CNUP–AESP–CUNEA, 4e éd, 2024 · item 61, classifications"
  },
  "ref-62": {
    "title": "Référentiel CNUP–AESP–CUNEA, 4e éd, 2024 · item 62, organisation du soin"
  },
  "nice-transition": {
    "title": "NICE NG43 · Transition vers les services adultes",
    "url": "https://www.nice.org.uk/guidance/ng43/chapter/recommendations"
  },
  "pdf-tdah": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · TDAH · p 284–290"
  },
  "pdf-tsa": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Trouble du spectre de l’autisme · p 280–283, 290–291"
  },
  "pdf-depression": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Épisode dépressif et trouble dépressif · p 161–171"
  },
  "pdf-bipolaire": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles bipolaires · p 173–186"
  },
  "pdf-psychose": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles schizophréniques · p 141–154"
  },
  "pdf-toc": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Trouble obsessionnel compulsif · p 205–210"
  },
  "pdf-anxiete": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Trouble anxieux généralisé · p 187–192"
  },
  "pdf-panique": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Trouble panique · p 193–198"
  },
  "pdf-phobies": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles phobiques · p 199–204"
  },
  "pdf-trauma": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Trouble de stress post-traumatique · p 211–218"
  },
  "pdf-deuil": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Deuil normal et pathologique · p 135–138"
  },
  "pdf-tca": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles des conduites alimentaires et ARFID · p 299–313"
  },
  "pdf-cannabis": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles liés au cannabis · p 351–356"
  },
  "pdf-jeux": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Addictions comportementales · p 383–389"
  },
  "pdf-sommeil": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles du sommeil · p 251–266"
  },
  "pdf-somatique": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles à symptomatologie somatique · p 231–241"
  },
  "pdf-comportement": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Troubles du comportement · p 293–298"
  },
  "pdf-langage": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Développement et troubles du neurodéveloppement · p 269–275, 287"
  },
  "pdf-risque": {
    "title": "Référentiel de psychiatrie et addictologie, 4e éd, 2024 · Risque et conduites suicidaires · p 85–98"
  },
  "has-tdah-2024": {
    "title": "HAS · TDAH : diagnostic et interventions thérapeutiques auprès des enfants et adolescents · 2024",
    "url": "https://www.has-sante.fr/jcms/p_3302482/fr/trouble-du-neurodeveloppement/tdah-diagnostic-et-interventions-therapeutiques-aupres-des-enfants-et-adolescents"
  },
  "nice-adhd": {
    "title": "NICE NG87 · Attention deficit hyperactivity disorder: diagnosis and management",
    "url": "https://www.nice.org.uk/guidance/ng87/chapter/recommendations"
  },
  "nice-autism": {
    "title": "NICE CG170 · Autism spectrum disorder in under 19s: support and management",
    "url": "https://www.nice.org.uk/guidance/cg170/chapter/recommendations"
  },
  "nice-depression": {
    "title": "NICE NG134 · Depression in children and young people: identification and management",
    "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
  },
  "nice-bipolar": {
    "title": "NICE CG185 · Bipolar disorder: assessment and management · Enfants et adolescents, section 1.11",
    "url": "https://www.nice.org.uk/guidance/cg185/chapter/recommendations"
  },
  "nice-psychosis": {
    "title": "NICE CG155 · Psychosis and schizophrenia in children and young people: recognition and management",
    "url": "https://www.nice.org.uk/guidance/cg155/chapter/Recommendations"
  },
  "nice-ocd": {
    "title": "NICE CG31 · Obsessive-compulsive disorder and body dysmorphic disorder: treatment",
    "url": "https://www.nice.org.uk/guidance/cg31/chapter/Recommendations"
  },
  "nice-social-anxiety": {
    "title": "NICE CG159 · Social anxiety disorder: recognition, assessment and treatment",
    "url": "https://www.nice.org.uk/Guidance/CG159/chapter/recommendations"
  },
  "nice-ptsd": {
    "title": "NICE NG116 · Post-traumatic stress disorder",
    "url": "https://www.nice.org.uk/guidance/ng116/chapter/Recommendations"
  },
  "nice-eating": {
    "title": "NICE NG69 · Eating disorders: recognition and treatment",
    "url": "https://www.nice.org.uk/guidance/ng69/chapter/recommendations"
  },
  "nice-selfharm": {
    "title": "NICE NG225 · Self-harm: assessment, management and preventing recurrence",
    "url": "https://www.nice.org.uk/guidance/NG225/chapter/recommendations"
  },
  "has-tsla": {
    "title": "HAS · Parcours de santé d’un enfant avec troubles spécifiques du langage et des apprentissages · 2017",
    "url": "https://www.has-sante.fr/jcms/c_2822893/fr/comment-ameliorer-le-parcours-de-sante-d-un-enfant-avec-troubles-specifiques-du-langage-et-des-apprentissages"
  },
  "arfid-trial": {
    "title": "Thomas et al · CBT-AR chez les enfants et adolescents : étude ouverte de faisabilité · 2020",
    "url": "https://pubmed.ncbi.nlm.nih.gov/32776570/"
  }
};
