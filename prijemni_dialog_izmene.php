<?php
  $fklp=$_REQUEST["fklp"];
  require("veza.php");
  $spis="SELECT * FROM prijemi WHERE klpr=".$fklp;
  $ishod=mysqli_query($con,$spis);
  $row= mysqli_fetch_array($ishod);
  echo "<table id=ftabela><tr><td id=xnasftab>DATUM POZIVA</td>";
 $datun=$row["datprp"];
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value='".substr($datun,8,2).".".substr($datun,5,2) .".". substr($datun,0,4)."'></td></tr>";
   echo "<tr><td id=xnasftab>VREME POZIVA</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["vrmprp"]."></td></tr>";
  echo "<tr><td id=xnasftab>BROJ</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["brtel"]."></td></tr>";
  echo "<tr><td id=xnasftab>IME I PREZIME</td>";
  echo "<td id=xtxtftab><input type=text  class=inptxt name=inptxt value=".$row["impre"]."></td></tr>";
  echo "<tr><td id=xnasftab>OPIS</td>";
  echo "<td id=xtxtftab><textarea rows=5 name=inptxt class=inptxt>".$row["opis"]."</textarea></td></tr>";
  echo "</table>";
  echo "<input type=button class=dugme_forma  value=UNOS> <input type=button class=dugme_forma value=IZLAZ>";
?>
