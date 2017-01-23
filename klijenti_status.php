<?php
  $fkln=$_REQUEST["fkln"];
  require("veza.php");
  $spis="SELECT * FROM  imenik_klijenti WHERE klkln=".$fkln;
  $ishod=mysqli_query($con, $spis);
  $row = mysqli_fetch_array($ishod);
  $spis="UPDATE imenik_klijenti ";
  if($row["stat"]=="0"){
     $spis=$spis."SET stat='1' ";                   	
  }
  else{
     $spis=$spis."SET stat='0' ";                   		
  }
  $spis=$spis."WHERE klkln=".$fkln;
  $ishod=mysqli_query($con, $spis);          
?>