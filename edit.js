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
    var sharedState = {};

    $(".edit").click(function () {
        var rowId = $(this).parent().siblings(".check").children("p").attr("id");
        //takes id of the P in this row
        rowId = "#" + rowId;
        sharedState.rowId = rowId;
        // sets id in sharedstate object
        $("#edit-task-value").val($(rowId).text());
        // The function sets value for editing in the form field

        var currentDate = $(this).parent().siblings(".date-style").children("p").text();
        currentDate = currentDate.split("/");        
        var date = moment(new Date(`${currentDate[2]}/${currentDate[1]}/${currentDate[0]}`));
        $('#datetimepicker1-edit').datetimepicker({
            defaultDate: date            
        });
        // This function sets the default date in the edit form
    });


    $("#save-edit-task").click(function () {
        var taskVal = $("#edit-task-value").val().toString();
        var element = $(sharedState.rowId).text(taskVal);
        $(element[0]).text(taskVal);
        // sets the edited text to the P element

        var currentDate = $('#datetimepicker1-edit')
            .data("DateTimePicker")
            .date()._d;
        var currentDay = currentDate.getDate();
        var currentMonth = (currentDate.getMonth() + 1);
        var currentYear = currentDate.getFullYear();
        var parsedDate = currentDay + '/' + currentMonth + '/' + currentYear;
        $(sharedState.rowId)
            .parent()
            .siblings(".date-style")
            .children(".current-date")
            .text(parsedDate);
        // sets the edited date in the field

        var rowClass = yearAsString(currentDay, currentMonth, currentYear).usedForSorting + taskVal;
        $(sharedState.rowId).parent().parent().attr("sorting", rowClass);
        // sets the eddited date attribute    
    });

    $('#editModal').on('hidden.bs.modal', function () {
        // clears the modal form field on esk, cancel and click out of the window.
        $('#edit-task-value').val('');
    });
});