const upperCaseBtn = document.getElementById('upper-case');
const lowerCaseBtn = document.getElementById('lower-case');
const properCaseBtn = document.getElementById('proper-case');
const sentenceCaseBtn = document.getElementById('sentence-case');
const saveTextFileBtn = document.getElementById('save-text-file')
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

saveTextFileBtn.onclick = function () {
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    download("text.txt", textAreaObj.value);
}