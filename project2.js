const passwordBox=document.getElementById("password");
const length =12;//pass size

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789";
const symbol="!@#$%^&*()_+";

const allChars=upperCase+lowerCase+numbers+symbol;

// function for genrating random pass
function createPassword(){

//Math.random(): Generates a random number between 0 and 1.
// Math.random() * array.length: Scales the random number to the length of the array.
// Math.floor(): Converts the scaled random number into an integer to use as an index for the array.
    let password="";//one var with pass which is empty
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=numbers[Math.floor(Math.random()*numbers.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];


    // for 12 char
    while(length>password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)];

    }

    // for showing
    passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

// therory
// Suppose:

// upperCase = ['A', 'B', 'C', ..., 'Z'] (26 letters).
// Math.random() generates 0.5.
// The calculation would proceed like this:

// Math.random() * upperCase.length → 0.5 * 26 → 13.
// Math.floor(13) → 13.
// So, upperCase[13] would be the letter at index 13 ('N').