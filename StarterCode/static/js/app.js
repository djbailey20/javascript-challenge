// from data.js
var tableData = data;
var filterInfo = {
  datetime: "",
  city: "",
  state: "",
  country: "",
  shape: ""
};
// YOUR CODE HERE!

const loadTable = tableInfo => {
  d3.select("#table-area").html("");
  d3.select("#table-area")
    .append("table")
    .attr("class", "table table-striped");

  th = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];
  head = d3
    .select("table")
    .append("thead")
    .append("tr");
  th.forEach(title => {
    head
      .append("th")
      .text(title)
      .attr("class", "table-head");
  });
  table = d3.select("table").append("tbody");
  tableInfo.map(ufo => {
    tr = table.append("tr");
    Object.values(ufo).forEach(value => {
      tr.append("td").text(value);
    });
  });
};

d3.selectAll(".form-control").on("keyup", () => {
  filterInfo[d3.event.target.id] = d3.event.target.value;
  // console.log(filterInfo);
});

// d3.select("#filter-btn").on("click", () => {
//   date = d3.select("#datetime").node().value;
//   if (date == "") {
//     loadTable(tableData);
//   } else {
//     filterData = data.filter(e => e.datetime == date);
//     loadTable(filterData);
//     // console.log(date);
//   }
//   //   handleClick();
// });

function fInfo(info) {
  return (
    (filterInfo["datetime"] == info.datetime || filterInfo["datetime"] == "") &&
    (filterInfo["city"] == info.city || filterInfo["city"] == "") &&
    (filterInfo["state"] == info.state || filterInfo["state"] == "") &&
    (filterInfo["country"] == info.country || filterInfo["country"] == "") &&
    (filterInfo["shape"] == info.shape || filterInfo["shape"] == "")
  );
}

d3.select("#filter-btn").on("click", () => {
  filterData = data.filter(fInfo);
  loadTable(filterData);
});

loadTable(tableData);
