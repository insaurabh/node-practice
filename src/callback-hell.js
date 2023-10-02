const fs = require("node:fs");

const util = require("node:util");

console.log(__dirname);

fs.readFile("./data/dummy.json", (err, chunks) => {
  console.log(chunks);
});

// Every call back have two parameters first one will be error and second
// will be data returned

// Use promisify to convert the callback to promise

const readFile = util.promisify(fs.readFile);
readFile("./data/dummy.json")
  .then((data) => {
    console.log("data", data.toString());
  })
  .catch((err) => {
    console.error(`Error occurred while reading data`, err.message);
  });

// or in async await way, which is more cleaner than above
const readFilePromised = async () => {
  const data = await readFile("./data/dummy.json");
  const dataInStringFormat = data.toString();
  console.log("dataInStringFormat", dataInStringFormat);
};

readFilePromised();

// lstat provides file information like when created, modified, size ...
const lstat = util.promisify(fs.lstat);

const lstatPromised = async (filePath) => {
  const stats = await lstat(filePath);
  console.log("FILE STATS", stats);
};

lstatPromised("./data/dummy.json").catch((err) => {
  console.error(err);
});

// We have fs.stat as well, go and try

// More on here : https://nodejs.org/api/util.html#util_util_promisify_original
