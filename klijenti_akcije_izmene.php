-<?php
  $fkln=$_REQUEST["fkln"];
  $fakc1=$_REQUEST["fakc1"];
  $fakc2=$_REQUEST["fakc2"];
  $fakc3=$_REQUEST["fakc3"];
  $fakc4=$_REQUEST["fakc4"];
  $fakc5=$_REQUEST["fakc5"];
  $fnapo=$_REQUEST["fnapo"];
  require("veza.php");
  $spis="SELECT * FROM klijenti_akcije WHERE klkln=".$fkln;
  $ishod=mysqli_query($con,$spis);
  $brrd=mysqli_num_rows($ishod);
  if ($brrd==0) {
   $spis="INSERT INTO klijenti_akcije (klkln, napo,akc1,akc2,akc3,akc4,akc5) VALUES ";
   $spis=$spis."(". $fkln.",";
   $spis=$spis. $fnapo.",";
   $spis=$spis. $fakc1.",";
   $spis=$spis. $fakc2.",";
   $spis=$spis. $fakc3.",";
   $spis=$spis. $fakc4.",";
   $spis=$spis. $fakc5.")";
   $ishod=mysqli_query($con,$spis);
  }
  else{   
   $spis="UPDATE klijenti_akcije SET napo=".$fnapo.",akc1=".$fakc1.",akc2=".$fakc2.",akc3=".$fakc3.",akc4=".$fakc4.",akc5=".$fakc5." WHERE klkln=".$fkln;                  
   $ishod=mysqli_query($con,$spis);
  }
  mysqli_close($con);  
?>