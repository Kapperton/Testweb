let bodyElement = document.body;
let colorButton = document.getElementById('colorButton')
var color = "white"

colorButton.addEventListener('click', function(){
    if (color == "white") {
        color = "blue"
    } else {
        color = "white"
    }
    bodyElement.style.backgroundColor = color

    alert("Wow, what a nice new color!")
})