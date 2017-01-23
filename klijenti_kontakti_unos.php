<?php
  $vrun=$_REQUEST["vrun"];
  $fkln=$_REQUEST["fkln"];
  $fklk=$_REQUEST["fklk"];  
  $fimpr=$_REQUEST["fimpr"];
  $fpoza=$_REQUEST["fpoza"];  
  $fpoj1=$_REQUEST["fpoj1"];
  $fpoj2=$_REQUEST["fpoj2"];
  $ffiks=$_REQUEST["ffiks"];
  $fmob1=$_REQUEST["fmob1"];
  $fmob2=$_REQUEST["fmob2"];

  require("veza.php");
  if($vrun==0){
    $spis="INSERT INTO  klijenti_kontakti(klkln,klkon,impre,fiks,mobi1,mobi2,pojm1,pojm2, poza) VALUES ";
    $spis=$spis."(". $fkln.",";
    $spis=$spis.$fklk.",";    
    $spis=$spis. $fimpr.",";
    $spis=$spis. $ffiks.",";
    $spis=$spis. $fmob1.",";
    $spis=$spis. $fmob2.",";
    $spis=$spis. $fpoj1.",";
    $spis=$spis. $fpoj2.",";
    $spis=$spis. $fpoza.")";
    $ishod=mysqli_query($con,$spis); 	
  }
  else{
    $spis="UPDATE klijenti_kontakti SET impre=".$fimpr.",fiks=".$ffiks.",mobi1=".$fmob1.",mobi2=".$fmob2.",pojm1=".$fpoj1.",pojm2=".$fpoj2.",poza=".$fpoza." WHERE klkln=".$fkln." AND  klkon=".$fklk;                  
    $ishod=mysqli_query($con,$spis);	
  }
  mysqli_close($con); 
?>