

<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,"project_new");

var_dump($_FILES);
$filepath=$_FILES["file"]["name"];
//$payload = file_get_contents($filepath);
//$input = json_decode($payload, TRUE);

$filename=$_FILES["file"];
//echo $filename;

echo file_get_contents($_FILES['file']['tmp_name']); 
$file=file_get_contents($_FILES['file']['tmp_name']);
$emapData= explode(",",$file);
list($name,$mname,$lname, $id,$classid,$date ,$part_id,$addresss,$phone)=$emapData;

print_r($emapData);

//we check,file must be have csv extention

  //$file = fopen($filename, "r");
      // while(!feof($file)){
         //for($i=0;$i<10;$i=$i+1){
        // while (($emapData = fgetcsv($file, 10000, ",")) !== FALSE)
         //{
            //print_r($emapData);
            
            $sql = "INSERT into  student(name,mname,lname, id,classid,date ,part_id,addresss,phone) values ('$name','$mname','$lname',' $id','$classid','$date' ,'$part_id','$addresss','$phone')";

            // if($space[9]=="")  
            echo "\n";
            //mysqli_query($conn,$sql);
         //}
         mysqli_query($conn,$sql);
       // }
      //  }
         //fclose($file);
         echo "CSV File has been successfully Imported.";

//else {
 //   echo "Error: Please Upload only CSV File";
//}

?>