var database = [];

function sorttingData(data) {
    data.sort(function (x, y) {
        return y.rowSortingClass < x.rowSortingClass;
    });
}
// sorting function
$(function () {
    $('.sorting-btn').on('click', function () {
        database = [];
        // reset database
        var usedRows = $('.used');
        // get all rows with class used
        for (var i = 0; i < usedRows.length; i++) {
            // loop through rows which are not empty (have data)
            var sortingAttr = $(usedRows[i]).attr('sorting');
            // get added attribute from main.js
            var textParagraph = $(usedRows[i]).find('.new-task-text-from-value').text();
            var dateParagraph = $(usedRows[i]).find('.current-date').text();
            // get text of the row with attribute (their value)
            database.push({
                rowSortingClass: sortingAttr,
                rowText: textParagraph,
                rowDate: dateParagraph
            });
            // push da data to our fictional database
            sorttingData(database);
            // sort the database
        }

        for (var i = 0; i < usedRows.length; i++) {
            var changedText = database[i].rowText;
            var changedDate = database[i].rowDate;
            $(usedRows[i]).attr('sorting', database[i].rowSortingClass);
            // change the attribute with the sorted value 
            $(usedRows[i]).find('.new-task-text-from-value').text(changedText);
            $(usedRows[i]).find('.current-date').text(changedDate);
            // change the value of the row with sorted values from database
        }
    });
});