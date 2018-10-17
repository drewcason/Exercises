$(document).ready(function(){

    $('#btnOne').click(function() {
        alert ('You clicked the button!');
    });

    $('#btnTwo').click(function() {
        $('.update-html').html('<h3>Hello World!</h3>');
    });

    $('#btnThree').click(function() {
        $('#text-update').val('Hello World!');
    });

    $('#btnCopyHtml').click(function() {
        var copiedHtml = $('.copy-html').html();
        $('.paste-html').html(copiedHtml);
    });

    $('#btnCopyValues').click(function() {
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    })

});
