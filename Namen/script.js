var completedRequest = false
while (!completedRequest){
    var answer = window.prompt("How many names do you want to enter? (minimum = 3)","3");

        var nameList = []
        if (isNaN(answer)){
            alert("Make sure you have entered a number!")
        }
        else{
            if (answer < 3){
                alert("The minimum is 3")
            }
            else{
                for (i = 0; i < answer; i++){
                    var newName = window.prompt("Name " + (i + 1))
                    nameList.push(newName)
                }
                console.log(nameList)
                completedRequest = true
            }
            var MainPage = document.getElementById("Main")
            var newLabel = document.createElement('h1')
            newLabel.innerText = "Entered names:"
            var Names = document.createElement("p")
            Names.innerText = "Names: " + nameList.join(", ")
            MainPage.appendChild(newLabel)
            MainPage.appendChild(Names)
            var inversedNames = document.createElement('p')
            inversedNames.innerText = "Inversed NamesList: " + nameList.reverse().join(", ")
            MainPage.appendChild(inversedNames)
        }
        

}
