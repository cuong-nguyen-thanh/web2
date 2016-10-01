// $.ajaxSetup({
//   beforeSend: function (xhr)
//     {
//       if (window.localStorage.get("token")) {
//         xhr.setRequestHeader("Authorization","Bearer " + window.localStorage.get("token"));
//       }
//     }
//   }
// });

$( document ).ready(function() {
    $("#search").click(function(){
      search();
    })
});
function deleteUser(username){
  console.log(username);
  $.ajax({
    method: 'DELETE',
    url: '/api/user/delete/' + username,
  }).done(function(response){
    if(response.status){
      search();
    }else{
      alert('delete failed');
    }
  })
};
function search(){
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
      newDo+="<td><a href='/admin/edit-user.html?username=" + response[i].username+"'>Edit&nbsp;&nbsp;</a>";
      newDo+="<a onclick=\"deleteUser('"+response[i].username+"')\" href='#'>Delete</a></td>";
      newDo+="</tr>";
      $("#table").append(newDo);
    }
  });

}
