<?php
  $vrun=$_REQUEST["vrun"];
  $fkln=$_REQUEST["fkln"];
  $fdatp=$_REQUEST["fdatp"];  
  $fvrp=$_REQUEST["fvrp"];  
  $fbro=$_REQUEST["fbro"];  
  $fimp=$_REQUEST["fimp"];  
  $fops=$_REQUEST["fops"];  
  require("veza.php");
  if($vrun=="0"){
  echo $fdatp;	
    $spis="INSERT INTO prijemi(klpr,datprp,vrmprp,brtel,impre,opis) VALUES ";
    $spis=$spis."(". $fkln.",";
    $spis=$spis. $fdatp.",";      
   $spis=$spis.$fvrp.",";      
   $spis=$spis.$fbro.",";      
   $spis=$spis.$fimp.",";      
    $spis=$spis. $fops.")";
    $ishod=mysqli_query($con,$spis); 	
  }
  else{
    $spis="UPDATE prijemi SET datprp=".$fdatp.",vrmprp=".$fvrp.",brtel=".$fbro.",impre=".$fimp.",opis=".$fops." WHERE klpr=".$fkln;                  
    $ishod=mysqli_query($con,$spis);	
  }
  mysqli_close($con); 
?>