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
            .parent()
            .siblings(".date-style")
            .children("button.edit")
            .removeClass()
            .addClass("btn btn-warning btn-sm edit")
            .attr("data-toggle", "modal");

        $(idstr)
            .parent()
            .siblings(".date-style")
            .children("button.remove")
            .removeClass()
            .addClass("btn btn-danger btn-sm remove");
            // make active buttons edit and delete
            
        id += 1;
    });
});

// TODO
// if close is clicked remove the value of input field