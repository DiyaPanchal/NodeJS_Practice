import fs from "fs";

//if utf8 not specified then the data returned will be buffer data 
//async does not return rather it expects a callback
export function readFile(req,res){
  fs.readFile('./contacts.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log('Asynchronous reading of file');
    res.send("The file task is completed")
  });
}

//sync returns data
export function readFileSync(req,res){
  const data= fs.readFileSync('./contacts.txt','utf-8')
  console.log(data);
  console.log('Synchronous reading of file')
  res.send("The file task is completed synchronously");
}

//async
export function writeFile(req, res) {
  fs.writeFile("./contacts.txt", "Harvy: +78478", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log("Asynchronous writing of file");
    res.send("The file task is completed");
  });
}

//sync call
export function writeFileSync(req, res) {
  fs.writeFileSync('./contacts.txt','Harvy:+873y2');
  console.log("Synchronous writing of file");
  res.send("The file task is completed synchronously");
}

export function appendFile(req, res){
  fs.appendFile("./contacts.txt", " Pr: +46557", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log("Asynchronous append in file");
    res.send("The file task is completed");
  });
}

export function appendFileSync(req, res) {
  fs.appendFileSync("./contacts.txt"," Diya:+25687"); 
  console.log("Synchronous writing of file");
  res.send("The file task is completed synchronously");
}

export function renameFile(req, res) {
  fs.renameSync("./contacts.txt", "./cont.txt");  
  console.log("Renaming of file completed");
  res.send("The file task is completed");
}