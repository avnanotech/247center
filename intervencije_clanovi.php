<?php
  require("veza.php");
  $spis="SELECT * FROM imenik_interni WHERE inti='1'";
  $ishod=mysqli_query($con,$spis);	                  
  while($row=mysqli_fetch_array($ishod)) {
   echo"<option value=".$row["klint"].">".$row["nazint"]."</option>"; 	
  }
  mysqli_close($con); 
?>