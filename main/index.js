/**
 * write an  asynchronous function  witch executes callback after finishing it's asynchronous task
 */

 const response =  fetch("https://api.github.com/users/visidevi/repos")
 .then(res => res.json())
 .then(console.log)
 .catch(e => console.log(e.response))

 const asyncFn = callback => {
    setTimeout(() => {
       callback("done") 
    }, 2000);
 }

 const asyncFn1 = callback => {
    setTimeout(() => {
       callback("done") 
    }, 1000);
 }
 const asyncFn2 = callback => {
    setTimeout(() => {
       callback("done") 
    }, 3000);
 }

//  asyncFn((message) => console.log("callBack", message))

Promise.all([asyncFn, asyncFn1, asyncFn2]).then(res => await console.log(res))
