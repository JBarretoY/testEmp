$(function(){
    getAllUsers();

    $("#saveUsu").click(function(){
        if($.trim($("#name").val()) === '' && $.trim($("#email").val()) === '' && $.trim($("#password").val()) === '' && $.trim($("#roll").val()) !== '---'){
            alert("Error! its missing some fields");
            return false;
        }else{
            createUser($("#name").val(),$("#email").val(),$("#password").val(),$("#roll").val());
        }
    });
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
                    var html = "<tr><td>"+data[i]['name']+"</td> <td>"+data[i]['email']+"</td> <td>"+roll+"</td> <td>"+data[i]['created_at']+"</td> <td></td></tr>";
                    $("#empList").append(html);
                }

            }
        }
    });
}

function cleanFormUser(){
    $("#name").val('');
    $("#email").val('');
    $("#password").val('');
    $("#roll").val('---');
}

function createUser(name,email,password,roll){
    $.ajax({
        url:"create-user",
        type:"POST",
        data:{
            name:name,
            email:email,
            password:password,
            roll:roll,
            _token:$("#token").val()
        },
        success:function(data){
            if(data){
                alert("User Created");
                cleanFormUser();
                getAllUsers();
            }
        },
    });
}
