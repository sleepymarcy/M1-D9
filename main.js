window.onload = function(){
    displayBingo()
}


const displayBingo = function() {
   let bingoContainer = document.getElementById("bingo-container")

   for(let n = 1; n <= 76; n++) {
       let newNumber = document.createElement("div")
       newNumber.innerText = n
       newNumber.classList.add("number")
       newNumber.onclick = selectNumber

       bingoContainer.appendChild(newNumber)
   }
}

const randomNumberGenerator = function(max, numberOfOutputs){
    let arr = []
    for(let n = 1; n <= max; n++){
        arr.push(n)
    }
    let result = []

    for(let n = 1; n <= numberOfOutputs; n++){
        const random = Math.floor(Math.random()*(max - n))
        result.push(arr[random])
        arr[random] = arr[max - n]
    }
    return result
}

const selectNumber = function(event){
    const currentlySelectedNumber = document.querySelector(".selected")
    if (currentlySelectedNumber !== null){
        currentlySelectedNumber.classList.remove("selected")
    }

    const clickedNumber = event.currentTarget
    clickedNumber.classList.add("selected")
}


/*
window.onload = displayBingo
let usedNums = new Array(76)


function displayBingo() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard
		newCard()
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}


function newCard() {
	for (let n=0; n<24; n++) {
		setSquare(n)
	}
}


function setSquare(thisSquare) {
	let currSquare = "square" + thisSquare
	let colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4)
	let colBasis = colPlace[thisSquare] * 15
	let newNum

	do {
		newNum = colBasis + getNewNum() + 1
	}
	while (usedNums[newNum])
    usedNums[newNum] = true
    document.getElementById(currSquare).innerHTML = newNum
    document.getElementById(currSquare).className = ""
    document.getElementById(currSquare).onmousedown = toggleColor
}


function getNewNum() {
	return Math.floor(Math.random() * 15)
}


function anotherCard() {
	for (let n=1; n<usedNums.length; n++) {
		usedNums[n] = false
	}
	newCard()
	return false
}


function toggleColor(evt) {
	if (evt) {
		let thisSquare = evt.target
	}	else {
		let thisSquare = window.event.srcElement
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG"
	}	else {
		thisSquare.className = ""
	}
	checkWin()
}


function checkWin() {
	let winningOption = -1
	let setSquares = 0
	let winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928)

	for (let n=0; n<24; n++) {
		let currSquare = "square" + n
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG"
			setSquares = setSquares | Math.pow(2,n)
		}
	}

	for (let n=0; n<winners.length; n++) {
		if ((winners[n] & setSquares) == winners[n]) {
			winningOption = n
		}
	}
	
	if (winningOption > -1) {
		for (let n=0; n<24; n++) {
			if (winners[winningOption] & Math.pow(2,n)) {
				currSquare = "square" + n
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
};
*/