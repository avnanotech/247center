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
  require("veza.php");
  $spis="UPDATE imenik_klijenti SET idmon=".$fidmn.",nazkl=".$fnazk.",adrkl=".$fadrk.",mstkl=".$fmstk.",fiks=".$ffiks.",email=".$femai.",radvr=".$frdv.",vrsta=".$fvrst.",gruob=".$fgruo.",gps=".$fgps." WHERE klkln=".$fkln;
  $ishod=mysqli_query($con,$spis);
  mysqli_close($con);  
?>