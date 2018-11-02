$(document).ready(function () {

    $('#submit').on('click', submit);
    $('#success').hide();

    function submit() {
        const name = $('#name');
        const email = $('#email');
        const nameValue = name.val();
        const emailValue = email.val();
        const patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
        const isEmailValid = patt.test(emailValue); 


        name.removeClass('invalid');
        $('.errors').hide();
        email.removeClass('invalid');

        if (nameValue === '') {
            name.addClass('invalid');
            var parentDiv = name.closest('.input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }

        if (emailValue === '') {
            email.addClass('invalid');
            var parentDiv = email.closest('.input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }

        if (!isEmailValid) {
            email.addClass('invalid');
            var parentDiv = email.closest('.input-group');
            var errorSpan = parentDiv.find('.errors2');
            errorSpan.show();
        }

        if (nameValue && emailValue && isEmailValid) {
            $('#success').show(() =>{
                name.val('');
                email.val('');
            });
        }
    }

})

let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }