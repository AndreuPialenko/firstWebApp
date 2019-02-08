$(document).on("click", "#download-users", function () {
    var shownIds = [];
    var $ajaxTable = $('#ajax-table');

    var hiddenAttribute = $ajaxTable.attr("hidden");
    if (typeof hiddenAttribute === 'undefined') {
        var userIdsTrs = $('th.userId');
        for (var i = 0; i < userIdsTrs.length; i++) {
            shownIds.push($(userIdsTrs[i]).text());
        }
    }

    $.ajax({
        type: "get",
        url: "getAllGoods",
        dataType: 'json',
        async: false,
        success: (function (data) {
            if (data.length > 0) {
                // $ajaxTable.removeAttr("hidden");
                for (var i = 0; i < data.length; i++) {
                    $ajaxTable.append(
                        "<tr><th>" + data[i].name + "</th>" +
                        "<th>" + data[i].count + "</th>" +
                        "<th>" + data[i].price + "</th></tr>");
                }
            }
        }),
        error: function () {
            console.log("error");
        }
    });
});