
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
$link = mysqli_connect("localhost", "root", "", "project_new");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$payload = file_get_contents('php://input');
$input = json_decode($payload, true);


$param1=$_GET['param1'];
$param2=$_GET['param2'];
$sql="SELECT SUM(point) FROM  grades WHERE name='aya said yamin' ";

$myArray = array();

if ($result = $link->query($sql)) {
 
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
     // echo $row;
        
        $myArray[] = $row; 
        
    }
   // echo (int)$myArray;
  // $x=json_encode($myArray);
  // echo $x;
    if($myArray>55){
    echo json_encode($myArray,JSON_NUMERIC_CHECK );}
}

 else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

mysqli_close($link);
?>