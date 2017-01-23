<?php
  require("veza.php");
  echo "<table id=xtabela>";
  $spis="SELECT * FROM  imenik_akcija";
  $ishod=mysqli_query($con, $spis);
  $bror=mysqli_num_rows($ishod);
   if ($bror>0) {
        while($row= mysqli_fetch_array($ishod)){									
		echo "<tr><td class=kontxt onclick=imenik_akcioni_izmene(".$row["klak"].")>+</td><td id=txtftaba>";
		echo $row["nazakc"] ;
		echo "</td>";
		echo "<td id=txtftaba>";
		echo $row["kont"] ;
		echo "</td></tr>";
	}	
    }	
    		echo "</table>";	
?>