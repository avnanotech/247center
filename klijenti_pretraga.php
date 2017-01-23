<?php
  $vrpt=$_REQUEST["vrpt"];
  $ptrg=$_REQUEST["ptrg"];
  require("veza.php");
  $spis="SELECT * FROM  imenik_klijenti WHERE idmon=".$ptrg." AND stat='0'";
  $ishod=mysqli_query($con, $spis);
  $row = mysqli_fetch_array($ishod);
  $brro=mysqli_num_rows($ishod);
  if($brro==0){
   echo "000";	
  }
  else{
   echo $row["klkln"];
  }
?>