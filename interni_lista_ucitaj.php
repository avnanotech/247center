<?php
  require("veza.php");
  echo "<table id=xtabela>";
  $spis="SELECT * FROM imenik_interni";
  $ishod=mysqli_query($con, $spis);
  $bror=mysqli_num_rows($ishod);
   if ($bror>0) {
        while($row= mysqli_fetch_array($ishod)){									
		echo "<tr><td class=kontxt onclick=imenik_interni_izmene(".$row["klint"].")>+</td><td id=txtftabi>";
		echo $row["nazint"] ;
		echo "</td>";
		echo "<td id=txtftabi><select  id=izbk>";
		echo "<option>".$row["fiksni"]."</option>";
		echo "<option>".$row["mob1"]."</option>";
		echo "<option>".$row["mob2"]."</option>";
		echo "</select></td>";
		echo "<td id=txtftabi title=AKTIVNOSTI>";
                if ($row["oper"]=="1"){
		 echo "O";	
		}
		else{
		 echo "*";				
		}
		echo "=";
                if ($row["inti"]=="1"){
		 echo "I";	
		}
		else{
		 echo "*";				
		}
		echo "=";
                if ($row["serv"]=="1"){
		 echo "S";	
		}
		else{
		 echo "*";				
		}
		echo "</td></tr>";
	}	
    }	
    		echo "</table>";	
?>