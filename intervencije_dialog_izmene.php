<?php
  $fklint=$_REQUEST["fklint"];
  require("veza.php");
  $spis="SELECT * FROM inter_zapisi WHERE klin=".$fklint;
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
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".substr($row["datpmp"],8,2).".".substr($row["datpmp"],5,2) .".". substr($row["datpmp"],0,4)."></td></tr>";
  echo "<tr><td id=xnasftab>VREME ODLASKA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["vrpmp"]."></td></tr>";
  echo "<tr><td id=xnasftab>DATUM DOLASKA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".substr($row["datdol"],8,2).".".substr($row["datdol"],5,2) .".". substr($row["datdol"],0,4)."></td></tr>";
  echo "<tr><td id=xnasftab>VREME DOLASKA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["vrdol"]."></td></tr>";
  echo "<tr><td id=xnasftab>CLAN INTERVENTNOG TIMA</td>";
  echo "<td id=xtxtftab><select  class=inptxt name=inptxt>";
  $spis1="SELECT * FROM imenik_interni";
  $ishod1=mysqli_query($con,$spis1);	                  
  while($row1=mysqli_fetch_array($ishod1)) {
     if($row1["inti"]=="1"){
         echo "<option value=".$row1["klint"];
         if($row1["klint"]==$row["nazint"]){ echo " selected"; }
         echo ">".$row1["nazint"]."</option>"; 	
     }
  }
  echo "<tr><td id=xnasftab>ZONA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["zonit"]."></td></tr>";
  echo "<tr><td id=xnasftab colspan=2>";
  echo "<input type=radio name=vcekic";
  if($row["vrsit"]=="1"){echo " checked"; }
  echo ">LAZNA UZBUNA";
 echo "<input type=radio name=vcekic";
  if($row["vrsit"]=="2"){echo " checked"; }
 echo ">PROVALA";
 echo "<input type=radio name=vcekic";
  if($row["vrsit"]=="3"){echo " checked"; }
 echo ">FIZICKI NAPAD";
  echo "</td></tr>";
  echo "<tr><td id=xnasftab>OPIS</td>";
  echo "<td id=xtxtftab><textarea rows=5 name=inptxt class=inptxt>".$row["opit"]."</textarea></td></tr>";
  echo "</table>";
  echo "<input type=button class=dugme_forma  value=UNOS> <input type=button class=dugme_forma value=IZLAZ>";
?>
