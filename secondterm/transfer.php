<?php
	header("Access-Control-Allow-Origin");
	header("Content-Type:text/html,charset=utf8");
	include_once("conn3.php");
	$id = $_GET["id"];
	$sql2 = "select * from `lunbo`";
	$result2 = mysql_query($sql2);
	$classlist2 = array();
//	var_dump(mysql_fetch_object($result2));
	if(mysql_affected_rows()>0) {
		while($row=mysql_fetch_assoc($result2)) {
			array_push($classlist2,$row);
		}
	}
	 echo json_encode($classlist2);
?>