// event handler for when button is clicked
function buttonClicked(){
	let bar = document.getElementById("line");
	bar.classList.add("red");
}
// add event handler to button
document.getElementById("changeButton").addEventListener("click", buttonClicked);


// event handler for when the pointer mouses over the circle shape
function mouseOver(){
	let shape = document.getElementById("shape");
	shape.classList.add("orange");
}
// add event handler to button
document.getElementById("shape").addEventListener("mouseover", mouseOver);


// event handler for when theh mounter leaves (mouses out) of the circle shape
function mouseOut(){
	let shape = document.getElementById("shape");
	shape.classList.remove("orange");
}
// add event handler to button
document.getElementById("shape").addEventListener("mouseout", mouseOut);