<?php
  $fklz=$_REQUEST["fklz"];
  require("veza.php");
  $spis="SELECT * FROM alarmi_zapisi WHERE klaz=".$fklz;
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
  echo "<tr><td id=xnasftab>DATUM</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=". substr($row["dataz"],8,2).".".substr($row["dataz"],5,2) .".". substr($row["dataz"],0,4)."></td></tr>";
  echo "<tr><td id=xnasftab>VREME</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["vrmaz"]."></td></tr>";
  echo "<tr><td id=xnasftab>ZONA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["zonaz"]."></td></tr>";
  echo "<tr><td id=xnasftab colspan=2>";
  echo "<input type=checkbox name=icekic";
  if($row["inter"]=="1"){echo " checked"; }
  echo ">INTERVENTNI TIM<input type=checkbox name=icekic";
  if($row["poli"]=="1"){echo " checked"; }
  echo ">POLICIJA";
  echo "</td></tr>";
  echo "<tr><td id=xnasftab colspan=2>";
  echo "<input type=radio name=vcekic";
  if($row["vrsaz"]=="0"){echo " checked"; }
  echo ">LAZNA UZBUNA";
 echo "<input type=radio name=vcekic";
  if($row["vrsaz"]=="1"){echo " checked"; }
 echo ">PROVALA";
 echo "<input type=radio name=vcekic";
  if($row["vrsaz"]=="2"){echo " checked"; }
 echo ">FIZICKI NAPAD";
 echo "<input type=radio name=vcekic";
  if($row["vrsaz"]=="3"){echo " checked"; }
 echo ">PROBA";
  echo "</td></tr>";
  echo "<tr><td id=xnasftab>OPIS</td>";
  echo "<td id=xtxtftab><textarea rows=5 name=inptxt class=inptxt>".$row["opaz"]."</textarea></td></tr>";
  echo "</table>";
  echo "<input type=button class=dugme_forma  value=UNOS> <input type=button class=dugme_forma value=IZLAZ>";
?>
