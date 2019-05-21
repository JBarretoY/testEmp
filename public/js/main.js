$(function(){
    getAllUsers();
});

function getAllUsers(){
    $.ajax({
        url:'get-users',
        type:'GET',
        success:function(data){
            if(data.length){

                var len = data.length;
                $("#empList").html('');

                for(var i = 0; i < len; i++){
                    data[i]['roll'] === 2 ? roll = "Employee" : roll = "Admin";
                    var html = "<td>"+data[i]['name']+"</td> <td>"+data[i]['email']+"</td> <td>"+roll+"</td> <td>"+data[i]['created_at']+"</td> <td></td>";
                    $("#empList").append(html);
                }

            }
        }
    });
}
