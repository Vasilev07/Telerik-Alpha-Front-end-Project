$(function () {
    var sharedState = {};

    $(".edit").click(function () {
        var rowId = $(this).parent().parent(".row").attr("id");
        rowId = "#" + rowId;
        console.log(rowId);
        sharedState.rowId = rowId;

       
    });

    $("#save-edit-task").click(function () {
        var taskVal = $("#edit-task-value").val().toString();
        var element = $(sharedState.rowId).find(".new-task-text-from-value");
        $(element[0]).text(taskVal);
        console.log(element[0]);
    });

    $('#editModal').on('hidden.bs.modal', function () {
        $('#edit-task-value').val('');
    })
});