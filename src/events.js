// Event : https://nodejs.org/dist/latest-v20.x/docs/api/events.html
// 1. A signal that something has happened

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.setMaxListeners(20);

emitter.on("error", function errorHandler(err) {
  console.log(`ERROR: ${err.message}`);
});

let count = 0;
// Listen to events, or register listeners
emitter.on("eventName", function firstFun(a, b) {
  //   console.log("Listening to eventName", a, b, this, this.EventEmitter);
  console.log("Listening to eventName", a, b);
  console.log(++count);
});

// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});

// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});
// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});
// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});
// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});
// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});
// Listen to events, or register listeners
emitter.on("eventName", function otherFun() {
  console.log("These are called synchronously");
  console.log(++count);
});
// Listen to events, or register listeners

emitter.on("eventName", function () {
  console.log(
    "The EventEmitter calls all listeners synchronously in the order in which they were registered"
  );
  console.log(++count);
});

emitter.on("eventName", function moreThenLimit() {
  console.log("These are called synchronously");
  console.log(++count);
});
emitter.on("eventName", function moreThenLimit() {
  console.log("These are called synchronously");
  console.log(++count);
});
emitter.on("eventName", function moreThenLimit() {
  console.log("More then limit event listeners are registered");
  console.log(++count);
});
// Raise an event
emitter.emit("eventName", "a value", "b value");
emitter.emit("eventName", 2, 3);

emitter.prependListener("eventName", () =>
  console.log(`called before every other registered event`)
);

// it will not be registered
emitter.on("eventName", function () {
  console.log("Another listener to eventName ");
  console.log(++count);
});

// below two listeners will be triggered only once for messageLog,
// dosn't matter how many times event ( messageLog ) is emitted
emitter.once("messageLog", function () {
  console.log("CALLED ONCE");
  console.log(++count);
  // throw new Error("some error occured");
});

emitter.once("messageLog", function () {
  console.log("CALLED ONCE");
  console.log(++count);
});

emitter.emit("messageLog");
emitter.emit("messageLog");

console.log(emitter.eventNames());
console.log(emitter.listeners("eventName"));
console.log(emitter.getMaxListeners());
