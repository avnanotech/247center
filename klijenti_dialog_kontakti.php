<?php
$ftup = $_REQUEST["tup"];
$fkln = $_REQUEST["kklid"];
$klkn = $_REQUEST["klkn"];
require("veza.php");
if($ftup == "n")
{
	echo "<table id=ftabela>";
	echo "<tr><td id=xnasftab>IME I PREZIME</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt></td></tr>";
	echo "<tr><td id=xnasftab>POZICIJA</td><td id=xtxtftab>";
	echo "<input type=text  class=inptxt name=inptxt></td></tr>";
	echo "<tr><td id=xnasftab>POJAM I</td><td id=xtxtftab>";
	echo "<input type=text  class=inptxt name=inptxt></td></tr>";
	echo "<tr><td id=xnasftab>POJAM II</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt></td></tr>";
	echo "<tr><td id=xnasftab>FIKSNI</td><td id=xtxtftab>";
	echo "<input type=text  class=inptxt name=inptxt></td></tr>";
	echo "<tr><td id=xnasftab>MOBILNI I</td><td id=xtxtftab>";
	echo "<input type=text  class=inptxt name=inptxt></td></tr>";
	echo "<tr><td id=xnasftab>MOBILNI II</td><td  id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt></td></tr>";
	echo "</table>";
	echo "<input type=button class=dugme_forma  value=UNOS>";
	echo "<input type=button class=dugme_forma value=IZLAZ>";
}
else
{
	$spis = "SELECT * FROM klijenti_kontakti WHERE klkln=".$fkln." AND klkon=" .$klkn;
	$ishod= mysqli_query($con,$spis);
	$row  = mysqli_fetch_array($ishod);
	echo "<table id=ftabela>";
	echo "<tr><td id=xnasftab>IME I PREZIME</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["impre"]."'></td></tr>";
	echo "<tr><td id=xnasftab>POZICIJA</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["poza"]."'></td></tr>";
	echo "<tr><td id=xnasftab>POJAM I</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["pojm1"]."'></td></tr>";
	echo "<tr><td id=xnasftab>POJAM II</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["pojm2"]."'></td></tr>";
	echo "<tr><td id=xnasftab>FIKSNI</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["fiks"]."'></td></tr>";
	echo "<tr><td id=xnasftab>MOBILNI I</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["mobi1"]."'></td></tr>";
	echo "<tr><td id=xnasftab>MOBILNI II</td><td  id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["mobi2"]."'></td></tr>";
	echo "</table>";
	echo "<input type=button class=dugme_forma  value=IZMENA>";
	echo "<input type=button class=dugme_forma  value=BRISANJE>";
	echo "<input type=button class=dugme_forma value=IZLAZ>";
}
?>
