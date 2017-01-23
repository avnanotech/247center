<?php
  $vrun=$_REQUEST["vrun"];
  require("veza.php");
  if($vrun=="0"){
    $fklod=$_REQUEST["fklod"];
    $fkln=$_REQUEST["fkln"];
    $fdat=$_REQUEST["fdat"];  
    $foso=$_REQUEST["foso"];  
    $fkon=$_REQUEST["fkon"]; 
     $fstt="1";  
     $spis="INSERT INTO klijenti_odsustva(klod,klkln,datodl,osoba,kont,stat) VALUES ";
     $spis=$spis."(". $fklod.",";
     $spis=$spis.$fkln.",";     
     $spis=$spis.$fdat.",";
     $spis=$spis.$foso.",";
     $spis=$spis.$fkon.",";           
     $spis=$spis. $fstt.")";
     $ishod=mysqli_query($con,$spis); 	
  }
  elseif($vrun=="1"){
   $fklod=$_REQUEST["fklod"];
   $fkln=$_REQUEST["fkln"];
   $fdat=$_REQUEST["fdat"];  
   $foso=$_REQUEST["foso"];  
   $fkon=$_REQUEST["fkon"]; 
    $spis="UPDATE klijenti_odsustva SET datodl=".$fdat.",osoba=".$foso.",kont=".$fkon." WHERE klod=".$fklod;                  
    $ishod=mysqli_query($con,$spis);	
  }
  else {
    $fstt="2";  
    $fklod=$_REQUEST["fklod"];
    $spis="UPDATE klijenti_odsustva SET stat=".$fstt." WHERE klod=".$fklod;                  
    $ishod=mysqli_query($con,$spis);	 
  }
  mysqli_close($con);
?>