var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

console.log("Plus")
for (i = 0; i < arrayEen.length; i++){
    console.log(arrayEen[i] + arrayTwee[i])
}
console.log("Min")
for (i = 0; i < arrayEen.length; i++){
    console.log(arrayTwee[i] - arrayEen[i])
}
console.log("Keer")
for (i = 0; i < arrayEen.length; i++){
    console.log(arrayEen[i] * arrayTwee[i])
}
console.log("Delen")
for (i = 0; i < arrayEen.length; i++){
    console.log(arrayTwee[i] / arrayEen[i])
}