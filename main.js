// get values from input filed and push it to array
// save changes button get value from input field
var id = 1;
// attach event to add button on it's click
$('#save-new-task').on('click', function () { // save changes
    // take value from the input
    var taskValue = $('#new-task-value').val().toString();
    // push the task value to P item

    $(".create-new-task").first()
        .addClass('new-task-text-from-value')
        .removeClass('create-new-task')
        .text(taskValue)
        .attr("id", id);
    var idstr = "#" + id;

   //make active edit and delete buttons
    $(idstr).parent().siblings(".date-style").children("button.edit")
        .removeClass()
        .addClass("btn btn-warning btn-sm edit")
        .attr("data-toggle", "modal");

    $(idstr).parent().siblings(".date-style").children("button.remove")
        .removeClass()
        .addClass("btn btn-danger btn-sm remove");

    // delete input field (clear it)
    $('#new-task-value').val('');
    id += 1;
});

// TODO
// if close is clicked remove the value of input field