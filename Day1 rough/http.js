//const http = require("http");
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer((req, res) => {
  res.write("This is the response from the server");
  res.end(); //function concludes the response process
});
server.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
