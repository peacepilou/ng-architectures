# Configuration :

- Créée 2 services de CALL de data, appelés "repositories"
- Ces 2 services sont swiped par une factory, qui regarde les fichiers environnement, et qui selon l'environnement choisi, fourni les bons endpoints
- Il y a 3 env : development, staging, prod.
- Pour ajouter staging, il a fallu modifier le fichier "angular.json" en précisant pour le build et le serve les détails à lancer lors de configration=staging.
- Tous mes smarts components qui nécessitent la data d'articles, sont injectés via factory. Il est donc très simple de changer toutes les provenances de data : depuis le "ng serve --configuration=..."

# Inversion de dépendance

- Pour utiliser l'inversion de deps, il a fallu créer une classe abtraite pour l'injecter en tant que token dans la factory
- Une interface n'est pas injectable, car n'existe pas en JS.
- Ma classe abtraite implémente une interface basique CRUD pour formaliser les échanges de tous mes repositories de l'application, notamment en utilisant 3 types de responses aux calls de data : Entity, createDtos, updateDtos
- Mes composants dépendant de la factory => ma factory dépend d'ABSTRACTION car d'une interface (classe abstraite)
- Mes implém peuvent donc changer, ça ne change rien à mon composant
- Trop bien !

# Attention

- Si utilisation en development > la factory utilise l'implémentation json-server > penser à le lancer !
- Lancer le json-server: se rendre dans le dossier "mocks" puis lancer `json-server --watch article-db.json`
