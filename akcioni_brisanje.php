<?php
  $fkln=$_REQUEST["fkln"];
  require("veza.php");
  $spis="DELETE FROM imenik_akcija  WHERE klak=".$fkln;                  
  $ishod=mysqli_query($con,$spis);	
  mysqli_close($con); 
?>