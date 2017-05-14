// // window.onload = function Maxicom () {
// //
// //   const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`;
// //
// //   $.ajax({
// //     url: url
// //   }).done(function(data) {
// //     console.log('The returned object is:', data)
// //   })
// //
// //
// let data = { "flow": [
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
//                     "value": "30",
//                     "timestamp": "2016-04-01T21:01:00"
//                 },
//                 {
//                     "report_id": 1,
//                     "value": "75",
//                     "timestamp": "2016-04-01T21:02:00"
//                 }
//             ]
//         }
//     ]
// }
//   let dataArray = data.flow;
//   console.log(dataArray);
//   let minArray = data.map(function(min) {
//
//   })
//
//   let timestamp = data.flow[0].report_data[0].timestamp;

//
// //select canvas
// //set dimensions of canvas
// var svg = d3.slect("svg"),
//     margin = {top: 20, right: 20, bottom: 30, left: 50},
//     width = +svg.attr("width") - margin.left - margin.right,
//     height = +svg.attr("height") - margin.top - margin.bottom,

    // g = svg.append("g").attr("transform", "translate"(" + margin.left + "," + margin.top + ")");

// let targetedData = {
//   dataArrays:data.data.flow[0].report_data,
//   flow: data.data.flow,
//   data: data,
//   reportId: data.data.flow[0].report_data[0].report_id,
//   timeStamp: data.data.flow[0].report_data[0].timestamp,
//   value: data.data.flow[0].report_data[0].value
// }



// let data = { "flow": [
//         {
//             "id": 1,
//             "report": "Flow",
//             "report_data": [
//                 {
//                     "report_id": 1,
//                     "value": "80",
//                     "timestamp": "2016-04-01T21:00:00"
//                 }
//             ]
//         }
//     ]
// }



let objJSON = { "flow": [
        {
            "id": 1,
            "report": "Flow",
            "report_data": [
                {
                    "report_id": 1,
                    "value": "80",
                    "timestamp": "2016-04-01T21:00:00"
                }
            ]
        }
    ]
}



// let test = objJSON.flow[0];
let timestamp = objJSON.flow[0].report_data[0].timestamp;
// // let timeStamp = objJSON
// console.log("hi");
// console.log('test', test);
// console.log('timestamp:', timestamp);
// console.log(Date.parse(timestamp));
// let t = Date.parse(timestamp);
// console.log(t);
// // console.log(Date.getMinutes(timestamp));
// // console.log(timestamp.toDateString())
let ts = new Date(timestamp)
// console.log(ts);
// console.log(ts.getMinutes() + ":00");
let min = (ts.getMinutes() + ":00");
console.log(min);




// console.log('targetedData', targetedData);
// let d = new Date();
// console.log(d);
// d = d.getMinutes();
// console.log(d);
// console.log(timestamp);
// let t = timestamp.getHours();
// console.log(t);
// let min = timestamp.getMinutes()
// console.log('min', min);
// }
