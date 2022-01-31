const { Promise } = require("mongoose");
const Client = require("../models/client");

const getallclients = () => {
  return new Promise((resolve, reject) => {
    Client.find({})
      .then((user) => {
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};

/* const long = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("this is the first message");
    }, 5000);

  });
};
exports.long = long; */
exports.getallclients = getallclients;





/* const promiss=()=>{
    return new promiss((resolve,reject)=>{
          setTimeout(() => {
            resolve();
            console.log("this is the first message");
          }, 5000); 
    })
}



promiss().then((data)=>console.log(data)).catch((err)=>console.log(err)) */