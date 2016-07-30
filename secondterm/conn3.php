<?php
	header("Content-Type:text/html;charset=utf8");
	
	$url = "w.rdc.sae.sina.com.cn:3307";
	$root = "0ow2oxyx35";
	$pwd = "0kx5j2xihj3li32y52w4k0k35l51xliihm155k1h";
	
	$conn = @mysql_connect($url,$root,$pwd) or die("链接失败");
	
	mysql_select_db("app_weishao916");
	mysql_query("set names utf8");
	
//	$sql = "select * from lunbo";
//	$result = mysql_query($sql);
//	
//	if(mysql_affected_rows()>0) {
//		while($row = mysql_fetch_assoc($result)) {
//			echo $row["id"];
//		}
//	}
		
?>