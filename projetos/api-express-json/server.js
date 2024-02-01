const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });

  if (request.url === "/user") {
    response.end(
      JSON.stringify({
        id: 132,
        admin: true,
        user: "mateus.alves",
        password: "i@Bz8S%i&J",
      })
    );
  }
});

server.listen(4001, () => console.log("Server running on port 4001"));
