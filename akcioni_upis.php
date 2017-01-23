<?php
  $fkln=$_REQUEST["fkln"];
  $fnazak=$_REQUEST["fnazak"];  
  $fknak=$_REQUEST["fknak"];  
  
  require("veza.php");
  if($vrun=="0"){
    $spis="INSERT INTO  imenik_akcija(klak,nazakc,kont) VALUES ";
    $spis=$spis."(". $fkln.",";
    $spis=$spis.$fnazak.",";      
    $spis=$spis. $fknak.")";
    $ishod=mysqli_query($con,$spis); 	
  }
  else{
    $spis="UPDATE imenik_akcija SET nazakc=".$fnazak.",kont=".$fknak." WHERE klak=".$fkln;                  
    $ishod=mysqli_query($con,$spis);	
  }
  mysqli_close($con); 
?>