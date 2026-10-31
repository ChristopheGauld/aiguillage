# L’Aiguillage

[![Jouer à L’Aiguillage](docs/jouer.svg)](https://christophegauld.github.io/aiguillage/) [![Mes résultats privés](docs/resultats.svg)](https://et-vous-pedopsy-291026.milkycomet4097.chatgpt.site/)

**Cliquez sur le bouton pour ouvrir le jeu dans votre navigateur**

Aucune installation, aucune commande à saisir et aucun compte GitHub nécessaire

[Lien direct vers le jeu](https://christophegauld.github.io/aiguillage/)

[Mes résultats privés](https://et-vous-pedopsy-291026.milkycomet4097.chatgpt.site/) — réservé à Christophe Gauld après connexion à son compte ChatGPT, avec téléchargement CSV ou JSON

Le bouton ouvre l’espace privé de résultats — aucune réponse de participant n’est publiée sur GitHub

Un tramway rouge, deux voies et une manette pour explorer 40 dilemmes de pédopsychiatrie avec des praticiens expérimentés

Chaque voie représente une priorité ou une option de soin

## Jouer

Choisir un trajet de huit situations, parcourir toute la banque ou ouvrir directement un dilemme depuis le catalogue

Six registres apparaissent au-dessus des titres : clinique, éthique, épistémologie, accès aux soins, organisation et institution

- Laisser filer envoie le tram sur la voie du haut
- Cliquer sur la manette, ou la tirer vers le bas, choisit la voie du bas
- Un élément supplémentaire invite à maintenir ou réviser son choix
- Une situation permet d’inventer une troisième voie
- Le récapitulatif final restitue les choix et propose des pistes de discussion, sans score
- Les commandes sont accessibles au clavier, les animations respectent la préférence de réduction des mouvements et le son est facultatif

Les trajets mélangés comportent quatre situations cliniques et quatre situations issues des autres registres, en privilégiant les situations encore non jouées dans l’onglet

## Contenu

Les 24 situations cliniques abordent notamment TDAH, TSA, dépression, bipolarité, psychose débutante, TOC, anxiété, psychotraumatisme, deuil, troubles alimentaires, usages de substances, jeux vidéo, sommeil, plaintes somatiques, opposition, développement du langage et automutilations

Les autres situations interrogent notamment les priorités des familles, l’accès effectif aux soins, la continuité à la majorité, la coordination, les indicateurs institutionnels et la construction des connaissances

Les situations sont originales et fictives, avec deux priorités défendables et des contraintes explicites destinées à nourrir une discussion accompagnée
Les conséquences décrivent des tensions possibles, sans prédire l’évolution d’un patient
Les vignettes ne constituent pas des recommandations de soins et n’ont pas fait l’objet d’une validation par un comité clinique

Les repères bibliographiques figurent dans les questions de discussion de chaque situation et dans `dist/sources.js`
La couverture thématique s’appuie notamment sur le référentiel de psychiatrie et addictologie CNUP–AESP–CUNEA, quatrième édition, PUFR, 2024, et sur des recommandations publiques pédiatriques HAS et NICE
Le manuel et les documents de travail ne sont pas distribués avec le jeu
Les réflexions conceptuelles sont nourries par PhiloPsy de Christophe Gauld et Jean-Arthur Micoulaud-Franchi

Inspiration mécanique : [Absurd Trolley Problems, Neal Agarwal](https://neal.fun/absurd-trolley-problems/)
Les dessins, les situations et le code de cette version sont originaux

## Profil et données

Le profil initial est facultatif : âge, genre, profession en texte libre, années de pratique depuis le début de l’internat si pertinent, ville d’exercice ou d’études
Il est possible de partir sans renseigner aucun champ

Le profil et les réponses restent dans la session de l’onglet tant que la collecte n’est pas acceptée
Une demande d’accord distincte est affichée avant le parcours, avec une case non cochée par défaut
Refuser ou fermer cette demande permet de jouer sans transmettre

Après accord, chaque situation terminée est envoyée au service de collecte privé avec le profil renseigné, y compris la ville précise
Aucun nom ni e-mail n’est demandé, mais les croisements de profil peuvent permettre une reconnaissance : il s’agit de données confidentielles sans identité directe, pas d’une garantie d’anonymat strict
Les champs sont facultatifs et la collecte est réservée aux participants majeurs

Les résultats sont accessibles uniquement à Christophe Gauld dans son espace Sites privé
Aucune réponse de participant n’est stockée dans le dépôt GitHub ou dans GitHub Pages
Le jeu public reçoit uniquement une confirmation d’enregistrement et ne dispose d’aucun accès aux résultats

« Ma participation » permet de conserver un code personnel et de demander le retrait des données
Le code peut également être utilisé sur [la page de retrait](https://aiguillage-participations.milkycomet4097.chatgpt.site/retrait)
Une empreinte du code et un marqueur de retrait sans profil ni réponse évitent qu’un envoi retardé recrée les données

La durée de conservation par défaut est de 12 mois
Les données expirées sont exclues et purgées à chaque consultation ou transmission
Le workflow `retention.yml` demande aussi une purge quotidienne des seules participations expirées
GitHub peut suspendre les tâches planifiées des dépôts publics inactifs — vérifier leur état avant de relancer une campagne prolongée

L’application n’enregistre ni adresse IP ni navigateur avec les réponses
Les hébergeurs peuvent conserver leurs propres journaux techniques de connexion
L’export local CSV/JSON reste disponible et exclut le profil par défaut

## Utilisation locale — facultative

Ouvrir `dist/index.html` dans un navigateur récent ou servir le répertoire `dist`
Aucune installation ni compilation n’est nécessaire

```sh
python3 -m http.server 8765 --directory dist
```

## Modifier et vérifier

- `dist/cases.js` contient les 40 situations, leurs choix, rebondissements et questions de discussion
- `dist/sources.js` contient les références bibliographiques
- `dist/app.js` contient le moteur et les dessins SVG
- `dist/style.css` contient le fond ivoire et la mise en page pour ordinateur et téléphone
- `tests/game.test.cjs` vérifie la banque, les parcours, les révisions, la reprise de session, le catalogue et les exports

```sh
node --check dist/app.js
node --check dist/cases.js
node --check dist/sources.js
node --test tests/game.test.cjs
```

Les polices Bricolage Grotesque et DM Sans sont servies localement, avec leurs licences OFL dans `dist/assets/fonts`

## Publication

Le workflow `.github/workflows/pages.yml` vérifie le jeu puis publie `dist` sur GitHub Pages à chaque mise à jour de la branche `main`
Dans les paramètres Pages du dépôt, sélectionner GitHub Actions comme source

Les fichiers distribués ne contiennent ni réponses de participants ni documents de travail privés
