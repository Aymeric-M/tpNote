# TP noté - CHESS - HTML&CSS&JS

| Binôme  | Valeurs |
| ------------- |:-------------:|
| N°     | 22     |
| Membres      | Aymeric Moulet et Thibaut Lafforgue   |

Github : https://github.com/Aymeric-M/tpNote.git

Dernière question traitée : 
Nous n'avons pas traité le bonus 
----

## Choix techniques

----

### Plateau de jeu

#### Structure HTML

Pour la structure HTML du plateau nous avons d'abord essayer de faire un tableau affichant au fur et à mesure une case blanche puis noir. Mais le plus simple pour nous a été de faire une flexbox. Un grand div qui contient les 64 cases de l'échequier. Nous n'avons pas trouvé d'autres moyens que d'écrire plus simplement les 64 cases.

#### Style CSS

Nous avons utilisé nth-child. Pour faire une alternace de coloration décalée d'une ligne à l'autre nous avons fait 8 lignes de code pour les cases où l'on définit par quel couleur commence et finit la ligne, puis faire l'alternace de couleur. 

#### Pièces

Pour l'affiche des pièces, dans le CSS nous avons juste ajouté le lien gif de l'image de chaque pions. Et pour les faire apparaître en début de partie, nous avons placé sur chacunes des deux premières lignes de l'échiquier les pions dans les div<> correspondants, dans le HTML.

----

### Moteur du jeu

#### Tour par tour

Le current joueur est initialisé au premier (J1), puis la fonction changePlayer va faire permettre au currentplayer de changé en fonction de qui était le dernier

#### Initialisation et réinitialisation du plateau

Lorsqu'on appuie sur le bouton restart ou newgame on réaffiche l'échiquier de base ne prenant plus en compte les derniers déplacements faits sur l'échiquier. 

#### Gestion des pièces

Les pièces selectionnées aparaissent en surbrillance et se déplacent à l'endroit ou l'on a indiqué. Si on essaie par erreur de le déplacer sur un de ses propres pions, cela saute le tour du joueur et fait passer au suivant. Sinon la partie continue

#### Condition de victoire
Si le roi a été mangé ou si tous les pions ont été mangés le joueur en fonction est le gagnant

#### Gestion du score
On peut voir que le score s'affiche, s'incrémente en fonction de qui a gagné, est reinitialisé si on appuie sur NewGame. ou une partie est réinitialisée sans reinitialiser le score si on appuie sur restart. 