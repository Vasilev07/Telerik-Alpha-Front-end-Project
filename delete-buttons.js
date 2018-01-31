/*eslint-disable*/

function addRow(beforeClass) {
    var newRow = $("<div></div>");
    newRow.addClass(" row ")
        .addClass(" empty-row ")
        .html(`
    <div class="col-xs-2 col-sm-1 date-style left">
        <div class="form-check text-center">
            <input class="form-check-input position-static checkbox-primary" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
        </div>
    </div>
    <div class="col-xs-10 col-sm-8 check">
        <p class="create-new-task"></p>
    </div>
    <div class="col-xs-8 col-sm-2 date-style">
        <p class="current-date"></p>
    </div>
    <div class="col-xs-4 col-sm-1 date-style btn-group">
        <button type="button" class="btn btn-warning disabled btn-sm edit" data-target="#editModal">
            <span class="glyphicon glyphicon-edit"></span>
        </button>
        <button type="button" class="btn btn-danger disabled btn-sm remove">
            <span class="glyphicon glyphicon-remove"></span>
        </button>
    </div>
    `);
    return $(beforeClass).before(newRow);
}

$(document).on("click", ".single-delete", function () {
    $(this).parentsUntil(".interface").remove();
        addRow(".empty-last");
})

$(document).on("click", ".delete-all", function () {
    var countOfNewRows = $(".selected").length;
    $(".selected").remove();
    for (var i = 0; i < countOfNewRows; i += 1) {
        addRow(".empty-last")
    }
})

$(document).on("change", '.row', function (e) {
    var rowToDelete = $(this);
    var inputCheck = $(e.target);
    var deleteButton = $(this).find(".btn-danger");
    if ($(inputCheck).is(':checked')) {
        deleteButton.removeClass(" disabled ");
        deleteButton.addClass(" single-delete ");
        rowToDelete.addClass(" selected ");

    } else {
        deleteButton.addClass(" disabled ");
        deleteButton.removeClass(" single-delete ");
        rowToDelete.removeClass(" selected ");
    }
});