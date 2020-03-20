// from data.js
var tableData = data;

// YOUR CODE HERE!

const loadTable = e => {
  table = d3.select("#table-area").html("");
  table = d3
    .select("#table-area")
    .append("table")
    .append("tbody");
  d3.select("table").attr("class", "table table-striped");
  th = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];
  head = d3
    .select("table")
    .append("thead")
    .append("tr");
  th.forEach(title => {
    head.append("th").text(title);
  });
  e.map(ufo => {
    tr = table.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      tr.append("td").text(value);
    });
  });
};
// d3.select("#datetime").on("keyup", () => {
//   console.log(d3.event.target.value);
//   console.log(d3.select("#datetime").attr("value"));
// });

// const handleClick = () => {
//   d3.selectAll("input").each(console.log(this));
// };

d3.select("#filter-btn").on("click", () => {
  date = d3.select("#datetime").node().value;
  if (date == "") {
    loadTable(tableData);
  } else {
    filterData = data.filter(e => e.datetime == date);
    loadTable(filterData);
    // console.log(date);
  }
  //   handleClick();
});

loadTable(tableData);
