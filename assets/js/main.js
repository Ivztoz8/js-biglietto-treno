/* Variable declaration */
var userAge;
var userKm;
var userRate;
const rateKm = 0.21; 

function userData() {
userAge = prompt("Enter your Age ");
userKm = prompt("Enter kilometers of your travel ");
userRate = rateKm * userKm;
document.getElementById("ticket").innerHTML =
`You data: Age: ${userAge} Km: ${userKm} Fare: ${userRate} €`;  
    if(userAge < 20){
        document.getElementById("discountYoung").innerHTML =
        "You are entitled to the under 20 discount.";  
    } 
    else if(userAge > 65){
        document.getElementById("discountOver65").innerHTML =
        "You are entitled to the over 65 discount.";
    } 
    else{
        document.getElementById("discountNull").innerHTML =
        "You are not entitled to any discount";
    }    
}

