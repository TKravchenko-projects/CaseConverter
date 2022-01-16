const btnUpperCase = document.getElementById('upper-case');
const btnLowerCase = document.getElementById('lower-case');
const btnProperCase = document.getElementById('proper-case');
const btnSentenceCase = document.getElementById('sentence-case');


btnUpperCase.addEventListener("click", function () {
    let userText = document.getElementById('text').value;
    document.getElementById('text').value = userText.toUpperCase();
    //console.log(userText.value.toUpperCase());
});
btnLowerCase.addEventListener("click", function () {
    let userText = document.getElementById('text').value;
    document.getElementById('text').value = userText.toLowerCase();
    //console.log(userText.value.toUpperCase());
});
btnProperCase.addEventListener("click", function () {
    let userText = document.getElementById('text').value;
    let arrayOfStrings = userText.split(" ");
    for (let arrayOfString = 0; arrayOfString < arrayOfStrings.length; arrayOfString++) {
        arrayOfStrings[arrayOfString] = arrayOfStrings[arrayOfString].charAt(0).toUpperCase() + arrayOfStrings[arrayOfString].slice(1);
    }
    document.getElementById('text').value = arrayOfStrings.join(" ");
});
btnSentenceCase.addEventListener("click", function () {
    let userText = document.getElementById('text').value;
    let arrayOfStrings = userText.split(" ");
    console.log(arrayOfStrings)
    for (let arrayOfString = 0; arrayOfString < arrayOfStrings.length; arrayOfString++) {
        if (arrayOfString === 0) {
            arrayOfStrings[arrayOfString] = arrayOfStrings[arrayOfString].charAt(0).toUpperCase() + arrayOfStrings[arrayOfString].slice(1);
        } else {
            let symbol = arrayOfStrings[arrayOfString - 1];
            let symbol1 = symbol.charAt(symbol.length - 1);
            console.log(symbol1);
            if (symbol1 === ".") {
                arrayOfStrings[arrayOfString] = arrayOfStrings[arrayOfString].charAt(0).toUpperCase() + arrayOfStrings[arrayOfString].slice(1);
            }
        }

    }
    document.getElementById('text').value = arrayOfStrings.join(" ");
    console.log(document.getElementById('text').value);
});
