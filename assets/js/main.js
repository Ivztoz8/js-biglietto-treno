/* Variable declaration */
let userAge;
let userKm;
let userRate;
const rateKm = 0.21; 
let userRateYoung;
let userRateOld;

function userData() {
userAge = prompt("Enter your Age ");
userKm = prompt("Enter kilometers of your travel ");

/* Calc */
userRate = rateKm * userKm;
userRateYoung = ((userRate*20) /100 )
userRateOld = ((userRate*40) /100 )
userRateYoung = userRateYoung.toFixed(2);
userRateOld = userRateOld.toFixed(2);

document.getElementById("ticket").innerHTML =
`You data: Age: ${userAge} Km: ${userKm} Standard Fare: ${userRate} €`;  
    if(userAge < 20){
        document.getElementById("discountYoung").innerHTML =
        `You are entitled to the under 20 discount. Your fare is ${userRateYoung} €`;  
    } 
    else if(userAge > 65){
        document.getElementById("discountOver65").innerHTML =
        `You are entitled to the over 65 discount. Your fare is ${userRateOld} €`;
    } 
    else{
        document.getElementById("discountNull").innerHTML =
        "You are not entitled to any discount";
    }    
}

