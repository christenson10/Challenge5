//Current date is fixed to top of calendar
var currentDay = moment().format("YYYY-MM-DD");
console.log(currentDay)

//Current time 
var currentHour = moment().hour();
console.log(currentHour)

var nineAM = document.getElementById('nineAM')
var tenAM = document.getElementById('tenAM')
var elevenAM = document.getElementById('elevenAM')
var twelveAM = document.getElementById('twelveAM')
var thirteenAM = document.getElementById('thirteenAM')
var fourteenAM = document.getElementById('fourteenAM')
var fifteenAM = document.getElementById('fifteenAM')
var sixteenAM = document.getElementById('sixteenAM')
var seventeenAM = document.getElementById('seventeenAM')

var nineBtn = document.getElementById('nineBtn')
var tenBtn = document.getElementById('tenBtn')
var elevenBtn = document.getElementById('elevenBtn')
var twelveBtn = document.getElementById('twelveBtn')
var thirteenBtn = document.getElementById('thirteenBtn')
var fourteenBtn = document.getElementById('fourteenBtn')
var fifteenBtn = document.getElementById('fifteenBtn')
var sixteenBtn = document.getElementById('sixteenBtn')
var seventeenBtn = document.getElementById('seventeenBtn')

var nineText = document.getElementById('nineText')
var tenText = document.getElementById('tenText')
var elevenText = document.getElementById('elevenText')
var twelveText = document.getElementById('twelveText')
var thirteenText = document.getElementById('thirteenText')
var fourteenText = document.getElementById('fourteenText')
var fifteenText = document.getElementById('fifteenText')
var sixteenText = document.getElementById('sixteenText')
var seventeenText = document.getElementById('seventeenText')

//Function to indicate if day is past, present, or future
    //If statements to determine hour and 

if (currentHour < 9) {
    nine.classList.add("future");
} else if (currentHour == 9) {
    nine.classList.add("present");
} else if (currentHour > 9) {
    nine.classList.add("past");
}

if (currentHour < 10) {
    ten.classList.add("future");
} else if (currentHour == 10) {
    ten.classList.add("present");
} else if (currentHour > 10) {
    ten.classList.add("past");
}

if (currentHour < 11) {
    eleven.classList.add("future");
} else if (currentHour == 11) {
    eleven.classList.add("present");
} else if (currentHour > 11) {
    eleven.classList.add("past");
}

if (currentHour < 12) {
    twelve.classList.add("future");
} else if (currentHour == 12) {
    twelve.classList.add("present");
} else if (currentHour > 12) {
    twelve.classList.add("past");
}

if (currentHour < 13) {
    thirteen.classList.add("future");
} else if (currentHour == 13) {
    thirteen.classList.add("present");
} else if (currentHour > 13) {
    thirteen.classList.add("past");
}
if (currentHour < 14) {
    fourteen.classList.add("future");
} else if (currentHour == 14) {
    fourteen.classList.add("present");
} else if (currentHour > 14) {
    fourteen.classList.add("past");
}

if (currentHour < 15) {
    fifteen.classList.add("future");
} else if (currentHour == 15) {
    fifteen.classList.add("present");
} else if (currentHour > 15) {
    fifteen.classList.add("past");
}

if (currentHour < 16) {
    sixteen.classList.add("future");
} else if (currentHour == 16) {
    sixteen.classList.add("present");
} else if (currentHour > 16) {
    sixteen.classList.add("past");
}

if (currentHour < 17) {
    seventeen.classList.add("future");
} else if (currentHour == 17) {
    seventeen.classList.add("present");
} else if (currentHour > 17) {
    seventeen.classList.add("past");
}

//Event listener on click to save entered task to local storage

var nineSave = function(){
    var textInput = nineText.value;
    localStorage.setItem("storedNineText", textInput)
}
var nineLoad = function(){
    var textLoad = localStorage.getItem("storedNineText")
    nineText.value = textLoad
}

var tenSave = function(){
    var textInput = tenText.value;
    localStorage.setItem("storedTenText", textInput)
}
var tenLoad = function(){
    var textLoad = localStorage.getItem("storedTenText")
    tenText.value = textLoad
}

var elevenSave = function(){
    var textInput = elevenText.value;
    localStorage.setItem("storedElevenText", textInput)
}
var elevenLoad = function(){
    var textLoad = localStorage.getItem("storedElevenText")
    elevenText.value = textLoad
}

var twelveSave = function(){
    var textInput = twelveText.value;
    localStorage.setItem("storedTwelveText", textInput)
}
var twelveLoad = function(){
    var textLoad = localStorage.getItem("storedTwelveText")
    twelveText.value = textLoad
}

var thirteenSave = function(){
    var textInput = thirteenText.value;
    localStorage.setItem("storedThirteenText", textInput)
}
var thirteenLoad = function(){
    var textLoad = localStorage.getItem("storedThirteenText")
    thirteenText.value = textLoad
}

var fourteenSave = function(){
    var textInput = fourteenText.value;
    localStorage.setItem("storedFourteenText", textInput)
}
var fourteenLoad = function(){
    var textLoad = localStorage.getItem("storedFourteenText")
    fourteenText.value = textLoad
}

var fifteenSave = function(){
    var textInput = fifteenText.value;
    localStorage.setItem("storedFifteenText", textInput)
}
var fifteenLoad = function(){
    var textLoad = localStorage.getItem("storedFifteenText")
    fifteenText.value = textLoad
}

var sixteenSave = function(){
    var textInput = sixteenText.value;
    localStorage.setItem("storedSixteenText", textInput)
}
var sixteenLoad = function(){
    var textLoad = localStorage.getItem("storedSixteenText")
    sixteenText.value = textLoad
}

var seventeenSave = function(){
    var textInput = seventeenText.value;
    localStorage.setItem("storedSeventeenText", textInput)
}
var seventeenLoad = function(){
    var textLoad = localStorage.getItem("storedSseventeenText")
    seventeenText.value = textLoad
}

nineLoad ()
tenLoad ()
elevenLoad ()
twelveLoad ()
thirteenLoad ()
fourteenLoad ()
fifteenLoad ()
sixteenLoad ()
seventeenLoad ()

nineBtn.addEventListener("click", nineSave)
tenBtn.addEventListener("click", tenSave)
elevenBtn.addEventListener("click", elevenSave)
twelveBtn.addEventListener("click", twelveSave)
thirteenBtn.addEventListener("click", thirteenSave)
fourteenBtn.addEventListener("click", fourteenSave)
fifteenBtn.addEventListener("click", fifteenSave)
sixteenBtn.addEventListener("click", sixteenSave)
seventeenBtn.addEventListener("click", seventeenSave)





