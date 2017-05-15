/*===========================================================*/
// DATA RETRIEVAL METHOD WHERE 'data' REPRESENTS THE OBJECT
/*===========================================================*/
window.onload = function Maxicom () {

  const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`

  $.ajax({url: url}).done(function(mData) {
    console.log('Hello. The returned object is:', mData)
  })
  // console.log('mData out of first parens', mData)
}
  // console.log('mData out of second parens', mData)
/*===========================================================*/
// NEXT
/*===========================================================*/

console.log('hello steve')
// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 400 - margin.left - margin.right,
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

let data = {
    "flow": [
        {
            "id": 1,
            "report": "Flow",
            "report_data": [
                {
                    "report_id": 1,
                    "value": "80",
                    "timestamp": "2016-04-01T21:00:00"
                },
                {
                    "report_id": 1,
                    "value": "75",
                    "timestamp": "2016-04-01T21:01:00"
                },
                {
                    "report_id": 1,
                    "value": "30",
                    "timestamp": "2016-04-01T21:02:00"
                }
            ]
        }
    ]
}
console.log('data:', data)
let timestamp = data.flow[0].report_data[0].timestamp
console.log('timestamp:', timestamp)
let ts = new Date(timestamp)
console.log('ts:', ts)
let min = (ts.getMinutes() + ":00")
console.log('min:', min)
let Minutes = min
console.log('Minutes:', Minutes)
let gallons = data.flow[0].report_data[0].value
console.log('gallons:', gallons)
// let dataArr = data.flow[0]
// console.log('dataArr:' dataArr)
/*===========================================================*/
// load the data
d3.json("obj.json", function(error, data) {
console.log('inside d3.json function - obj.json:', data)
let dataArr = data.flow[0].report_data;
console.log('dataArr:', dataArr)
dataArr.forEach(function(d) {
  preMinutes = d
  preGallons = d
  // preMinutes = d.report_data.timestamp
  // preGallons = d.report_data.value
  console.log('d:', d)
  console.log('preMinutes/timestamp:', preMinutes)
  console.log('preGallons/value:', preGallons)

        // Minutes = Minutes
        // Gallons = +gallons
        // console.log('Minutes:', Minutes)
        // console.log('Gallons', Gallons)

    })

  // scale the range of the data
  // x.domain(data.map(function(d) { return d.Letter }))
  // y.domain([0, d3.max(data, function(d) { return d.Freq })])
/*===========================================================*/
    // d3.json("./obj.json", function(error, data) {
    //       console.log('hello world')
    //         let timestamp = data.flow[0].report_data[0].timestamp
    //         let ts = new Date(timestamp)
    //         let min = (ts.getMinutes() + ":00")
    //         let Minutes = min
    //         let gallons = data.flow[0].report_data[0].value
    //
    //
    //         data.forEach(function(d) {
    //             Minute = min
    //             Gallons = +gallons
    //


// load the data
// d3.json("obj.json", function(error, data) {
//     data.forEach(function(d) {
//         d.Letter = d.Letter
//         d.Freq = +d.Freq
//     })
//     console.log('hello dev')
//===================
//     d3.json("./obj.json", function(error, data) {
//       console.log('hello world')
//         let timestamp = data.flow[0].report_data[0].timestamp
//         let ts = new Date(timestamp)
//         let min = (ts.getMinutes() + ":00")
//         let Minutes = min
//         let gallons = data.flow[0].report_data[0].value
//
//
//         data.forEach(function(d) {
//             Minute = min
//             Gallons = +gallons
//===================
//
//       // scale the range of the data
//       xScale.domain(data.map(function(d) { return Minutes }))
//       yScale.domain([0, d3.max(data, function(d) { return Gallons })])
//   // scale the range of the data
//   // x.domain(data.map(function(d) { return d.Letter }))
//   // y.domain([0, d3.max(data, function(d) { return d.Freq })])
//
//   // add axis
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" )
//       .text("Minutes")
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 5)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Gallons")
//
//
//   // Add bar chart
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(Minutes) })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(Gallons) })
//       .attr("height", function(d) { return height - y(Gallons) })
//
    })
