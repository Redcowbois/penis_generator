/* 
-= Penis Generator XL-6900 =-
- Length generator (8===D and actual measurement)
- 0-2 balls
- may have no penis 
*/ 

//Penis size 
let i=0
let penisLength = penisSize()
let penisCm = (penisLength.length*1.5 + Math.random()).toFixed(2) + " cm"
function penisSize() {
    if (Math.random()<0.1) {
        return "You have no penis"
    }
    else if (Math.random() <= 0.2 || i==5) {
        return (Math.random() >= 0.5)? "====D" : "=D"
    } else {
        i++ 
        return (Math.random() > 0.5)? "=" + penisSize() : "==" + penisSize()  
    }
}

//Balls
i=Math.random()
let ballsAmount = ""
let ballsAmountText = ""
if (penisLength.length > 15) {
    ballsAmountText = "have no balls either."
    ballAmount = ""
    penisLength = "You have no penis."
    penisCm= "0 cm"
} else {
    if (i>0.4) {
        ballsAmount = "8"
        ballsAmountText = "have two balls."
    } else if (i>0.2) {
        ballsAmount = "o"
        ballsAmountText = "have one ball."
    } else {
        ballsAmount = ""
        ballsAmountText = "got castrated."
    }
}
console.log(ballsAmount+penisLength)
console.log("Your penis is " + penisCm + " long and you " + ballsAmountText) 