<?php
  $vrun=$_REQUEST["vrun"];
  $fklint=$_REQUEST["fklint"];
  $fdatp=$_REQUEST["fdatp"];  
  $fvrmp=$_REQUEST["fvrmp"];  
  $fkln=$_REQUEST["fkln"];  
  $fdatd=$_REQUEST["fdatd"];  
  $fvrmd=$_REQUEST["fvrmd"];   
  $fcln=$_REQUEST["fcln"];
  $fzon=$_REQUEST["fzon"];  
  $fops=$_REQUEST["fops"];  
  $fvst=$_REQUEST["fvst"];  
  require("veza.php");
  if($vrun=="0"){
     $spis="INSERT INTO inter_zapisi(klin, klkln,nazint,datpmp,vrpmp,datdol,vrdol,zonit,opit,vrsit) VALUES ";
     $spis=$spis."(". $fklint.",";
     $spis=$spis.$fkln.",";     
     $spis=$spis.$fcln.",";
     $spis=$spis.$fdatp.",";
     $spis=$spis.$fvrmp.",";
     $spis=$spis.$fdatd.",";
     $spis=$spis.$fvrmd.",";
     $spis=$spis.$fzon.",";
     $spis=$spis.$fops.",";
     $spis=$spis. $fvst.")";
     $ishod=mysqli_query($con,$spis); 	
  }
  else{
    $spis="UPDATE inter_zapisi SET nazint=".$fcln.",datpmp=".$fdatp.",vrpmp=".$fvrmp.",datdol=".$fdatd.",vrdol=".$fvrmd.",zonit=".$fzon.",opit=".$fops.",vrsit=".$fvst." WHERE klin=".$fklint;                  
    $ishod=mysqli_query($con,$spis);	
  }
  mysqli_close($con); 
?>