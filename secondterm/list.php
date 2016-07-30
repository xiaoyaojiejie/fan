<?php
	include_once("conn3.php");
	$sql3 = "select * from `list`";
	$result3 = mysql_query($sql3);
	$classlist3 = array();
	if(mysql_affected_rows()>0) {
		while($row1=mysql_fetch_assoc($result3)) {
			array_push($classlist3,$row1);
		}
	}
	 echo json_encode($classlist3);	
?>