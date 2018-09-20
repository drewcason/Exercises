//jshint esversion:6
var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here
    function removeInvalidClass () {
        var removeInvalid = document.querySelectorAll('input');
        for (let i = 1, j = 4; i < j; i += 1) {
            removeInvalid[i].classList.remove("invalid");
        };
        
    }
    removeInvalidClass();

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
    var elmEmail = document.getElementById('p2_email');
    console.log(emailAddress);
    elmEmail.innerHTML = emailAddress;

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

    function addClassInvalidToName(firstName, lastName) {
        let elmFirst = document.getElementById('firstName');
        let elmLast = document.getElementById('lastName');
        if (lastName && !firstName) {
            elmFirst.classList.add("invalid");;
        } else if (firstName && !lastName) {
            elmLast.classList.add("invalid");;
        } else if (!firstName && !lastName) {
            elmFirst.classList.add("invalid");;
            elmLast.classList.add("invalid");;
        }
    }
    addClassInvalidToName(firstName, lastName);

    function addClassInvalidToEmail(isValidEmail) {
        let elmEmailAddress = document.getElementById('emailAddress')
        if (!isValidEmail) {
            elmEmailAddress.classList.add("invalid");;
        }
    }

    addClassInvalidToEmail(isValidEmail);

    function addClassInvalidToNumber(isValidNumber) {
        let elmRandomNumber = document.getElementById('randomNumber');
        if (!isValidNumber()) {
            elmRandomNumber.classList.add("invalid");;
        }
    }

    addClassInvalidToNumber(isValidNumber);
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