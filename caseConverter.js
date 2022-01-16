const upperCaseBtn = document.getElementById('upper-case');
const lowerCaseBtn = document.getElementById('lower-case');
const properCaseBtn = document.getElementById('proper-case');
const sentenceCaseBtn = document.getElementById('sentence-case');
const textAreaObj = document.getElementById('text');

upperCaseBtn.onclick = function () {
    textAreaObj.value = textAreaObj.value.toUpperCase();
};

lowerCaseBtn.onclick = function () {
    textAreaObj.value = textAreaObj.value.toLowerCase();
};

properCaseBtn.onclick = function () {
    let words = textAreaObj.value.toLowerCase().split(" ");
    for (let id = 0; id < words.length; id++) {
        words[id] = capitalizeFirstLetter(words[id]);
    }
    textAreaObj.value = words.join(" ");
};

sentenceCaseBtn.onclick = function () {
    let words = textAreaObj.value.toLowerCase().split(" ");
    for (let id = 0; id < words.length; id++) {
        if (shouldCapitalizeFirstLetter(words, id)) {
            words[id] = capitalizeFirstLetter(words[id]);
        }
    }
    textAreaObj.value = words.join(" ");
};

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function shouldCapitalizeFirstLetter(words, id) {
    if (id === 0)
        return true;

    const prevWord = words[id - 1];
    return prevWord.charAt(prevWord.length - 1) === ".";
}