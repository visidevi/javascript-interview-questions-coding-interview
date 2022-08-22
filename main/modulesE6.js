/**
 * Modules
 */
// import GetFullName, { getName, getSurName} from "./module.js"
// const getFullName = require("./Commonjs")
const { getFullName, getName, getSurname} = require("./Commonjs")
console.log(getFullName("Jack", "Sparrow"))

/**
 * Commonjs Modules are typically use inside node js, is the standar module assistant from Nodejs, Sugar around required, es6 inside nodejs, inside still have the required, Common js are static
 * require is mandatory for nodejs
 Import must be always on the top, it will be bubble to the top wen js parse
 */

/**
 * Es6 we use in browser
 */