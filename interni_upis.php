<?php
  $vrun=$_REQUEST["vrun"];
  $fkln=$_REQUEST["fkln"];
  $fimpr=$_REQUEST["fimpr"];  
  $ffiks=$_REQUEST["ffiks"];
  $fmobi1=$_REQUEST["fmob1"];
  $fmobi2=$_REQUEST["fmob2"];
  $fopr=$_REQUEST["fopr"];
  $fint=$_REQUEST["fint"];
  $fsrv=$_REQUEST["fsrv"];
  

  require("veza.php");
  if($vrun=="0"){
    $spis="INSERT INTO  imenik_interni(klint,nazint,fiksni,mob1,mob2,oper,inti,serv) VALUES ";
    $spis=$spis."(". $fkln.",";
    $spis=$spis.$fimpr.",";    
    $spis=$spis.$ffiks.",";    
    $spis=$spis.$fmobi1.",";    
    $spis=$spis.$fmobi2.",";    
    $spis=$spis.$fopr.",";    
    $spis=$spis.$fint.",";      
    $spis=$spis. $fsrv.")";
    $ishod=mysqli_query($con,$spis); 	
  }
  else{
   echo $vrun;
   echo $fkln;
   echo $fimpr;  
   echo $ffiks;
   echo $fmobi1;
   echo $fmobi2;
   echo $fopr;
   echo $fint;
   echo $fsrv;

    $spis="UPDATE imenik_interni SET nazint=".$fimpr.",fiksni=".$ffiks.",mob1=".$fmobi1.",mob2=".$fmobi2.",oper=".$fopr.",inti=".$fint.",serv=".$fsrv." WHERE klint=".$fkln;                  
    $ishod=mysqli_query($con,$spis);	
  }
  mysqli_close($con); 
?>