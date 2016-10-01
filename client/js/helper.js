var callajax = function()

$.ajax({
  url: "/api/user/find"+url,
  method: "GET",
  contentType : "application/json",
}).done(function(response) {


})
