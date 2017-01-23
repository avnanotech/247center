<?php
$fkln = $_REQUEST["kklak"];
require("veza.php");
/*
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
	*/
	$spis = "SELECT * FROM imenik_akcija WHERE klak=".$fkln;
	$ishod= mysqli_query($con,$spis);
	$row  = mysqli_fetch_array($ishod);
	echo "<table id=ftabela>";
	echo "<tr><td id=xnasftab>SUBJEKT AKCIJE</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["nazakc"]."'></td></tr>";
	echo "<tr><td id=xnasftab>KONTAKTI</td><td id=xtxtftab>";
	echo "<input type=text class=inptxt name=inptxt value='".$row["kont"]."'></td></tr>";
	echo "</table>";
	echo "<input type=button class=dugme_forma  value=IZMENA>";
	echo "<input type=button class=dugme_forma value=IZLAZ>";

?>
