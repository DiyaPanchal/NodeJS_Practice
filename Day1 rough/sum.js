import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const a = 1;
const b = 2;
app.get("/", (res, req) => {
    console.log(JSON.stringify({a:1,b:2}));
  console.log(`The sum is: ${a + b}`);
 
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
