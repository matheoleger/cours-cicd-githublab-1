# Intégration continue - Code Lint - Build - Release pour une App Python 

Votre équipe veut mettre en place un processus de construction automatisé pour le code de votre application Python. Vous souhaitez stocker cet artefact afin que d'autres équipes puissent y accéder pour des travaux en aval ou pour le déploiement. Vous devrez créer le fichier de workflow pour tirer parti de GitHub Packages afin de stocker de nouvelles versions de votre code à chaque nouveau build.

**Objectifs :**

1. Mettre en place un repo GitHub.
2. Créer un pipeline Workflow qui fera du lint de Code, build d'artefacts et publier une release
   
   _"Le terme **"lint"** se réfère à un outil de linting, également appelé linter. En programmation, un linter est un outil qui analyse le code source pour signaler des erreurs de programmation, des bogues, des conventions de codage non respectées, ou d'autres problèmes susceptibles de compromettre la qualité du code. Il est souvent utilisé pour assurer la cohérence du style de code au sein d'un projet, détecter des erreurs courantes et appliquer les bonnes pratiques de programmation. Un exemple de linter pour Python Flake8"_
3. Créer une version (release).
4. Ajouter un asset à la version (release).

**Liens et ressources utiles pour ce lab:**
- Action de la communauté GitHub Checkout : https://github.com/marketplace/actions/checkout
- Téléchargement/téléversement d'artefacts : https://docs.github.com/en/actions/guides/storing-workflow-data-as-artifacts
- Utilisation de "needs" : https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds
- Identifiants d'étape : https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs
- Étiquettes Git : https://git-scm.com/book/en/v2/Git-Basics-Tagging
- Versions GitHub : https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository

**Instructions :**

1. **Créer un nouveau repo Github**
   Créer un repo github de votre application `code-appli-python` et y mettre le code source. la suite du lab devra se faire dans ce repo Github.

2. **Créer plusieurs branches** 
   Créer deux nouvelles branches qui réflètent votre environement de développement 
   - branche `dev` 
   - branche `release`

3.  **Créer le fichier Workflow :**
   Dans votre repo GitHub, créez un dossier `.github/workflows` et ajoutez-y un fichier (par exemple, `ci.yml`). Ce fichier définira votre workflow CI.

4. **Configurer le Workflow :**
   Ajoutez la configuration de base suivante à votre fichier `ci.yml` :

   ```yaml
   name: CI pour Appli Python

   on:
        # (à compléter)

   jobs:

        # à compléter
   ```

5. Compléter le fichier `ci.yml` et le rendre fonctionnel de sorte que :
   - Le workflow soit déclenché à chaque push sur la branche `release`.
   - Il vérifie le code https://github.com/actions/checkout

6. Compléter le fichier `ci.yml` en ajoutant les fonctionalités suivantes :
   - Fait une intitialisation de l'environment Python : https://github.com/actions/setup-python
   - Install les librairies python
   - Crée un Bundle Zip

7. Compléter le fichier `ci.yml` en ajoutant les fonctionalités suivantes :
   - Upload le Bundle Zip créé dans l'étape précédante https://github.com/actions/upload-artifact 

Les étapes précédantes devraient automatiquement générer des 

