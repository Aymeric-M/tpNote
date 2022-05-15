var currentPlayer = 1;
var scorePlayer1 = 0;
var scorePlayer2 = 0;

/**
 * Variables liées à la sélection
 */
var currentSelection = false;
var selectedHTML;
var selectedHTMLClasses;
var arrayPlayer1Pieces = ["pion-blanc", "tour-blanc", "cavalier-blanc", "fou-blanc", "roi-blanc", "reine-blanc"];
var arrayPlayer2Pieces = ["pion-noir", "tour-noir", "cavalier-noir", "fou-noir", "roi-noir", "reine-noir"];

/**
 * Récupère la deuxième classe déclaré dans votre liste.
 * Découpe votre ensemble de classe selon les espaces pour les mettre dans un tableau (split).
 * @param {*} selectedClasses
 * @returns la classe liée à une pièce si elle exise sinon renvoie vide.
 */
function getCaseClass(selectedClasses) {
    /**
     * On récupère l'ensemble des classes sous forme de tableau, et on récupère la deuxième.
     * Note : Toujours déclarer votre class liée à une pièce en deuxième.
     */
    if (selectedClasses !== "") {
        var arraySplitedClasses = selectedClasses.split(" ");
        if (arraySplitedClasses.length > 1) {
            return arraySplitedClasses[1];
        } else {
            return "";
        }
    }
}

/**
 * Passe au joueur suivant.
 */
var currentPlayer = 1; //test de thibo
function changePlayer() {
    //on peut metre ca, c'est plus rapide
    currentPlayer = currentPlayer % 2 + 1;
}

/**
 * Ajoute une classe selon le joueur courant à une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function addSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.add("selectedRed");
    } else if (currentPlayer == 2) {
        classList.add("selectedBlue");
    }
}

//test thibo
function getElementsChildren(element) {
    var elementf = document.getElementsByClassName("wrapper");

    for (let i = 0; i < 40; i++) {
        elementf[0].childNodes[i].remove();
    }
    return document.getElementsByClassName(element).childNodes;
}

function fonct2(element) {
    for (let i = 0; i < element.length; i++) {
        alert(element[i]);
    }
    element[1].innerHTML = '<img src="noir-tour.gif" style="width: 60px;height: 60px;" alt="noir-tour">';
}


function isCaseEmpty(HTMLElement) {
    return getCaseClass(HTMLElement.className) === "";
}

function isCaseAllowed(HTMLElement) {
    if (currentPlayer === 1) {
        return arrayPlayer1Pieces.includes(getCaseClass(HTMLElement.className));
    } else {
        return arrayPlayer2Pieces.includes(getCaseClass(HTMLElement.className));
    }

}

function endOfGame(pawnSlected) {
    if (currentPlayer === 1) {
        if(pawnSlected === "roi-noir"){
            scorePlayer1++;
            document.getElementById("scoreJ1").innerHTML = scorePlayer1.toString();
            rejouer();
            currentPlayer=2;
        }
    } else {
        if(pawnSlected === "roi-blanc"){
            scorePlayer2++;
            document.getElementById("scoreJ2").innerHTML = scorePlayer2.toString();
            rejouer();
        }
    }
}

/**
 * Retire une classe selon le joueur courant d'une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function removeSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.remove("selectedRed");
    } else if (currentPlayer == 2) {
        classList.remove("selectedBlue");
    }
}

function rejouer() {
    for (let i = 0; i < 64; i++) {
        elements[i].className = "case";

    }
    elements[0].classList.add("tour-noir");
    elements[1].classList.add("cavalier-noir");
    elements[2].classList.add("fou-noir");
    elements[3].classList.add("roi-noir");
    elements[4].classList.add("reine-noir");
    elements[5].classList.add("fou-noir");
    elements[6].classList.add("cavalier-noir");
    elements[7].classList.add("tour-noir");
    elements[8].classList.add("pion-noir");
    elements[9].classList.add("pion-noir");
    elements[10].classList.add("pion-noir");
    elements[11].classList.add("pion-noir");
    elements[12].classList.add("pion-noir");
    elements[13].classList.add("pion-noir");
    elements[14].classList.add("pion-noir");
    elements[15].classList.add("pion-noir");


    elements[48].classList.add("pion-blanc");
    elements[49].classList.add("pion-blanc");
    elements[50].classList.add("pion-blanc");
    elements[51].classList.add("pion-blanc");
    elements[52].classList.add("pion-blanc");
    elements[53].classList.add("pion-blanc");
    elements[54].classList.add("pion-blanc");
    elements[55].classList.add("pion-blanc");
    elements[56].classList.add("tour-blanc");
    elements[57].classList.add("cavalier-blanc");
    elements[58].classList.add("fou-blanc");
    elements[59].classList.add("roi-blanc");
    elements[60].classList.add("reine-blanc");
    elements[61].classList.add("fou-blanc");
    elements[62].classList.add("cavalier-blanc");
    elements[63].classList.add("tour-blanc");
}

function pointsReset(){
    scorePlayer1=0;
    document.getElementById("scoreJ1").innerHTML = scorePlayer1.toString();

    scorePlayer2=0;
    document.getElementById("scoreJ2").innerHTML = scorePlayer2.toString();
}

function clearGame() {
    rejouer();
    pointsReset();
    currentPlayer = 1;
    currentSelection = false;
}

/**
 * Fonction liée à l'évènement 'click'.
 * A MODIFIER
 */
var play = function () {
    if (!currentSelection) {
        selectedHTML = this;
        selectedHTMLClasses = this.className;
        var piece = getCaseClass(selectedHTMLClasses);
        var classPiece = getCaseClass(selectedHTMLClasses);
        if (isCaseAllowed(selectedHTML) && !isCaseEmpty(selectedHTML)) {
            currentSelection = true;
            addSelectedClassByPlayer(this.classList);
        }

    } else {
        var piece = getCaseClass(selectedHTMLClasses);

        if (!isCaseAllowed(this) || isCaseEmpty(this)) {
            var piece2 = getCaseClass(this.className);
            if (!isCaseEmpty(this)) {
                this.classList.remove(piece2);
            }
            this.classList.add(piece);
            selectedHTML.classList.remove(piece);


            removeSelectedClassByPlayer(selectedHTML.classList);
            endOfGame(piece2);
            changePlayer();

        } else if (this === selectedHTML) {
            removeSelectedClassByPlayer(selectedHTML.classList);
        } else {
            removeSelectedClassByPlayer(selectedHTML.classList);
            changePlayer();
        }

        currentSelection = false;


    }
};

/**
 * On lie tous les éléments avec la classe 'case' à l'événement 'click'.
 */
var elements = document.getElementsByClassName("case");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', play, false);
    //if(i===0){
    //    elements[i].classList.add("cavalier-blanc");
    //}
}