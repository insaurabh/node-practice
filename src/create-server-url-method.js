const http = require("node:http");
const { parse } = require("node:url");
const DEFAULT_HEADER = { "content-type": "application/json" };
const PORT = 8000;

http
  .createServer((req, res) => {
    const { url, method } = req;
    const { query } = parse(url);

    res.writeHead(200, DEFAULT_HEADER);
    const myURL = new URL("/foo", "http://example.com");
    res.write(
      JSON.stringify({
        fName: "Saurabh",
        lName: "Ranjan",
        method,
        url,
        query,
        myURL,
      })
    );

    res.end();
  })
  .listen(PORT, () => console.log(`Server is running at ${PORT}`));
