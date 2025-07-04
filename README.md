# Pottermores

## 🎮 Harry Potter en résumé 
Harry Potter est une série de romans fantasy écrite par J.K. Rowling. Publiée entre 1997 et 2007, elle raconte l'histoire d'un jeune sorcier orphelin qui découvre ses pouvoirs magiques et intègre l'école de sorcellerie Poudlard. Avec ses amis Hermione et Ron, Harry affronte le mage noir Voldemort dans un monde où la magie coexiste secrètement avec le monde des Moldus (non-sorciers). La saga explore les thèmes de l'amitié, du courage et de la lutte entre le bien et le mal à travers sept livres qui ont révolutionné la littérature jeunesse et donné naissance à une franchise cinématographique mondiale.

## 🛠️ Méthodologie de travail
Voici les étapes que j’ai suivies pour mener à bien ce projet d’application autour d'Harry Potter:

### 1. 📦 Documentation
- Rédaction du **README** avec explications claires de mes idées à l'origine du projet. Ce fichier sera mise à jour au fil du développement du projet.

### 2. 💻 Choix des technologies et sources web qui seront utilisées

1. **Frontend**: 
- [Tailwind CSS (v3.1.4)](https://v3.tailwindcss.com/): Principalement choisie car c'est une framework que j'utilise beaucoup dans mes projets. Il permet de styliser rapidement une interface via des classes pré-définies. Il facilite le développement responsive et l’uniformité du design tout en évitant la surcharge de fichiers CSS. 
-  [Uiverse](https://uiverse.io/): C'est une bibliothèque communautaire de composants UI animés et personnalisables (boutons, cartes, loaders, etc.), que l’on peut copier/coller facilement avec Tailwind CSS. Cela m’a permis de gagner du temps tout en apportant un style moderne à l’interface et c'est aussi un site que j'utilise beaucoup dans mes projets. Je l'apprécie pour sa simplicité et son efficacité. 
2.  **Potterhead API**: 
- [API Potterhead](https://github.com/AcidOP/potterhead-api?tab=readme-ov-file#2-apicharacters): Wiki communautaire très complet utilisé comme base pour collecter des informations sur les héros, leurs capacités, leurs rôles et les dernières mises à jour du jeu.

### 3. 🌟Listes des fonctionnalités principales
1. **Encyclopédie des personnages**
- Base de données complète des personnages d'Harry Potter.
- Il y'a leur nom, maisons, famille, patronus etc...
2. **Listes des livres**
- Il contient les noms, résumés, date de sortie et le nombre de pages des livres
3. **Listes de films**
- Il contient les noms, résumés, date de sortie et d'autres informations concernant le film
- Formulaire de contact pour les utilisateurs ayant besoin d'aide.
4. **Listes des sorts**
5. **Listes des maisons**

## ⚡Problèmes et solutions trouvés
| Problème  | Solution  | Notes |
| :------------ |:---------------:| -----:|
| **Id dans l'url qui ramène sur une erreur 404** |  Après réelecture et un essai dans le navigateur j'ai changé les routes de `character/:id` à `character/:name`. J'ai fait des changements partout. Le `service`, dans `l'app.config.ts` et aussi dans `l'html`.| J'aurais dû faire plus attention mais dans la doc de l'API on se connecte à partir du nom des personnages. Quelque chose dont je ne suis pas habitué et qui me semble peu safe, je n'ai donc pas fait attention. |
| **Validators.name n'existe pas**    |  Il fallait enlever ``name`` au ``Validators``. |    Cette erreur m'a surprise. Pas d'erreur affichée donc j'ai assumer que c'était autre chose. Une leçon que même si quelque chose marche elle peut toujours être l'erreur. Et tôt ou tard elle lachera.|

## Page abandonnées

| Nom  | Notes |
| :------------ | -----:|
| **Détail des personnages**| J'ai laissé tombé car je veux pas rester bloquer sur une même erreur. Je vais faire le formulaire.|
|**Formulaire Register**| J'ai laisser tomber car j'arrive pas à savoir quel est le pronlème. Je continuerais un autre jour l'esprit reposé.|


## 🔮 Fonctionnalités à venir
| Fonctionnalité | Notes |
| :------------ | -----:|
| **AddFlash qui disparaître après un certains temps** | De sorte qu'après s'être inscrit on reçoit un message flash. |
| **Commentaire en dessous des personnages** | Vu que je dois rendre le projet bientôt je ne penses pas que j'aurais le temps de le faire. Je le rajouterais plus tard.|
|**Mettre des personnages en favoris**| Le manque de temps me force aussi à mettre cette idée de côté. J'espère développer cette fonctionnalité dans le futur. Ce serait très cool.|

## Fin

## Aditionals Informations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
