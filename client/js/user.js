$( document ).ready(function() {
    $("#search").click(function(){
      var name = $("#name").val();
      var agefrom = $("#agefrom").val();
      var ageto = $("#ageto").val();
      var username = $("#username").val();
      var role = $("#role").val();
      var url = "?name="+name+"&username="+username+"&agefrom="+agefrom+"&ageto="+ageto+"&role="+role;
      $.ajax({
        url: "/api/user/find"+url,
        method: "GET",
        contentType : "application/json",
      }).done(function(response) {
        console.log(response);
        $("#table tr:not(:first)").hide();
        for(var i=0;i<response.length;i++){
          var newDo="<tr>";
          newDo+="<td>"+response[i].name+"</td>";
          newDo+="<td>"+response[i].age+"</td>";
          newDo+="<td>"+response[i].username+"</td>";
          newDo+="<td>"+response[i].role+"</td>";
          newDo+="<td><a href='#'>Edit</a></td>";
          newDo+="</tr>";
          $("#table").append(newDo);
        }
      });
    })

});
