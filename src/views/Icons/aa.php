
<?php
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');


$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");
$servername = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password, "project_new");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);
$first_name = $input['fname'];
$Mid_name = $input['mname'];
$Last_name = $input['lname'];
$teacherid = $input['id_t'];
$city=$input['city'];
$date = $input['DateofBirth'];
$subject = $input['sub'];
$address = $input['address'];
$phone = $input['phone'];
//$myArray = array('a'=>$input[phone]);
// Attempt insert query execution
$sql = "INSERT INTO teacher(fname,mname,lname, id,subject,city,phone ,address,DateBirth) VALUES ('$first_name','$Mid_name','$Last_name','$teacherid','$subject','$city','$phone','$address','$date')";
echo $sql;
if (mysqli_query($conn, $sql)) {
    echo "Records added successfully.";
} else {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

?>