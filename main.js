var id = 1;
$(function () {
    // attach event to add button on it's click    
    $('#save-new-task').on('click', function () { // save changes
        var taskValue = $('#new-task-value').val().toString();
        // take value from the input
        $(".create-new-task")
            .first()
            .removeClass('create-new-task')
            .addClass('new-task-text-from-value')
            .text(taskValue)
            .parent()
            .parent(".row")
            .attr("id", id);
        $('#new-task-value').val('');
        // delete input field (clear it) 

        var idstr = "#" + id;

        var currentDate = $('#datetimepicker1')
            .data("DateTimePicker")
            .date()._d;
        // get current date

        var parsedDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

        $(idstr)
            .parent()
            .siblings(".date-style")
            .children(".current-date")
            .html(parsedDate);
        // add parsed string to class date-style.current-date

        $(idstr)
            .children(".date-style")
            .children("button.edit")
            .removeClass()
            .addClass("btn btn-warning btn-sm edit")
            .attr("data-toggle", "modal");

        $(idstr)
            .children(".date-style")
            .children("button.remove")
            .removeClass()
            .addClass("btn btn-danger btn-sm remove");
        // make active buttons edit and delete
        id += 1;
    });
});

$(function () {
    $('.closed').on('click', function () {
        $('#new-task-value').val('');
    });
    // when close btn is pressed remove the text in the input field
});

$(function () {
    $('.add-new').on('click', function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;
        // get today date and parse it in proper format
        // attach the current date to default date in date picker
        $('#date-time').val(today);
    });
});