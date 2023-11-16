const fetch = require("node-fetch");

const fetchUserData = async (id) => {
  const apiUrl = `https://cat-fact.herokuapp.com/${id}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch User data");
    }

    const useData = await response.json();
    const limitedData = useData[0];

    process(limitedData);
    // here processing the data after successfully ensuring that the data has recieved

    return limitedData;
  } catch (error) {
    console.error("error fetching userData", error.message);
  }
};

const process = (userdata) => {
  const processed = `${userdata.text}- updated At ${userdata.updatedAt}`;
  console.log(processed);
};

const ApiKey = "facts";

async function fetchData() {
  try {
    const fetchedData = await fetchUserData(ApiKey);

    console.log(fetchedData);
  } catch (error) {
    console.error("Error in fetchData:", error.message);
  }
}

const ans = fetchData();
