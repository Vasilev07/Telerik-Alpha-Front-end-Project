$(function () {
    var sharedState = {};

    $(".edit").click(function () {
        var rowId = $(this).parent().siblings(".check").children("p").attr("id");
        //takes id of the P in this row
        rowId = "#" + rowId;
        sharedState.rowId = rowId;
        // sets id in sharedstate object
        $("#edit-task-value").val($(rowId).text());
        // Add the value for editing in the form field

        var currentDate = $(this).parent().siblings(".date-style").children("p").text();
        sharedState.currentDate = currentDate;
        // taking date to edit and set to sharedState obj
        
        var rowAttribute = $(this).parent().parent().attr("sorting");
        sharedState.rowAttribute = rowAttribute;
    });

    $("#save-edit-task").click(function () {
        var taskVal = $("#edit-task-value").val().toString();
        console.log(taskVal);
        // takes value from the form
        var element = $(sharedState.rowId).text(taskVal);
        $(element[0]).text(taskVal);
        // sets the edited text to the P element
    });

    $('#editModal').on('hidden.bs.modal', function () {
        // clears the modal form field on esk, cancel and click out of the window.
        $('#edit-task-value').val('');
    });
});

