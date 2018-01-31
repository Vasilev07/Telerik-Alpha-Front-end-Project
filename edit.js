
// Option is to put only $(function(){}). This allows us to put this script befor the body.
$(function () {    
    $(".edit").on("click", function () {
        var rowId = $(this).parent().siblings(".check").children("p").attr("id");
        rowId = "#" + rowId;
        $("#save-edit-task").on("click", function () {
            var taskVal = $("#edit-task-value").val().toString();
            $(rowId).html(taskVal);
        });
    });
});
