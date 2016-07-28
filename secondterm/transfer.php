<?php
	header("Access-Control-Allow-Origin");
	include_once("conn3");
	$t = $_GET["t"];
	$sql2 = "select * from `lunbo` where `id` = $t";
	$result2 = mysql_query($sql2);
	$classlist2 = array();
	if(mysql_affected_rows()>0) {
		while($row=mysql_fetch_assoc($result2)) {
			array_push($classlist2,$row);
		}
	}
	echo json_encode($classlist2);
?>