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

function afficherSapin(etages, hauteur_etages) {
  let star = "";
  let spaces = [];
  let etageArbre = [];
  for (let i = 0; i < 2 * etages; i++) {
    spaces.push(" ");
  }
  console.log(spaces.join("") + "+");
  for (i = 0; i < etages; i++) {
    for (let j = 0; j < hauteur_etages ; j++) {
      spaces.pop();
      etageArbre.push(spaces.join("") + "/" + star + "|" + star + "\\");
      star += "*";
    }
    console.log(etageArbre.join("\n"));
    etageArbre.splice(0,2);
  }
}

afficherSapin(5, 3);
