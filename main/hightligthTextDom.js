const $paragraph = document.querySelector("p")


$paragraph.innerHTML = $paragraph.innerHTML.split(" ").map(word => {
    return word.length > 8 ? `<span style="background-color: yellow">${word}</span>`: word
}).join(" ")
console.log($paragraph.innerHTML)