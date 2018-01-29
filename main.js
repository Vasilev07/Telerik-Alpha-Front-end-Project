// get values from input filed and push it to array
// save changes button get value from input field

var arr = [];
// attach event to add button on it's click
$('#save-new-task').on('click', function () { // save changes
    // take value from the input
    var taskValue = $('#new-task-value').val().toString();
    // push the task value to P item
<<<<<<< HEAD
    for (var text of $(".create-new-task")) {
        $(text).addClass('new-task-text-from-value');
        $(text).removeClass('create-new-task');
        $(text).text(taskValue);
        arr.push(taskValue);
        break
    }
    // save the date
=======
    $(".create-new-task").first()
        .addClass('new-task-text-from-value')
        .removeClass('create-new-task')
        .text(taskValue);
    arr.push(taskValue);
>>>>>>> 9f0c0eef435af4eb06c6101d6d653bc7db3fc9f9
    // delete input field (clear it)
    $('#new-task-value').val('');
});

console.log(arr);

// TODO
// if close is clicked remove the value of input field