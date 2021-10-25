//let randNum = Math.floor(Math.random() * 10000);
console.log("Hello World.")

function randFunc(){
let randArray = [];
let inputNum = document.getElementById("tb-1");
let arrNum = inputNum.value;
let lNum, sNum;

for (let i=0; i<arrNum; i++){
let randNum = Math.floor(Math.random() * 10000);
randArray.push(randNum);

if (i === 0){
    lNum = randNum;
    sNum = randNum;
}

if (lNum < randNum)
lNum = randNum;
if (sNum > randNum)
sNum = randNum;
}
console.log(document.getElementById("tb-1").innerHTML);
document.getElementById("p1").innerHTML = randArray + "<br>" 
+ "The largest number is: " + lNum + "<br>" 
+ "The smallest number is: " + sNum;
}