document.getElementById('colorInput').
addEventListener('input', (event) => {
    //get selected color from input
    let selectedColor = event.target.value;

    //update color text
    document.getElementById('colorCode').
    textContent = selectedColor

    //update background color from color display
    document.getElementById('colorDisplay').
    style.backgroundColor = selectedColor
});