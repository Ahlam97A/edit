<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:3000');


$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");
$servername = "localhost";
$username = "root";
$password = "";



$conn = new mysqli($servername, $username, $password, "project_new");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}


$payload = file_get_contents('php://input');
$input = json_decode($payload, true);

$passs="SELECT password FROM principal ";
$id=$input['id'];

$city = $input['city'];
$add = $input['address'];
$phone = $input['phone'];

$old_password=$input['pwd'];
$new_password=$input['new_pwd'];


$chg_pwd=mysqli_query($conn,"SELECT password FROM principal where id='$id'");
$chg_pwd1=mysqli_fetch_array($chg_pwd);
$data_pwd=$chg_pwd1['password'];
if($data_pwd==$old_password){
//if($new_password==$con_password){
    if(1){
$update_pwd=mysqli_query($conn,"update principal set password='$new_password' ,address='$add' ,phone='$phone' WHERE id='$id'");

$change_pwd_error="Update Sucessfully !!!";
    }
else{
$change_pwd_error="Your new and Retype Password is not match !!!";
}
}
else
{
$change_pwd_error="Your old password is wrong !!!";
}
echo "done";
/*
    
if (mysqli_query($conn, $update_pwd)) {
    echo "Records updated successfully";
} else {
    echo "ERROR: Could not able to execute $update_pwd ".mysqli_error($conn);
}


*/
        
?>

       
        
      