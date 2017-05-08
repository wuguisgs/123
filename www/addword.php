<!DOCTYPE html>
<html>
<head>
</head>

<body>
<?php
				$email = $_POST["email"];			
				$pass = $_POST["pass"];
				$fname = $_POST["fname"];
				$lname = $_POST["lname"];
				$try = $_POST["try"];
				
				
echo "<script type='text/javascript'>alert('$try');</script>";				
				
				
if (isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'hello':
            hello();
            break;
        case 'select':
            select();
            break;
    }
}

function hello() {
    echo "The hello function is called.";
    exit;
}

function insert() {
    echo "The insert function is called.";
    exit;
}




	
//database connection
$db = new MySQLDatabase();

$query = "INSERT INTO user VALUES
('".$try."','".$try."','".$try."','".$try."');";


$result = mysql_query($query,$db->connect());
if(!$result){
	die("Database query failed: " . mysql_error());
}

$db->disconnect();	
echo "<script>alert('add sucessfully.')</script>";
header("refresh:0; url=home.html"); 	



	
class MySQLDatabase{
	var $link;
	var $db;
	function connect(){
		$this->link = mysql_connect('infs3202-co778.zones.eait.uq.edu.au','infs','infs');
		if(!$this->link){
			die('Not connected : '.mysql_error($this->link));
		}
		$db =  mysql_select_db('read',$this->link);
		if(!$db){
			die ('Cannot use : '.mysql_error($this->link));
		}
		return $this->link;
	}	
	function disconnect(){
		mysql_close($this->link);
	}
}
	
	

	
	
?>
</body>
</html>