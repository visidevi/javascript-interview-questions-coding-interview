
/**
 * ToDO: click events
 * BAD!
 */

// const $li = document.querySelectorAll(".item")
// $li.forEach(item => {
//     item.addEventListener("click", () => {
//         console.log("Click in item::::::", item.innerHTML)
//     })
// })
/**
 * Good!
 */
const app = document.querySelector('.todo-app')
app.addEventListener('click', (e=> {
    if (e?.target.classList.contains('item')) console.log("Click in item::::::", e.target.innerText)
}))