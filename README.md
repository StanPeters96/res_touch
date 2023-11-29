# real_estate_care_touch (INZENDCODE: 32411SA1)
gemaakt door: Stan Peters

## Werking applicatie:
1. Log in via inlogscherm (mock up)
2. Voer tweestap verificatie uit (mock up)
3. Uw beland op het dashboard.
4. Hier ziet u de toolbar, hiermee kunt u via logo en tekst terug naar de home page (of het huis icoon)
Ook kunt u via het belletje of tandwieltje naar uw settings. Het loguit icoon kunt u gebruiken om uit te loggen.
5. Op het dashboard ziet u 4 tegels met linksboven "scheduled", hier kan een nieuwe inspectie uitgevoerd worden.
Rechtsboven ziet u "completed", hierin staan alle uitgevoerde inspecties. Linksonder ziet u "knowledge base", hier staan alle pdf documenten die van toepassing zijn geweest bij inspecties. Rechtsonder ziet uw "settings", daar kunt u uw account gegevens zien en persoonlijke voorkeuren instellen.
6. Onderin ziet uw de footer met links icoon "active tasks", uw gaat dan naar de "scheduled" pagina. Ook ziet uw midden het icoon "search", hiermee wordt uw de completed inspecties getoond. Rechts ziet uw icoon "Information" waar uw naar de Knowledge base wordt gestuurd.

## Wat werkt er nog minder goed?
Bij de completed inspections lukte het niet zo goed om een CRUD operatie neer te zetten. In dit specifieke geval moet in de completed component eigen alleen RU worden toegepast. Dit is door gebrek aan tijd (opleiding loopt 05-12-23 af) niet gelukt om te implementeren.

## De 10 heuristieken van Jacob Nielsen, is hier aan voldaan?
Nee, er wordt gedacht aan H1, H2 en P elementen en ook is via symbolen en tekst geprobeerd een duidelijke en minimalistische flow te laten zien. maar verder is hier ruimte voor structurele verbetering.

## Voldoet het project aan de WCAG 2.1 richtlijnen?
Nee, hier is ook ruimte voor veel verbetering, al moet ik eerlijk zeggen (niet om bijdehand te zijn), deze specfieke app wordt ontwikkeld voor mensen die huizen moeten inspecteren, een blind persoon kan niet zien of een muur van kleur is veranderd na de laatste huurder. Iemand die dit werk doet functioneert in die zin dat er geen fysieke/audio/visuele beperkingen zijn.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
