const form = document.getElementById("form");
const cardHolder = document.getElementById("cardname");
const cardNumber = document.getElementById("cardnumber");
const month = document.getElementById("dateMonth");
const year = document.getElementById("dateYear");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".name");
const numberOnCard = document.querySelector(".cardNumber");
const expMM = document.getElementById("month-display");
const expYY = document.getElementById("year-display");
const cvcOnCard = document.querySelector(".cvc");
const errorMsgDate = document.getElementById("errorMsgDate");
const thankYou = document.getElementById("thank-header");
const thankSection = document.getElementById("thank")
const continueBtn = document.getElementById("continue")

function inputName() {
    nameOnCard.innerHTML = cardHolder.value;
    
    if (nameOnCard.innerHTML == "") {
        nameOnCard.innerHTML = cardHolder.placholder;
        
    }
}

function inputNumber(){
    let cardNumberInput = cardNumber.value;
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, " ");
    formattedCardNumber = formattedCardNumber.substring(0,19);

    let cardNumberSection = formattedCardNumber.match(/\d{1,4}/g);
    if(cardNumberSection !== null){
        formattedCardNumber = cardNumberSection.join(" ");
    }

    if(cardNumberInput !== formattedCardNumber){
        cardNumber.value = formattedCardNumber;
    }
    numberOnCard.innerHTML = cardNumber.value;
    if(cardNumber.value === ""){
        numberOnCard.innerHTML = cardNumber.placholder;

    }
}

function inputMM(){
    let formattedMM = month.value;
    formattedMM = formattedMM.substring(0,2);
    month.value = formattedMM;
    if(month.value === ""){
        expMM.innerHTML = "00"

    }else{
        expMM.innerHTML = month.value;
    }
}
function inputYY(){
    let formattedYY = year.value;
    formattedYY = formattedYY.substring(0,2);
    year.value = formattedYY;
    if(year.value === ""){
        expYY.innerHTML = "00";

    }else{
        expYY.innerHTML = year.value;
    }
}

function inputCvc(){
    let formattedCvc = cvc.value;

    formattedCvc = formattedCvc.substring(0,3);
    cvc.value = formattedCvc;
    if(cvc.value === ""){
        cvcOnCard.innerHTML = "000";
    }else{
        cvcOnCard.innerHTML = cvc.value;
    }
    console.log(cvc.value)
}


function validateName(){
    let cardholderExp = /^[A-Z a-z]+$/;
    let errorMsg = document.getElementById("errorMsgName");
    if(cardHolder.value.match(cardholderExp)){
        errorMsg.textContent = ""
        cardHolder.classList.remove('error');
    }else{
        errorMsg.innerHTML = "Please enter cardholder name";
        cardHolder.classList.add('error');
    }
}

function validateExpiry(){
    let expMonth = /^[0-9]{2}$/;
    let expYear = /^[0-9]{2}$/;

    if(month.value.match(expMonth) && year.value.match(expYear)){
        errorMsgDate.innerHTML = "";
        month.classList.remove('error');
        year.classList.remove('error');
    }else if(month.value == "" || year.value == ""){
        errorMsgDate.innerHTML = "Can't be blank!"
        month.classList.add('error');
        year.classList.add('error');
    }else{
        errorMsgDate.innerHTML = "Wrong format!"
        month.classList.add('error');
        year.classList.add('error');
    }
}

function validateCard(){
    let errorMsgNumber = document.getElementById("errorMsgNumber");
    if(cardNumber.value.length > 0 && cardNumber.value.length < 19){
        errorMsgNumber.innerHTML = "Wrong format!";
        cardNumber.classList.add('error');
    }else if(cardNumber.value == ""){
        errorMsgNumber.innerHTML = "Can't be blank!"
        cardNumber.classList.add('error');
    }else{
        errorMsgNumber.innerHTML = "";
        cardNumber.classList.remove('error');

    }
}

function validateCvc(){
    let errorMsgCvc = document.getElementById("errorMsgCvc");
    let cvcExp = /^[0-9]{3}$/;
    if(cvc.value === ""){
         errorMsgCvc.innerHTML = "Can't be blank!"
         cvc.classList.add('error');
    }else if(cvc.value.match(cvcExp)){
        errorMsgCvc.innerHTML = "";
        cvc.classList.remove('error');
    }else{
        errorMsgCvc.innerHTML = "Wrong format!";
        cvc.classList.add('error');
    }
}
function massValidate(){
    validateCard();
    validateCvc();
    validateExpiry();
    validateName();
    if(nameOnCard.innerHTML == cardHolder.placholder || numberOnCard.innerHTML == cardHolder.placholder || expMM.innerHTML == "00" || expYY.innerHTML == "00" || cvcOnCard.innerHTML == "000" || (cardNumber.value.length > 0 && cardNumber.value.length < 16)){
            return false;
        }else{
            return true;
        }  
}

submit.addEventListener('click', function(){
    massValidate();
    if(massValidate() == false){
        event.preventDefault()
    }else{
        event.preventDefault()
        thankSection.classList.remove('hidden');
    }
});

continueBtn.addEventListener('click', function(){
    event.preventDefault();
    thankSection.classList.add('hidden');
    nameOnCard.innerHTML = "Jane Appleseed";
    numberOnCard.innerHTML = "0000 0000 0000 0000";
    expMM.innerHTML = "00";
    expYY.innerHTML = "00";
    cvcOnCard.innerHTML = "000";
    cardHolder.value = "";
    cardNumber.value = "";
    month.value = "";
    year.value = "";
    cvc.value = "";
    errorMsgDate.innerHTML = "";
});






