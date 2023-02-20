var amount = prompt("How many?")
var MainDiv = document.getElementById("Main")
if (!isNaN(amount)){
    for (i = 0; i <= amount; i++){
        var newH1 = document.createElement("h1")
        var numbers = ""
        for (c = 0; c <= i; c++){
            numbers += (c)
        }
        newH1.innerText = numbers
        MainDiv.appendChild(newH1)
    }
}