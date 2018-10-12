$(document).ready(function(){
    $('.error').hide();
    $('.input-group').filter(':even').addClass('even');
    $('#firstName').on('blur', function() {
        if ($(this).val() === '') {
            $(this).closest('div').find('.requiredMsg').fadeIn();
        } else {
            $(this).closest('div').find('.requiredMsg').fadeOut();
        }
    });
    $('#lastName').on('blur', function() {
        if ($(this).val() === '') {
            $(this).closest('div').find('.requiredMsg').fadeIn();
        } else {
            $(this).closest('div').find('.requiredMsg').fadeOut();
        }
    });
    $('#emailAddress').on('blur', function() {
        if ($(this).val() === '') {
            $(this).closest('div').find('.requiredMsg').fadeIn();
        } else {
            $(this).closest('div').find('.requiredMsg').fadeOut();
        } 
    });

    $('#emailAddress').on('blur', function() {
        if (($(this).val().indexOf('@') === -1) || ($(this).val().indexOf('.com') === -1)){
            $(this).closest('div').find('.emailMsg').fadeIn();
        } else {
            $(this).closest('div').find('.emailMsg').fadeOut();
        }
    });

});
