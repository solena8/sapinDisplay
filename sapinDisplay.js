//1.1 Une ligne d’étoiles
//Commençons par écrire une fonction afficherEtoiles(n) qui affiche une ligne de * en fonction du paramètre n

function afficherEtoiles(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    star += "*";
  }
  console.log(star);
}

//afficherEtoiles(2)
//afficherEtoiles(5)

//1.2 Carré d’étoiles
//Nous allons maintenant définir une nouvelle fonction afficherRectangle(hauteur, largeur)

function afficherRectangle(hauteur, largeur) {
  for (let i = 0; i < hauteur; i++) {
    afficherEtoiles(largeur);
  }
}

//afficherRectangle(5, 5)

//1.3 Triangle d’étoiles
//Il semblerait donc que nous pouvons nous inspirer du comportement de notre précédente fonction pour en définir une nouvelle afficherTriangleDroite(n)
//’Droite’ parce que ce triangle servira à la partie droite du sapin

function afficherTriangleDroite(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    console.log(star + "\\");
    star += "*";
  }
}

//afficherTriangleDroite(5)

//1.4 Seconde moitié et espaces
//Nous pouvons maintenant faire la seconde moitié de la pointe du sapin en faisant le symétrique !

function afficherTriangleGauche(n) {
  let star = "";
  let spaces = [];
  for (let i = 0; i < n; i++) {
    spaces.push(" ");
  }
  for (let i = 0; i < n; i++) {
    console.log(spaces.join("") + "/" + star);
    star += "*";
    spaces.pop();
  }
}

//afficherTriangleGauche(5);

//1.5 Assemblage et décorations
//Dernière étape, nous allons combiner le travail effectué sur afficherTriangleGauche() & afficherTriangleDroite() pour réaliser une nouvelle fonction afficherPointeSapin(), en ajoutant le tronc | et l’étoile + au milieu ! (cf l’affichage plus haut, en début d’exercice)

function afficherPointeSapin(n) {
  let star = "";
  let spaces = [];
  for (let i = 0; i < n; i++) {
    spaces.push(" ");
  }
  console.log(spaces.join("") + "+");
  for (let i = 0; i < n; i++) {
    spaces.pop();
    console.log(spaces.join("") + "/" + star + "|" + star + "\\");
    star += "*";
  }
}

//afficherPointeSapin(5);

//Etape 2: Sapin à étages
//Écrivons maintenant une fonction afficherSapin qui affichera les différents étages de sapin.

//2.1 Afficher un étage
//Changeons maintenant notre function afficherPointeSapin pour afficher n’importe quel étage du sapin ! Elle se nommera afficherEtage et prendra les paramètres suivant:

function afficherEtage(hauteur, pointe_offset) {
  let star = "";
  let spaces = [];
  let etageArbre = [];
  for (let i = 0 - pointe_offset; i < hauteur; i++) {
    spaces.push(" ");
  }
  etageArbre.push(spaces.join("") + "+");
  for (let i = 0 - pointe_offset; i < hauteur; i++) {
    spaces.pop();
    etageArbre.push(spaces.join("") + "/" + star + "|" + star + "\\");
    star += "*";
  }
  toSplice = pointe_offset + 1;
  etageArbre.splice(0, toSplice);
  console.log(etageArbre.join("\n"));
}

//afficherEtage(3, 0);
//afficherEtage(3, 1);
//afficherEtage(3, 2);




//2.2 Aligner les étages
//Parce que la partie à aligner arrive en premier (les étages les plus hauts du sapin), il nous faut savoir en avance quel espacement 
//sera nécessaire pour cet alignement. À partir de l’étape précédente, on peut voir qu’il aurait fallu 2 espacements au premier étage, et 
//1 seul au deuxième.  Nous allons donc modifier notre fonction afficherEtage pour ajouter cet espacement:


function afficherEtage2(hauteur, pointe_offset, espacement) {
  let star = "";
  let spaces = [];
  let etageArbre = [];
  for (let i = 0 - pointe_offset ; i < hauteur; i++) {
    spaces.push(" ");
    for(let j = i ; j < espacement ; j++){
      spaces.push(" ")
    }
  }
  etageArbre.push(spaces.join("") + "+");
  for (let i = 0 - pointe_offset; i < hauteur; i++) {
    spaces.pop();
    etageArbre.push(spaces.join("") + "/" + star + "|" + star + "\\");
    star += "*";
  }
  toSplice = pointe_offset + 1;
  etageArbre.splice(0, toSplice);
  console.log(etageArbre.join("\n"));
}

afficherEtage2(3, 0, 3)
afficherEtage2(3, 1, 2)
afficherEtage2(3, 2, 1)
afficherEtage2(3, 3, 0)

