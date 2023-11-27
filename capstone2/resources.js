function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.classList.toggle("collapsed");
}
const nav = document.getElementById("nav-bar");
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("./nav.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();
    nav.innerHTML = html;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    eval(doc.querySelector("script").textContent);
  } catch (err) {
    console.error(err);
  }
});

function menu() {
  const menu = document.getElementById("nav");
  menu.classList.toggle("toggle");
}

//chart data//
let chartdata = [];

async function getData(key, searchType) {
  let url = `https://openlibrary.org/search.json?q=${key}&page=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.docs);
    return data.docs;
  } catch (err) {
    console.log(err);
  }
}

const narrative = document.getElementById("narrativeText");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  p.id = "narrative1";
  p2.id = "narrative2"
  narrative.append(p);
  narrative.append(p2)

function updateNarrative(array,search){
  const p = document.getElementById("narrative1")
  const p2 = document.getElementById("narrative2");
  
  array.sort((a,b)=>a.count-b.count);
  // console.log(array);
  
  p.innerHTML = `<h4>Highest no of Books</h4>the books with genre <em><strong>${search}</strong></em>: the highest number of books in this genre are published in <em><strong>${array[array.length-1].year}</strong></em> at nearly <em><strong>${array[array.length-1].count}</strong></em> Books are there `
 
  
  p2.innerHTML = `<h4>lowest no of Books</h4>the books with genre <em><strong>${search}</strong></em>: the highest number of books in this genre are published in <em><strong>${array[0].year}</strong></em>at nearly <em><strong>${array[0].count}</strong></em> Books are there `;
  
}

function render(array,search) {
  const arrayData = array.reduce((grouped, book) => {
    const year = book.first_publish_year;
    if (grouped[year] == null) {
      grouped[year] = [];
    } else {
      grouped[year].push(book.title);
    }
    return grouped;
  }, {});

  const books = Object.keys(arrayData).map((year) => ({
    year,
    count: arrayData[year].length,
  }));

  const filters = books.filter((obj) => {
    if (obj.count > 0) {
      return obj;
    }
  });
  const filterd = filters.slice(0,filters.length-1);
  // console.log(filterd);
  updatechart(filterd);
  updateNarrative(filterd,search);
}

const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const width = 500 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

function updatechart(newData) {
  chartdata = newData;

  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(chartdata.map((book) => book.year))
    .padding(0.3);

  const y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(chartdata, (book) => book.count)]);

  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y);

  svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

  svg.append("g").call(yAxis);

  // Select and bind data to existing chart bars
  const updateSelection = svg.selectAll("rect").data(chartdata);

  // Update existing bars
  updateSelection
    .transition()
    .duration(1000)
    .attr("x", (d) => x(d.year))
    .attr("y", (d) => y(d.count))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.count));

  // Create new bars for any new data points
  updateSelection
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.year))
    .attr("y", height) // Set initial y position to the final y position
    .attr("width", x.bandwidth())
    .attr("height", 0) // Set initial height to 0
    .attr("fill", "steelblue")
    .transition()
    .duration(1000)
    .attr("y", (d) => y(d.count))
    .attr("height", (d) => height - y(d.count)); // Set the final height

  // Remove bars that are no longer in the data
  updateSelection.exit().transition().duration(1000).remove();

  svg.select(".x-axis").selectAll(".tick").data(x.domain()).exit().remove();

  // Remove old y-axis elements
  svg.select(".y-axis").selectAll(".tick").data(y.ticks()).exit().remove();
}
const form = document.getElementById("form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let search = document.getElementById("search").value;
  let ans = await getData(search, "genre");
  render(ans,search);
});





// line chart section below this line//

async function get() {
  const result = await getMockData();
  localStorage.setItem("mockdata", JSON.stringify(result));
}
// get();
async function getMockData() {
  url = "https://api.mockaroo.com/api/7d9643c0?count=500&key=953287f0";

  try {
    let response = await fetch(url, { method: "GET" });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("HTTP error! status: ${response.status}");
    }
  } catch (error) {
    console.log("Error: " + error);
  }
}

const localData = JSON.parse(localStorage.getItem("mockdata"));

const reduced = localData.reduce((grouped, obj) => {
  const genre = obj.genre;
  if (grouped[genre] == null) {
    grouped[genre] = [];
  } else {
    grouped[genre].push(obj);
  }
  return grouped;
}, []);

for (obj in reduced) {
  reduced[obj].sort((a, b) => a.publication_year - b.publication_year);
  reduced[obj].splice(0, reduced[obj].length - 10);
}
// console.log(reduced);
let filtered = localData.filter((book) => book.genre === "Horror");

let filter = filtered
  .slice(0, 11)
  .sort((a, b) => a.publication_year - b.publication_year);

//   const form = document.getElementById("genreSearch");
//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     var genreName = this.elements[0].value;
//     const formFilterd = localData.filter(
//       (book) => book.genre.toLowerCase() === genreName.toLowerCase()
//     );
//     filter = filtered
//       .slice(0, 11)
//       .sort((a, b) => a.publication_year - b.publication_year);

//       chart.update()

//     // console.log(filter);
//   });

function Obj(array) {
  let ans = [];
  for (o in array) {
    ans.push({
      label: o,
      data: array[o].map((book) => book.rating),
      borderColor: `${
        o == "Horror"
          ? "#FF499E"
          : o == "Mystery"
          ? "#D264B6"
          : o == "Science Fiction"
          ? "#A480CF"
          : o == "Thriller"
          ? "#779BE7"
          : o == "Fiction"
          ? "#136F63"
          : o == "Fantasy"
          ? "#FFBA08"
          : "#49B6FF"
      }`,
      borderWidth: 2,
    });
  }
  return ans;
}

console.log(Obj(reduced));

const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: filter.map((book) => book.publication_year),
    datasets: Obj(reduced),

    //   {
    //     label: filter[0].genre,
    //     data: filter.map((movie) => movie.rating),
    //     borderColor: "rgba(75, 150, 1, 1)", // Customize line color
    //     borderWidth: 2, // Customize line width
    //   },
    //   {
    //     label : "hello",
    //     data : [1,3,4,5,2,3,4,5,1,6]
    //   }

    // Add data for other genres
  },
  options: {
    plugins: {
      subtitle: {
        display: true,
        text: "Rating trends of Genres",
      },
    },
    transitions: {
      show: {
        animations: {
          x: {
            from: 0,
          },
          y: {
            from: 0,
          },
        },
      },
      hide: {
        animations: {
          x: {
            to: 0,
          },
          y: {
            to: 0,
          },
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
