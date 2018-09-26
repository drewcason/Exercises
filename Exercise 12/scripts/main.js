function update() {
    /* ===================
        Your code starts here
    =====================*/
    const messages = [];
    
    const user = {
        firstname: getValue('firstName'),
        lastname: getValue('lastName'),
        email: getValue('emailAddress'),

        fullname() {
            return `${this.firstname} ${this.lastname}`;
        }
    }
    //Create new array.

    //If first name is empty. Add it to the array
    if (!user.firstname) {
        messages.push('First Name is required.');
    };

    //If last name is empty. Add it to the array
    if (!user.lastname) {
        messages.push('Last Name is required.')
    };

    //Email is empty. Add it to the array
    if (!user.email) {
        messages.push('Email is required')
    };

    //Loop through array
    let html = '<ul>'
    for (let i = 0; i < messages.length; i++) {
        html += '<li>' + messages[i] + '</li>';
    }
    html += '</ul>';
    document.getElementById('error-list').innerHTML = html;

    //Create javascript object for the user
    


    //log the user object to the console
    console.log(user);

    //Check to see if everything is valid
    if (messages.length === 0) {
        let submitDate = new Date();
        alert(submitDate.toDateString()) ; 
    }
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.

    //Make the alert box.


    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}