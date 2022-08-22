/**
 * Throttle Function:Executed immediate with interval
 *
 */

const throttle = (fn, timeout = 500) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      isWaiting = true;
      fn.apply(this, args);
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

// Function to throttle
const saveInput = (name) => {
  console.log("SaveInput", name);
};

const processChange = throttle(saveInput, 500);
processChange("foo");

setTimeout(() => {
  processChange("foo");
}, 1000);
setTimeout(() => {
  processChange("foo");
}, 2000);
setTimeout(() => {
  processChange("foo, 3000");
}, 3000);
