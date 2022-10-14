/***PALINDROMO***/

const btnPali = document.getElementById("btn-pali");
let resultPali = document.getElementById("result-pali");

btnPali.addEventListener('click', verifyPali);

function verifyPali() {
    const parolaUser = document.getElementById("input-pali").value;
    const parolaReverse = reverse(parolaUser);

    if (isNaN(parolaUser)) {
        if (parolaUser.toLowerCase() === parolaReverse.toLowerCase()) {
            resultPali.innerHTML = `La parola ${parolaUser} è un palindromo`;
        }
        else {
            resultPali.innerHTML = `La parola ${parolaUser} non è un palindromo`;
        }
    }
    else {
        resultPali.innerHTML = "Inserisci una parola!";
    }
}

function reverse(parola) {
    let reverseString = '';
    for (let i = parola.length - 1; i >= 0; i--) {
        reverseString += parola[i];
    }
    return reverseString;
}

/***PARI&DISPARI***/

const btnPariDisp = document.getElementById("btn-pari-disp");
let resultPariDisp = document.getElementById("result-pari-disp");
const numMin = 1;
const numMax = 5;
let verifyPariDisp = false;
let choice = "pari";
let error = false;

btnPariDisp.addEventListener('click', function () {

    const numUser = document.getElementById("pari-disp").value;
    const numIA = getRandomNumber(numMin, numMax);
    const choicePariDisp = document.getElementById("choice").value;

    PariDisp(numIA, parseInt(numUser));

    if (numUser > numMax || numUser < 1) {
        resultPariDisp.innerHTML = "Inserire un numero da 1 a 5 ! Riprova..";
    }
    else {
        if (verifyPariDisp && choicePariDisp === "pari") {
            resultPariDisp.innerHTML = `Scelta utente: "${numUser}" <br> choice IA: "${numIA}" <br> la somma è = ${PariDisp(numIA, parseInt(numUser))} <br> HAI VINTO!!!!`;
            console.log(verifyPariDisp, choice);
        }
        else if (!(verifyPariDisp) && choicePariDisp === "pari") {
            resultPariDisp.innerHTML = `Scelta utente: "${numUser}" <br> choice IA: "${numIA}" <br> la somma è = ${PariDisp(numIA, parseInt(numUser))} <br> HAI PERSO!!!!`;
            console.log(verifyPariDisp, choice);
        }
        else if (!(verifyPariDisp) && choicePariDisp === "dispari") {
            resultPariDisp.innerHTML = `Scelta utente: "${numUser}" <br> choice IA: "${numIA}" <br> la somma è = ${PariDisp(numIA, parseInt(numUser))} <br> HAI VINTO!!!!`;
            console.log(verifyPariDisp, choice);
        }
        else if (verifyPariDisp && choicePariDisp === "dispari") {
            resultPariDisp.innerHTML = `Scelta utente: "${numUser}" <br> choice IA: "${numIA}" <br> la somma è = ${PariDisp(numIA, parseInt(numUser))} <br> HAI PERSO!!!!`;
            console.log(verifyPariDisp, choice);
        }
        else {
            resultPariDisp.innerHTML = "Dati inseriti errati, riprovare.."
        }
    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function PariDisp(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);

    if (sum % 2) {
        verifyPariDisp = false;
        choice = "dispari";
    } else {
        verifyPariDisp = true;
        choice = "pari";
    }
    return sum;
}
