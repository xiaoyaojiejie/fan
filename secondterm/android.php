<?php
	include_once("conn3.php");
//	$lesson = $_GET["lesson"];
//	var_dump($lesson);
	$sql3 = "SELECT * FROM  `list` WHERE  `lesson-filter` =  'Android'";
	$result3 = mysql_query($sql3);
	$classlist3 = array();

	if(mysql_affected_rows()>0) {
		while($row1=mysql_fetch_assoc($result3)) {
			array_push($classlist3,$row1);
		}
		 echo json_encode($classlist3);
	}else {
		echo "暂未开课，请耐心等待";
	}
	
?>