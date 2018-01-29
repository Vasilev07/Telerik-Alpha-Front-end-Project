/*eslint-disable*/

// var newRow = $("<div></div>");
// newRow.addClass("row");
// newRow.html(`<div class="col-xs-2 col-sm-1 date left">
//                 <div class="form-check text-center">
//                     <input class="form-check-input position-static checkbox-primary" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
//                 </div>
//             </div>
//             <div class="col-xs-10 col-sm-8 check">
//                 <p class="create-new-task">New Row</p>
//             </div>
//             <div class="col-xs-8 col-sm-2 date">
//                 <p></p>
//             </div>
//             <div class="col-xs-4 col-sm-1 date btn-group">
//                 <button type="button" class="btn btn-warning disabled btn-sm">
//                     <span class="glyphicon glyphicon-edit"></span>
//                 </button>
//                 <button type="button" class="btn btn-danger disabled btn-sm">
//                     <span class="glyphicon glyphicon-remove"></span>
//                 </button>
//             </div>`);

// console.log(newRow);
// $(".interface").append(newRow);
// $(".interface").append(newRow);

$('.row').on("change", function (e) {
    console.log(this);
    var rowToDelete = $(this);
    var inputCheck = $(e.target);
    var deleteButton = $(this).find(".btn-danger");
    // console.log(deleteButton);
    if ($(inputCheck).is(':checked')) {
        console.log("CHECKEd");
        deleteButton.removeClass("disabled");
        deleteButton.on("click", function () {
            rowToDelete.remove();
            var newRow = $("<div></div>");
            newRow.addClass("row");
            
            newRow.html(`<div class="col-xs-2 col-sm-1 date left">
                <div class="form-check text-center">
                    <input class="form-check-input position-static checkbox-primary" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                </div>
            </div>
            <div class="col-xs-10 col-sm-8 check">
                <p class="create-new-task">New Row</p>
            </div>
            <div class="col-xs-8 col-sm-2 date">
                <p></p>
            </div>
            <div class="col-xs-4 col-sm-1 date btn-group">
                <button type="button" class="btn btn-warning disabled btn-sm">
                    <span class="glyphicon glyphicon-edit"></span>
                </button>
                <button type="button" class="btn btn-danger disabled btn-sm">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </div>`);
            $(".interface").append(newRow);
        })
    } else {
        console.log("NOT");
        deleteButton.addClass("disabled");
    }


});
// $('.checkbox-primary').on("change", function () {
//     var rowToChange = $(this).parentsUntil(".interface");
//     if ($(this).is(':checked')) {
//         console.log($(this));
//         $(rowToChange.find(".disabled")).removeClass("disabled");
//         $(rowToChange).on("click", ".btn-danger", function () {
//             $(rowToChange).remove();
//             // $(".interface").append(newRow);
//             var newRow = $("<div></div>");
//             newRow.addClass("row");
//             newRow.html(`<div class="col-xs-2 col-sm-1 date left">
//                 <div class="form-check text-center">
//                     <input class="form-check-input position-static checkbox-primary" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
//                 </div>
//             </div>
//             <div class="col-xs-10 col-sm-8 check">
//                 <p class="create-new-task">New Row</p>
//             </div>
//             <div class="col-xs-8 col-sm-2 date">
//                 <p></p>
//             </div>
//             <div class="col-xs-4 col-sm-1 date btn-group">
//                 <button type="button" class="btn btn-warning disabled btn-sm">
//                     <span class="glyphicon glyphicon-edit"></span>
//                 </button>
//                 <button type="button" class="btn btn-danger disabled btn-sm">
//                     <span class="glyphicon glyphicon-remove"></span>
//                 </button>
//             </div>`);
//             $(newRow).appendTo(".interface")
//             // $(rowToChange).val('');
//         })
//     } else {
//         $(rowToChange.find("button")).addClass("disabled");
//     }
// });