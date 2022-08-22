/**
 * Debounce Function:
 *Debounce Function must be call after certainly period of time, every single call with be delay,
 */
 const debounce = (fn, timeout = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, timeout);
    }
}

 // Function to debounce
 const saveInput = name => {
    console.log('SaveInput', name)
}

const processChange = debounce(saveInput, 500)
processChange("foo")

