const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
] 

// function superbowlWin(array) {
//   let findResult = array.find(o => o.result === "W")
//   if (findResult) {
//     return findResult.year
//   } else {
//     undefined
//   }
// }

function superbowlWin(array) {
  let findResult = array.find(o => {
    return o.result === "W"
  })
   if (findResult) {
        return findResult.year
      } else {
        undefined
      }
}


