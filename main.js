var id = 1;

function yearAsString(day, month, year) {
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return {
        usedForSorting: year + month + day,
        usedForDefaultDate: day + '/' + month + '/' + year
    }
}

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
        var currentDay = currentDate.getDate();
        var currentMonth = (currentDate.getMonth() + 1);
        var currentYear = currentDate.getFullYear();
        var parsedDate = currentDay + '/' + currentMonth + '/' + currentYear;
        var rowClass = yearAsString(currentDay, currentMonth, currentYear).usedForSorting + taskValue;

        $($(idstr).parentsUntil('.interface')[1]).attr('sorting', rowClass).addClass('used');
        // generate class from reversed date and text of the note
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
        // make active button edit
        $(".used")
        .find(".check-done")
        .removeClass("disabled");
        // enable check row button

        id += 1;
    });
});

$(function () {
    $('.closed').on('click', function () {
        $('#new-task-value').val('');
    });
    // when close btn is pressed remove the text in the input field
});


// $("#exampleModal").on("hidden.bs.modal", function() {
//     console.log(date);
//     $("#date-time").val(date[0]);
// });

$(function () {
    $('.add-new').on('click', function () {
        // var today = new Date();
        // var day = today.getDate();
        // var month = today.getMonth() + 1; //January is 0!
        // var year = today.getFullYear();
        // today = yearAsString(day, month, year).usedForDefaultDate;
        // get today date and parse it in proper format
        // attach the current date to default date in date pickers
        // $('#date-time').val(today);
        var today = $('#datetimepicker1').datetimepicker();
    });
});

$(function(){
    $(document).on("click", '.check-done', function (e) {
        // var rowToDelete = $(this);
        console.log(this);
        // var inputCheck = $(e.target);
        var paragraphToColor = $(this)
        .parent()
        .siblings(".check").children(".new-task-text-from-value").addClass(".text-success");
        console.log(this);
        // var successButton = $(this).find(".check-done");
        // if ($(successButton).on("click")) {
        //     paragraphToColor.addClass("text-success");
        // }         
    });
});