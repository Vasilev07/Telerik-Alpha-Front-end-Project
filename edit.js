$(function () {
    var sharedState = {};

    $(".edit").click(function () {
        var rowId = $(this).parent().siblings(".check").children("p").attr("id");
        //takes id of the P in this row
        rowId = "#" + rowId;
        sharedState.rowId = rowId;
        // sets id in sharedstate object
    });

    $("#save-edit-task").click(function () {
        var taskVal = $("#edit-task-value").val().toString();
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