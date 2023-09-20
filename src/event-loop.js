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
