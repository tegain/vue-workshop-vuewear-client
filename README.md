# Vue JS training - Vuewear

> Heavily inspired from [Sarah Drasner's ecommerce-netlify](https://github.com/sdras/ecommerce-netlify)


### API documentation

[https://tegain-vuewear-api.herokuapp.com/api](https://tegain-vuewear-api.herokuapp.com/api/)


## Pour aller plus loin

#### Recherche de produits
- Filtrer les produits en fonction de ce que tape l'utilisateur au clavier (via un formulaire)
- Ajouter des critères de recherche (nom, description, rating...)

#### Authentification
- Ajouter un système d'authentification (username/mot de passe) sur l'app frontend (backend pas encore implémenté)
- Créer une page réservée aux utilisateurs authentifiés en utilisant les [Vue-Router guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
- Les utilisateurs authentifiés peuvent ajouter de nouveaux produits à l'API (`POST /products`) (création du formulaire et envoi à l'API)

#### PWA
- Activer le mode hors ligne pour permettre aux utilisateurs de consulter l'application sans connexion internet.

----
## Project setup
```
# Installation des dépendances
npm install

# Démarrer l'application pour le développement
npm run serve

# Compiler l'application pour la prod
npm run build

# Formatter / Linter les fichiers
npm run lint
```

### Configuration avancée
See [Configuration Reference](https://cli.vuejs.org/config/).
