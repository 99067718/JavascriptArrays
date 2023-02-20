var numbers = [1, 2, 3, 4, 5, 23089123]
var MainDiv = document.getElementById("Main")
for (i = 0; i < numbers.length; i++){
    var newDiv = document.createElement("div")
    for (c = 0; c < 10; c++){
        var newH1 = document.createElement("h1")
        newH1.innerText = numbers[i] + "x" + (c+1) + "=" + (numbers[i] * (c+ 1))
        newDiv.appendChild(newH1)
    }
    newDiv.classList.add("MainDivs")
    MainDiv.appendChild(newDiv)
}