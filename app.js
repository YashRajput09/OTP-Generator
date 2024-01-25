let otpDisplay = document.querySelector('#otpDisplay');
let generateBtn = document.querySelector('#generateBtn');
function otpGenetator() {

    let otp = Math.floor(100000 + Math.random() * 900000);
    // return otp;
    // console.log(otp);
    otpDisplay.innerHTML = otp;
  
}
// Generate Button Click Event Listener
generateBtn.addEventListener('click',otpGenetator);