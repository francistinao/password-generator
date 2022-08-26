const passwordValue = document.getElementById('password-label')
const lengthValue = document.getElementById('length');
const numberEnable = document.getElementById('number');
const characterEnable = document.getElementById('special-char');


//Work in progress

let length = lengthValue.value
let password = []
passwordValue.disabled = true

const passwordGenerator = () => {

}

const passwordGeneratorWithNumbers = () => {
    numberEnable.addEventListener("click", () => {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    
    for(let i = 0; i < length; i++) { 

    }
    })
}

const passwordGeneratorWithSymbols = () => {
     
}

const numbersInclude = () => {
    numberEnable.addEventListener("click", () => {
        passwordGeneratorWithNumbers()
    })
}