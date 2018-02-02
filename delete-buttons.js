/*eslint-disable*/

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
// function used to add a row at the bottom of the "page"

$(document).on("click", ".single-delete", function () {
    $(this).parentsUntil(".interface").remove();
    if ($(".used").length < 9) {
        addRow(".empty-last");        
    }
    if ($(".selected").length === 0) {
        $(".delete-all").addClass(" disabled ")
    }
})
// functionality when deleting a row with single buttons

$(document).on("click", ".delete-all", function () {
    $(".selected").remove();
    for (var i = 0; i < 10 - $(".used").length - 1; i += 1) {
        addRow(".empty-last")
    }
    if ($(".selected").length === 0) {
        $(".delete-all").addClass(" disabled ")
    }
})
// same but deleting with "Delete All" button

$(document).on("change", '.row', function (e) {
    var rowToDelete = $(this);
    var inputCheck = $(e.target);
    var deleteButton = $(this).find(".btn-danger");
    if ($(inputCheck).is(':checked')) {
        deleteButton.removeClass("disabled");
        deleteButton.addClass(" single-delete ");
        rowToDelete.addClass(" selected ");
        $(".delete-all").removeClass("disabled")
    } else {
        deleteButton.addClass(" disabled ");
        deleteButton.removeClass(" single-delete ");
        rowToDelete.removeClass(" selected ");
        if ($(".selected").length === 0) {
            $(".delete-all").addClass(" disabled ")
        }
    }
});
// adding and removing classes when checking/unchecking checkboxes
// classes are used by the functions above and needed by them to work properly
// added functionality to keep rows number correct when deleting