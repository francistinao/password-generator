const passwordValue = document.getElementById('password-label')
const numberEnable = document.getElementById('number');
const characterEnable = document.getElementById('special-char');
const generatePasswordBtn = document.getElementById('generate-pass');
const copyToClipboard = document.getElementById('copy-to-clipboard');

//Work in progress
let lettersOnly = ""
let password = ""
let length, passGenerated = 0;
const tenSeconds = 10000;

passwordValue.disabled = true

generatePasswordBtn.onclick = () => {
    length = document.getElementById('length-label').value
    passwordGenerator();
}

const evaluateCopyToClipBoard = () => {
    copyToClipboard.addEventListener("click", () => {
        const copyText = document.getElementById('password-label');
        //Evaluates if the value of the innerfield of copyText is empty or not
        if(copyText.value == "") {
            alert("No value in password generator. Press Generate Password first");
        } else {
            //Selects the input field
            copyText.select();
            //For mobile devices
            copyText.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(copyText.value).then(() => { //Promise is created 
                //for it to be copied
                alert("Password copied successfully");
            })
        }
    })
}

const passwordGenerator = () => {
    //This will indicate that the user is generating a new password
    passGenerated += 1;
    //Conditions to determine if each corresponding checkbox is checked or not
    //And it will produce the following if it satisfies the condition
    if(numberEnable.checked == false && characterEnable.checked == false)  {
        passwordValue.value = passwordGeneratorWithoutNumbersAndCharacters();
    } else if(numberEnable.checked == true && characterEnable.checked == false) {
        passwordValue.value = passwordGeneratorWithNumbers();
    } else if (numberEnable.checked == false && characterEnable.checked == true) {
        passwordValue.value = passwordGeneratorWithSymbols();
    } else if(numberEnable.checked == true && characterEnable.checked == true) {
        passwordValue.value = passwordGeneratorWithNumbersAndSymbols();
    }
    console.log(passGenerated)
    //checks if length of the password is greater than 0 or not
    if(length == 0) alert("Please enter length for password")
    //If the user generates another password, then it will generate a new password
    if(passGenerated > 1) {
        password = ""
        generatePasswordBtn.innerText = "Generate New Password"
    }
 }

 //Function to generate a password without numbers and characters
 //This will be passed into the password generator function
const passwordGeneratorWithoutNumbersAndCharacters = () => {
    //variable lettersOnly is an array of characters which are concatinated 
    //simply called a string
    lettersOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for(let i = 0,n = lettersOnly.length; i < length; i++) {
        //Iterate throughout the lettersOnly's length 
        password = password + lettersOnly.charAt(Math.floor(Math.random() * n))
        //password will be generated by adding itself to the lettersOnly's values which
        //are generated randomly by Math.random multiplied by the lettersOnly's length
    }

    return password;
}

//Function to generate a password with numbers 
const passwordGeneratorWithNumbers = () => {
    lettersOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
   
    for(let i = 0,n = lettersOnly.length; i < length; i++) {
        password = password + lettersOnly.charAt(Math.floor(Math.random() * n))
    }

    return password;
}

//Function to generate a password with symbols
const passwordGeneratorWithSymbols = () => {
    lettersOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]:;<>"

    for(let i = 0,n = lettersOnly.length; i < length; i++) {
        password = password + lettersOnly.charAt(Math.floor(Math.random() * n))
    }

    return password;
}

//Function to generate a password with both numbers and symbols
const passwordGeneratorWithNumbersAndSymbols = () => {
    lettersOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]:;<>1234567890"

    for(let i = 0,n = lettersOnly.length; i < length; i++) {
        password = password + lettersOnly.charAt(Math.floor(Math.random() * n))
    }

    return password;
}

evaluateCopyToClipBoard()
