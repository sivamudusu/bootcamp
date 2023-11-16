const fetch = require("node-fetch");

const fetchUserData = async (id) => {
  const apiUrl = `https://cat-fact.herokuapp.com/${id}`;

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
};

const process = (userdata) => {
  const processed = `${userdata.text}- updated At ${userdata.updatedAt}`;
  console.log(processed);
};

const ApiKey = "facts";

async function fetchData() {
  try {
    const fetchedData = await fetchUserData(ApiKey);
    const data = fetchedData[0];
    process(data);

    console.log(data);
  } catch (error) {
    console.error("Error in fetchData:", error.message);
  }
}

const ans = fetchData();
