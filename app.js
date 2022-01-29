
//Upper Case
const upperBtn = document.getElementById('upperCase')

upperBtn.onclick = () => {
    const textChange = document.getElementById('changeText').value.toUpperCase();
    document.getElementById('changeText').value = textChange
}

//Lower case
const lowerBtn = document.getElementById('lowerCase')

lowerBtn.onclick = () => {
    const textChange = document.getElementById('changeText').value.toLowerCase();
    document.getElementById('changeText').value = textChange
}


//Bold
const boldBtn = document.getElementById('bold')

boldBtn.onclick = () => {
    const bold = document.getElementById("changeText");
    if( bold.style.fontWeight == "bolder" ) {
        bold.style.fontWeight = "normal";
    } else {
        bold.style.fontWeight = "bolder";
    }
}

//Italic    
const italicBtn = document.getElementById('italic')

italicBtn.onclick = () => {
    const italic = document.getElementById("changeText");
    if( italic.style.fontStyle == "italic" ) {
        italic.style.fontStyle = "normal";
    } else {
        italic.style.fontStyle = "italic";
    }
}

//Underline

const underlineBtn = document.getElementById('underline')

underlineBtn.onclick = () => {
    const underline = document.getElementById("changeText");
    if( underline.style.textDecoration == "underline" ) {
        underline.style.textDecoration = "normal";
    } else {
        underline.style.textDecoration = "underline";
    }
}