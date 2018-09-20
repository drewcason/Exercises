//jshint esversion:6
var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here



    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    document.getElementById('p1_fullName').innerHTML = `${firstName} ${lastName}`;

    checkNameValid = (firstName, lastName) => {
        if (firstName && lastName) {
            return true;
        } else {
            return false;
        }
    };


    document.getElementById('p1_valid').innerHTML = checkNameValid(firstName, lastName);

    var nameLength = firstName.length + lastName.length;
    document.getElementById('p1_fullNameLength').innerHTML = nameLength;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;

    var isValidEmail = (emailAddress.indexOf('@') > -1);
    document.getElementById('p2_valid').innerHTML = isValidEmail;

    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    document.getElementById('p3_number').innerHTML = randomNumber;

    isValidNumber = (randomNumber) => {
        let num = parseInt(randomNumber);
        if (isNaN(num)) {
            return false;
        } else {
            return true;
        }
    };

    document.getElementById('p3_valid').innerHTML = isValidNumber(randomNumber);

    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    arrayItems.push(arrayInput);
    document.getElementById('p4_arraylength').innerHTML = arrayItems.length;
    document.getElementById('p4_valid').innerHTML = arrayItems;
    console.log(arrayItems);

  function addClassInvalidToName(firstName,lastName) {
    let elmFirst = document.getElementById('firstName');
    let elmLast = document.getElementById('lastName')     
    if (!firstName && !lastName) {
            elmFirst.className += "invalid";
            elmLast.className += "invalid";
        } else if (!firstName) {
            elmFirst.className += "invalid";
        } else if (!lastName) {
            elmLast.className += "invalid";
        }
    }
    addClassInvalidToName(firstName);





    ////////////////////////Your code ends here.

}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}