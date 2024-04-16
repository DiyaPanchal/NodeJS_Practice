import fs from "fs";
import users from "../MOCK_DATA.json" assert { type: "json" };

//setting headers for response
export function displayUsers(req,res){
  res.setHeader("X-MyName","Diya Panchal"); // custom header
  //Always add X to custom headers
  console.log(req.headers);
  return res.json(users);
}

//dynamic path parameters
export function getUsers(req, res){
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found.");
  }
};
export function addUsers (req, res){
  const body = req.body;
  //console.log("Body",body); //here the express doesn't know what type of data will come and how to handle it so middleware has to be used
  users.push({...body,id: users.length+1});
  fs.writeFile("../MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({ status: "success", id: users.length });
  });
};

export function deleteUsers(req, res) {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    fs.writeFile("../MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json({
        status: "success",
        message: "User deleted successfully",
      });
    });
  } else {
    res.status(404).send("User not found.");
  }
}

export function updateUsers(req, res) {
  const id = Number(req.params.id);
  const body = req.body;
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...body };
    fs.writeFile("../MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json({
        status: "success",
        message: "User updated successfully",
      });
    });
  } else {
    res.status(404).send("User not found.");
  }
}
