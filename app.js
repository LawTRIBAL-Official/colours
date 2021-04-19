//Global selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelectorAll('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexs = document.querySelectorAll(".color h2");
let initialColors;


//Functions
function generateHex() {

    /* Library */
    const hexColor = chroma.random();
    return hexColor;

    /* SELF WRITTEN
    const letters = '0123456789ABCDEF'; Button "#" in the front puts a random "#" in the hexcode
    let hash = '#';
    for(let i = 0; i< 6; i++) {
        hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;


    */
}

function randomColors() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const randomColor = generateHex();

        //Replace background

        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;

        //Contrast check
        CheckTextContrast(randomColor, hexText);
    });
}

function CheckTextContrast(color, text) {
    const luminance = chroma(color).luminance();
    if(luminance > 0.5) {
        text.style.color = "black";
    } else {
        text.style.color = "white";
    }
}






randomColors();