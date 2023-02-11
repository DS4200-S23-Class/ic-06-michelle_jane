function buttonClicked(){
	let bar = document.getElementById("line");
	bar.classList.add("red");
}

// add event handler to button
document.getElementById("changeButton").addEventListener("click", buttonClicked);


function mouseOver(){
	let shape = document.getElementById("shape");
	shape.classList.add("orange");
}

// add event handler to button
document.getElementById("shape").addEventListener("mouseover", mouseOver);


function mouseOut(){
	let shape = document.getElementById("shape");
	shape.classList.remove("orange");
}

// add event handler to button
document.getElementById("shape").addEventListener("mouseout", mouseOut);