$('.submit-button').on('click', function(){
    var userName = $('#user-name').val();
    // $(userName).css('font-weight', 'bold');
    // get value from input field
    $('#user-name').val('');
    $('#email').val('');
    $('#pwd').val('');
    // delete input field text

    $("#greeting-message").html(`Hello <b>${userName}</b>. Thank you for using our application. We hope you enjoy our services.`)
});

$('.close-button').on('click', function(){
    $('#email').val('');
    $('#user-name').val('');
    $('#pwd').val('');
    // delete input field text
});