<?php
  $fklod=$_REQUEST["fklod"];
  require("veza.php");
  $spis="SELECT * FROM klijenti_odsustva WHERE klod=".$fklod;
  $ishod=mysqli_query($con,$spis);
  $row= mysqli_fetch_array($ishod);
  echo "<table id=ftabela><tr><td id=xnasftab>KLIJENT</td>";
  echo "<td id=xtxtftab><select  class=inptxt name=inptxt>";
  $spis1="SELECT * FROM imenik_klijenti";
  $ishod1=mysqli_query($con,$spis1);	                  
  while($row1=mysqli_fetch_array($ishod1)) {
   echo "<option value=".$row1["klkln"];
   if($row1["klkln"]==$row["klkln"]){ echo " selected"; }
   echo ">".$row1["idmon"]." - ".$row1["nazkl"]."</option>"; 	
  }
  echo "</select></td></tr>";
  echo "<tr><td id=xnasftab>DATUM ODLASKA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=". substr($row["datodl"],8,2).".".substr($row["datodl"],5,2) .".". substr($row["datodl"],0,4)."></td></tr>";
  echo "<tr><td id=xnasftab>ODGOVORNO LICE</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["osoba"]."></td></tr>";
  echo "<tr><td id=xnasftab>KONTAKT</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["kont"]."></td></tr>";
  echo "</table>";
  echo "<input type=button class=dugme_forma  value=IZMENA><input type=button class=dugme_forma  value=STATUS><input type=button class=dugme_forma value=IZLAZ>";
?>
