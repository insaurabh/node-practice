console.log("Processing first message");
console.log("Processing first message");
console.log("Processing first message");
console.log("Processing first message");

setTimeout(() => {
  console.log("Processing second message after 0 seconds.");
}, 0);

console.log("============ Processing first message");

process.nextTick(() => {
  console.log("First tick started");

  setTimeout(() => {
    console.log("Processing second message after 0 seconds in nextTick");
  }, 0);

  console.log("nexttick Processing after event loop");
  console.log("nexttick Processing after event loop");

  console.log("First tick end");
});

console.log("============ After first tick");

setTimeout(() => {
  console.log("Processing  after first tick");
}, 0);

process.nextTick(() => {
  console.log("Second nexttick");
});

let someFun = function () {
  setTimeout(() => {
    console.log("in side callback after 0 seconds");
  }, 0);

  setImmediate(() => console.log("immediate"));

  process.nextTick(() => console.log("nextTick"));

  console.log("event loop");
};

someFun();
