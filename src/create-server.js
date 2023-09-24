const http = require("node:http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.write(
      JSON.stringify({
        name: "test",
        age: 123,
      })
    );
    res.end();
  })
  .listen(8080);

// or

const server2 = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });

  res.write(
    JSON.stringify({
      data: "hello node",
    })
  );
  res.end();
});

server2.listen(8001);

// or

const server3 = http.createServer();

server3.on("request", (req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.write(
    JSON.stringify({
      someData: "some data from server3",
    })
  );
  res.end();
});

server3.listen(8002, () => console.log(`Server is running at 8002`));
