<?php
  $fkln=$_REQUEST["fkln"];
  $fidmn=$_REQUEST["fidmn"];
  $fnazk=$_REQUEST["fnazk"];
  $fadrk=$_REQUEST["fadrk"];
  $fmstk=$_REQUEST["fmstk"];
  $ffiks=$_REQUEST["ffiks"];
  $femai=$_REQUEST["femai"];
  $frdv=$_REQUEST["frdv"];
  $fvrst=$_REQUEST["fvrst"];
  $fgruo=$_REQUEST["fgruo"];
  $fgps=$_REQUEST["fgps"];
  $fstt="0";
  require("veza.php");
  $spis="INSERT INTO imenik_klijenti (klkln, idmon,nazkl, adrkl,mstkl,fiks, email, radvr, vrsta, gruob,gps,stat) VALUES ";
  $spis=$spis."(". $fkln.",";
  $spis=$spis. $fidmn.",";
  $spis=$spis. $fnazk.",";
  $spis=$spis. $fadrk.",";
  $spis=$spis. $fmstk.",";
  $spis=$spis. $ffiks.",";
  $spis=$spis. $femai.",";
  $spis=$spis. $frdv.",";
  $spis=$spis. $fvrst.",";
  $spis=$spis. $fgruo.",";
  $spis=$spis. $fgps.",";
  $spis=$spis. $fstt.")";
  $ishod=mysqli_query($con,$spis);
  mysqli_close($con);  
?>