/**
 * write an example of fetching data with XMLHttpRequest
 */

// const xhr =  new XMLHttpRequest()
// xhr.open('GET', "https://api.github.com/users/visidevi/repos")
// xhr.send()
// xhr.onload =  function () {
//     if (xhr.status !== 200) {
//         console.log(`Error: ${xhr.status} - ${xhr.statusText}`)
//     } else {
//         console.log(xhr.response)
//     }
// }
// xhr.onerror = function () {
//     console.log("XHR request failed")
// }

/**
 * Write an example of fetching data using fetch API
 */

const response =  fetch("https://api.github.com/users/visidevi/repos").then(res => res.json).then(response => console.log).catch(e => console.log(e.response))