function first() {
  console.log("First function");
}

function third() {
  setTimeout(() => {
    console.log("Third function");
  }, 0);
}

function second() {
  console.log("Second function");
}

first();
second();
third();

// watched :https://youtu.be/8aGhZQkoFbQ?si=S-kAZohAwtIAQUfx

/**
1. JavaScript runtime can do one thing at a time but browser can do much more
2. In web ( browser ) we have webAPI and in node we have C++ APIS
3. Example:
  3.1 setTimeout first goes to stack
  3.2 then pushed to webAPI it waits for the assigned time(not exactly)
  3.3 Here event loop comes in picture if stack is empty it picks one task from task queue and push to stack
  3.4 settimeout now in stack queue and our callback will be triggered

  so setTimeout 1 seconds dosn't mean it will run at 1 seconds it will run
  after 1 second.

* stack in in engine like v8
* webAPI is in web ( browser )
* eventLoop exists in ?
* http://latentflip.com/loupe/?code=CmNvbnNvbGUubG9nKCJIaSEiKTsKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCJKcyBpcyBmdW4uIE5vdCBhbHdheXMiKTsKfSwgNTAwMCk7Cgpjb25zb2xlLmxvZygiV2VsY29tZS4iKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/

console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
setTimeout(() => {
  console.log("first task in task queue - random task");
}, 0);
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");
console.log("first task in stack");

setTimeout(() => {
  console.log("first task in task queue");
}, 0);

setTimeout(() => {
  console.log("second task in task queue");
}, 1);

console.log("second task in stack");

process.nextTick(() => {
  // do something
  console.log("next ticked");
});
