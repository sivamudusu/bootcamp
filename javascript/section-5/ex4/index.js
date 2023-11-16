const fetch = require("node-fetch");

const fetchUserData = async (id) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch User data");
    }

    const useData = await response.json();
    const limitedData = useData;

    // process(limitedData);
    // here processing the data after successfully ensuring that the data has recieved

    return limitedData;
  } catch (error) {
    console.error("error fetching userData", error.message);
  }
};

const process = (userdata) => {
  const processed = `${userdata.id}- updated At ${userdata.title}`;
  return processed;
};

const fetchMultiple = async (userIds) => {
  try {
    const userPromises = userIds.map((userId) => fetchUserData(userId));
    const userdata = Promise.all(userPromises);
    const processPromises = (await userdata).map((data) => process(data));
    console.log(processPromises);

    // console.log(processed);

    // console.log("combined result :", processed);
    return userdata;
  } catch (error) {
    console.error("error in fetch multiple users", error.message);
    throw error;
  }
};
const userIds = [1, 2, 3];

async function fetchData() {
  try {
    const fetchedData = await fetchMultiple(userIds);

    // console.log(fetchedData);
  } catch (error) {
    console.error("Error in fetchData:", error.message);
  }
}

// const getdata = async () => {
//   try {
//     const fetched = await fetchUserData(2);
//     console.log(fetched);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getdata();
const ans = fetchData();

// const isOnline = true;
// const isWatching = false;

// const withPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (!isOnline) {
//       reject({
//         name: "user left",
//         body: "!",
//       });
//     } else if (!isWatching) {
//       reject({
//         name: "watching Something else",
//         body: "!",
//       });
//     } else {
//       resolve({
//         name: "success",
//         body: "thums up subscribe",
//       });
//     }
//   });
// };

// withPromise()
//   .then((message) => {
//     console.log(message.name + message.body);
//   })
//   .catch((error) => {
//     console.log(error.name + error.body);
//   });

// const task1 = new Promise((resolve, reject) => {
//   resolve("task one done");
// });

// const task2 = new Promise((resolve, reject) => {
//   resolve("task two is done");
// });

// const task3 = new Promise((resolve, reject) => {
//   resolve("task three is done");
// });

// Promise.all([task1, task2, task3]).then((messages)=>{console.log(messages);})
