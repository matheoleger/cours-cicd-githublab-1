# Intégration continue avec GitHub Actions - Node.js App 

Mettre en place une pipeline d'intégration continue (CI) avec GitHub Actions implique la création d'un fichier de configuration workflow dans le repertoire `.github/workflows`.
Voici un exemple de base pour un projet Node.js dont le code source de l'application est fourni dans le répertoire `code-appli-node-js`

1. **Créer un repo Github**
   Créer un repo github de votre application `code-appli-node-js` et y mettre le code source. la suite du lab devra se faire dans ce repo Github.

2.  **Créer le fichier Workflow :**
   Dans votre repo GitHub, créez un dossier `.github/workflows` et ajoutez-y un fichier (par exemple, `ci.yml`). Ce fichier définira votre workflow CI.

3. **Configurer le Workflow :**
   Ajoutez la configuration de base suivante à votre fichier `ci.yml` :

   ```yaml
   name: CI pour Nodejs

   on:
     push:
       branches:
         - main

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout Repository
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'

         - name: Installations des dépendances
           run: npm install

        # à compléter
   ```

   Ce flux de travail est déclenché à chaque push sur la branche `main`. Il vérifie le code, configure Node.js, installe les dépendances et ...

4. **Compléter le fichier CI.yml**
   Complétez le fichier workflow de sorte à tester l'application.
   Vous pouvez consulter cette documentation : https://github.com/actions/setup-node 

5. **Commit et push :**
   Effectuez un commit des modifications dans votre repo GitHub.

6. **GitHub Actions :**
   Visitez l'onglet "Actions" de votre référentiel GitHub pour voir l'état de vos Workflow.
