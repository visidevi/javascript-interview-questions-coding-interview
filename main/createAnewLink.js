const $paragraph = document.querySelector("p")

$paragraph.innerHTML = $paragraph.innerHTML.split(" ").map(word => {
    return word.length > 8 ? `<span style="background-color: yellow">${word}</span>`: word
}).join(" ")


const link =  document.createElement("a")
link.innerText = "Text generate from lorem ...."
link.href="https://forcemipsum.com/"
document.body.appendChild(link)
