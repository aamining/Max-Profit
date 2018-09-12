// Case 1: Buy : Today Sell: Same Day (Today)
const prices = [ 201, 205, 220, 1, 190, 185, 205, 25, 30] //length=8

var sell = 0
var buy = 1
var i=0
var j=0


while (sell < buy) {
     sell = prices.indexOf(Math.max.apply(null, prices))
     buy = prices.indexOf(Math.min.apply(null, prices))
     if (sell<buy) {{prices.splice(sell,1)} {i++} {j++}} else null

}

console.log("buy@", buy+i)
console.log("sell@", sell+j)

// Case 2: Buy: Today Sell: Tomorrow (Any day)

// const prices = [220, 25, 201, 205, 200, 190, 185, 205, 210, 30]
//
//  var sell = prices.indexOf(Math.max.apply(null, prices))
//  var buy = prices.indexOf(Math.min.apply(null, prices))
//
// console.log("buy@", buy)
// console.log("sell@", sell)
