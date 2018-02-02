var id = 1;

function addRow(beforeClass) {
    var newRow = $("<div></div>");
    newRow.addClass(" row ")
        .addClass(" empty-row ")
        .html(`
            <div class="col-xs-2 col-md-1 date-style left">
                <div class="form-check text-center">
                    <input class="form-check-input position-static checkbox-primary" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                </div>
            </div>
            <div class="col-xs-7 col-md-7 check">
                <p class="create-new-task"></p>
            </div>
            <div class="col-xs-3 col-md-2 date-style">
                <p class="current-date"></p>
            </div>
            <div class="col-xs-12 col-md-2 date-style btn-group buttons-group">
                <button type="button" class="btn btn-warning disabled btn-sm edit" data-target="#editModal">
                    <span class="glyphicon glyphicon-edit"></span>
                </button>
                <button type="button" class="btn btn-success disabled btn-sm check-done">
                    <span class="glyphicon glyphicon-ok"></span>
                </button>
                <button type="button" class="btn btn-danger disabled btn-sm remove">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </div>
    `);
    return $(beforeClass).before(newRow);
}
// function to insert a new row at the bottom

function yearAsString(day, month, year) {
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return {
        usedForSorting: `${year}${month}${day}`,
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
        var currentDay = currentDate.getDate().toString();
        var currentMonth = (currentDate.getMonth() + 1).toString();
        var currentYear = currentDate.getFullYear().toString();
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

        if ($(".used").length >= 10) {
            addRow(".empty-last");
        }
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
        var today = $('#datetimepicker1').datetimepicker();
    });
});

$(function(){
    $(document).on("click", '.check-done', function () {
        var paragraphToColor = $(this)
        .parent()
        .siblings(".check")
        .children(".new-task-text-from-value")
        .addClass("text-muted");
        
        var textToDelete = paragraphToColor.text();
        paragraphToColor.html(`<del>${textToDelete}</del>`);
    });
});
// function to change text color when success button is clicked