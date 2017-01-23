<?php
  $fkln=$_REQUEST["fkln"];
  $fklk=$_REQUEST["fklk"];  
  require("veza.php");
  $spis="DELETE FROM klijenti_kontakti  WHERE klkln=".$fkln." AND  klkon=".$fklk;                  
  $ishod=mysqli_query($con,$spis);	
  mysqli_close($con); 
?>