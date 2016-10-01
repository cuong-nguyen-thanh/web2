var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


$(document).ready(function() {
    var username = getUrlParameter("username");
    console.log(username);

    $.ajax({
        url: "/api/user/account/" + username,
        method: "GET",
        contentType: "application/json",
    }).done(function(response) {
        $('#username').val(response[0].username);
        $('#role').val(response[0].role);
        $('#name').val(response[0].name);
        $('#age').val(response[0].age);
        console.log(response);
    });

    $("#edit").click(function() {
        $.ajax({
            url: "/api/user/edit",
            method: "PUT",
            data: JSON.stringify({
                name: $("#name").val(),
                age: $("#age").val(),
                username: $("#username").val(),
                role: $("#role").val()
            }),
            contentType: "application/json",
        }).done(function(response) {
            $("#message").text(response.message);
            console.log(response);
        });
    });
});
