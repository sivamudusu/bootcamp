const fetch = require("node-fetch");

async function fetchUserData(userId) {
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${userId}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch User data");
    }

    const useData = await response.json();

    return useData;
  } catch (error) {
    console.error("error fetching userData", error.message);
  }
}

const ApiKey = "8d07673e2a66c05c34772123d64e2d72";

async function fetchData() {
  try {
    const fetchedData = await fetchUserData(ApiKey);
    console.log(fetchedData);
  } catch (error) {
    console.error("Error in fetchData:", error.message);
  }
}

const ans = fetchData();
console.log(ans);
