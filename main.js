// get values from input filed and push it to array
// save changes button get value from input field

// attach event to add button on it's click
$('#save-new-task').on('click', function () { // save changes
    // take value from the input
    var taskValue = $('#new-task-value').val().toString();
    // push the task value to P item
    $(".create-new-task").first()
        .addClass('new-task-text-from-value')
        .removeClass('create-new-task')
        .text(taskValue);
    // delete input field (clear it)
    $('#new-task-value').val('');
});

// TODO
// if close is clicked remove the value of input field