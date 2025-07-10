//import { ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11, ans12 } from './answers.js';

const ans1 = 'one';
const ans2 = 'two';
const ans3 = 'three';
const ans4 = 'four';
const ans5 = 'five';
const ans6 = 'six';
const ans7 = 'seven';
const ans8 = 'eight';
const ans9 = 'nine';
const ans10 = 'ten';
const ans11 = 'eleven';
const ans12 = 'twelve';

function onSubmit() {

    let inputs = document.querySelectorAll("input");

    let emptyInputs = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '' || inputs[i].value == null) {
            emptyInputs = true;
            break;
        }
    }

    if (emptyInputs) {
        alert("There are empty input fields")
    } else {
        checkAnswers()
    }

}

function checkAnswers() {

    let w1 = document.getElementById("word1").value.toLowerCase();
    let w2 = document.getElementById("word2").value.toLowerCase();
    let w3 = document.getElementById("word3").value.toLowerCase();
    let w4 = document.getElementById("word4").value.toLowerCase();
    let w5 = document.getElementById("word5").value.toLowerCase();
    let w6 = document.getElementById("word6").value.toLowerCase();
    let w7 = document.getElementById("word7").value.toLowerCase();
    let w8 = document.getElementById("word8").value.toLowerCase();
    let w9 = document.getElementById("word9").value.toLowerCase();
    let w10 = document.getElementById("word10").value.toLowerCase();
    let w11 = document.getElementById("word11").value.toLowerCase();
    let w12 = document.getElementById("word12").value.toLowerCase();

    if (w1 == ans1) {
        document.getElementById("check1").innerHTML = "✔️";
    } else {
        document.getElementById("check1").innerHTML = "❌";
    }

}