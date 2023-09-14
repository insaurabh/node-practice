const fs = require("fs");
const data = fs.readFileSync("./data/dummy.json", "utf8"); // Sync at end
console.log(data);

// Non blocking code doing same thing

fs.readFile("./data/dummy.json", (err, data) => {
  console.log("WE GOT THE DATA NOW");
  console.log(data.toString());

  console.log("ALL DATA PROCESSING DONE");
}); // ASYNC

console.log("========== SOME OTHER TASKS CAN BE DONE HERE ========");

// 1. What if we are reading a big data?
// 2. Do the above methods print/parse everything at once

const nonBlockingStream = fs.createReadStream("./data/dummy.json");
nonBlockingStream.on("data", (dataInChunk) => {
  console.log("Reading data in chunks");
  console.log(dataInChunk.toString());
});

// 3. Which will be the sequence of console.log
