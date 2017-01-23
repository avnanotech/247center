<?php
  $vrun=$_REQUEST["vrun"];
  $fklz=$_REQUEST["fklz"];
  $fdata=$_REQUEST["fdata"];  
  $fvrma=$_REQUEST["fvrma"];  
  $fkln=$_REQUEST["fkln"];  
  $fzon=$_REQUEST["fzon"];  
  $fops=$_REQUEST["fops"];  
  $fint=$_REQUEST["fint"];  
  $fpol=$_REQUEST["fpol"];  
  $fvst=$_REQUEST["fvst"];  
  require("veza.php");
  if($vrun=="0"){
     $spis="INSERT INTO  alarmi_zapisi(klaz, klkln,dataz,vrmaz,zonaz,opaz,vrsaz,inter,poli) VALUES ";
     $spis=$spis."(". $fklz.",";
     $spis=$spis.$fkln.",";     
     $spis=$spis.$fdata.",";
     $spis=$spis.$fvrma.",";
     $spis=$spis.$fzon.",";
     $spis=$spis.$fops.",";
     $spis=$spis.$fvst.",";
     $spis=$spis.$fint.",";           
     $spis=$spis. $fpol.")";
     $ishod=mysqli_query($con,$spis); 	
  }
  else{
    $spis="UPDATE alarmi_zapisi SET dataz=".$fdata.",vrmaz=".$fvrma.",zonaz=".$fzon.",opaz=".$fops.",vrsaz=".$fvst.",inter=".$fint.",poli=".$fpol." WHERE klaz=".$fklz;                  
    $ishod=mysqli_query($con,$spis);	
  }
  mysqli_close($con); 
?>