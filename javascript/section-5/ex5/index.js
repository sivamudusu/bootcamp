const { error } = require("console");

function makerequest(location) {
  return new Promise((resolve, reject) => {
    console.log("making request to" + location);
    if (location === "google") {
      resolve("google Says Hii");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve("extra info:  " + response);
  });
}

// makerequest("fb")
//   .then((response) => {
//     console.log("response has recieved");
//     return processRequest(response);
//   })
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((error) => {
//     console.log(error);
//   });




async function doWork(location){
    const response = await makerequest("google");
    console.log("response recieved");
    const process = await processRequest(response);
    console.log(process);

}

doWork();