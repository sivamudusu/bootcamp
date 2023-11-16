const axios = require("axios");

const fetchData = async () => {
  try {
    const apiurl = "https://jsonplaceholder.typicode.com/posts/1";
    const res = await axios.get(apiurl);
    console.log(res.data);
  } catch (err) {
    console.error("having trouble with fetching", err.message);
  }
};

fetchData();
