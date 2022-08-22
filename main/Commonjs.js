/**
 * Modules
 */
const getName = name => name
const getSurName = name => name
const getFullName = (name, surname) => `${getName(name)}, ${getSurName(surname)}`
module.exports.getFullName = getFullName
module.exports.getName =  getName
module.exports.getSurName = getSurName