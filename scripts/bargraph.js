/*===========================================================*/
// DATA RETRIEVAL METHOD WHERE 'data' REPRESENTS THE OBJECT
/*===========================================================*/
const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`
window.onload = function Maxicom () {


  $.ajax({url: url}).done(function(mData) {
    console.log('The returned mData:', mData)
  })
}
/*===========================================================*/
// NEXT
/*===========================================================*/

console.log('hello steve')
// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom
    console.log('margin:', margin)
    console.log('width:', width)
    console.log('height:', height)

// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05)
    console.log('x:', x)
var y = d3.scale.linear().range([height, 0])
    console.log('y:', y)

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    console.log('xAxis:', xAxis)

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10)
    console.log('yAxis:', yAxis)


// add the SVG element
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
    console.log('svg:', svg)

// let data = {
//     "flow": [
//         {
//             "id": 1,
//             "report": "Flow",
//             "report_data": [
//                 {
//                     "report_id": 1,
//                     "value": "80",
//                     "timestamp": "2016-04-01T21:00:00"
//                 },
//                 {
//                     "report_id": 1,
//                     "value": "75",
//                     "timestamp": "2016-04-01T21:01:00"
//                 },
//                 {
//                     "report_id": 1,
//                     "value": "30",
//                     "timestamp": "2016-04-01T21:02:00"
//                 }
//             ]
//         }
//     ]
// }
// console.log('data:', data)
// let timestamp = data.flow[0].report_data[0].timestamp
// console.log('timestamp:', timestamp)
// let ts = new Date(timestamp)
// console.log('ts:', ts)
// let min = (ts.getMinutes() + ":00")
// console.log('min:', min)
// let Minutes = min
// console.log('Minutes:', Minutes)
// let gallons = data.flow[0].report_data[0].value
// console.log('gallons:', gallons)
// let dataArr = data.flow[0]
// console.log('dataArr:' dataArr)




// let timestamp = data.flow[0].report_data[0].timestamp
// let ts = new Date(timestamp)
// let min = (ts.getMinutes() + ":00")
// let Minutes = min


/*===========================================================*/


// load the data
d3.json("flow.json", function(error, data) {
// d3.json(url, function(error, data) {
  if (error) {
    console.log('error:', error);
  } else {
    console.log('data:', data);
  }

  console.log('inside url function - url', data)
  data = data.flow[0].report_data;
  console.log('data:', data)

  data.forEach(function(d) {
    d.value = +d.value;
    d.timestamp = new Date(d.timestamp)
    d.timestamp = (d.timestamp.getMinutes() + ":00")
    d.timestamp = d.timestamp;
    console.log('d.timestamp forEach', d.timestamp);
      // let timestamp = d.timestamp
      // let ts = new Date(timestamp)
      // let min = (ts.getMinutes() + ":00")
    // console.log('gallons/value:', gallons)
    // console.log('minutes/timestamp++:', minutes)
  })

  // let timestamp = d.timestamp
  // let ts = new Date(d.timestamp)
  // let min = (ts.getMinutes() + ":00")
  // minutes = min;
  // console.log('minutes - x.domain:', minutes);

  // scale the range of the data
  x.domain(data.map(function(d) {
  // let timestamp = d.timestamp
  // let ts = new Date(timestamp)
  // let min = (ts.getMinutes() + ":00")
  // minutes = min;
  // console.log('minutes - x.domain:', minutes);
  // return minutes
  return d.timestamp
  }))
  y.domain([0, d3.max(data, function(d) {
  // let gallons = d.value;
  // console.log('gallons - y.domain', gallons);
  // return gallons
  return d.value
 })])

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-45)")

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Gallons")


  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.timestamp) })
      .attr("width", x.rangeBand())
      // .attr("y", function(d) { return y(gallons) })
      // .attr("height", function(d) { return height - y(gallons) })
      .attr("y", function(d) { return y(d.value) })
      .attr("height", function(d) { return height - y(d.value) })

    })
