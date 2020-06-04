var wordList =[
    "Charizard",
    "Pikachu",
    "Eevee",
    "Snorlax",
    "Mew",
    "Mewtwo",
    "Ditto",
    "Gengar",
];


var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
var score = document.getElementById("score")
var loses = document.getElementById("loses")
var hearts = document.getElementById("hearts")
var blanksSpot = document.getElementById("blankSpot")
var letterSpot = document.getElementById("letters")


function startGame(){
    var chosenWord = wordList[Math.floor(Math.random()*wordList.length)]
    console.log(chosenWord)
    letterSpot.innerHTML = " "
for ( i = 0; i < alphabet.length; i++) {
    var button = document.createElement("button")
    button.innerHTML = alphabet[i]
    button.id = alphabet[i]
    button.setAttribute(
    "style",
    "margin-right: 10px;"
    )
    letterSpot.appendChild(button)
}
   
    blanksSpot.innerHTML = " "
for ( i = 0; i < chosenWord.length; i++){

    blanksSpot.innerHTML += " _"
}

}