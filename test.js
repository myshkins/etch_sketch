const test = "background-color: rgb(255, 163, 72); filter: brightness(0.9);"

let newValue = Number(test.split("(0.").pop().split(")").shift())-1
let tempCSS = test.split("s(0").shift()
let newCSS = tempCSS + 's(0.' + newValue + ");"


console.log(tempCSS);
console.log(newValue);
console.log(newCSS);