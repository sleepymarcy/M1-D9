window.onload = function(){
    displayBingo()
}

const displayBingo = function() {
   let bingoContainer = document.getElementById("bingo-container")

   for(let n = 0; n <= 24; n++) {
       let newNumber = document.createElement("div")
       newNumber.innerText = n
       newNumber.classList.add("number")
       newNumber.onclick = selectNumber

       bingoContainer.appendChild(newNumber)
   }
}

const selectNumber = function(event){
    const currentlySelectedNumber = document.querySelector(".selected")
    if (currentlySelectedNumber !== null){
        currentlySelectedNumber.classList.remove("selected")
    }

    const clickedNumber = event.currentTarget
    clickedNumber.classList.add("selected")
}
