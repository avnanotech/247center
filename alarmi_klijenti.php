<?php
  require("veza.php");
  $spis="SELECT * FROM imenik_klijenti";
  $ishod=mysqli_query($con,$spis);	                  
  while($row=mysqli_fetch_array($ishod)) {
   echo"<option value=".$row["klkln"].">".$row["idmon"]." - ".$row["nazkl"]."</option>"; 	
  }
  mysqli_close($con); 
?>