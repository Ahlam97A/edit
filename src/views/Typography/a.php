
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');

$db = new mysqli("localhost","root","","project_new");
if(!$db) die("database connection error");

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,"project_new");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "Connected successfully";
} 



//$sql = "INSERT INTO student (name,id,classid,date) VALUES ('ahlam','123','545','17/2/17')";
// Escape user inputs for security
//if (isset($_REQUEST['Add'])) {
   
 //if (isset($_REQUEST['name']) && isset($_REQUEST['id']) && isset($_REQUEST['id'])) 
  //{

$payload = file_get_contents('php://input');
$input = json_decode($payload, TRUE);

        $first_name =  $input['name'];
        $last_name = $input['id'];
        $id = $input['id_st'];
 
// Attempt insert query execution
$sql = "INSERT INTO student(name, id,classid) VALUES ('$first_name', '$last_name', '$id')";
echo $sql;
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 


/*

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

*/
?>
