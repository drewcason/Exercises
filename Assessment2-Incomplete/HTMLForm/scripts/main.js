//jshint esversion:6
$(document).ready(function() {
    $('#btnSubmit').on('click', submit);

    function getValue(id) {
        return document.getElementById(id).value;
    }

    function submit() {
        const messages = [];
        const findUs = document.getElementById('find-us');
        const findUsVal = findUs.options[findUs.selectedIndex].value;

        const user = {
            name: getValue('name'),
            email: getValue('email'),
            findUsValue: findUsVal
        };
        
        if(!user.name) {
            messages.push('Name is required.');
            $('#name').addClass('invalid');
        }

        if(!user.email) {
            messages.push('Email is required.');
            $('#email').addClass('invalid');
        }

        if (user.email.indexOf('@') === -1) {
            messages.push('Enter valid email address.');
            $('#email').addClass('invalid');
        }
  
        if (user.findUsValue === '') {
            messages.push('How Did You Find Us? is required.');
            $('#find-us').addClass('invalid');
        }


        let html = '<ul>';
            for (let i = 0; i < messages.length; i++) {
                html += '<li>' + messages[i] + '</li>';
            }
            html += '</ul>';
            $('#error-list').html(html);


        if (messages.length === 0) {
            $('#error-list').html('All fields are completed and valid.');
        }

        $.post("/AddEntry", user, function(response) {
            alert("Success");
        });
    }
}
);