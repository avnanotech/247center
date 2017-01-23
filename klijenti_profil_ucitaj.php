<?php
$klid = $_REQUEST["klid"];
$kltip= $_REQUEST["kltip"];

require("veza.php");
echo "<table id=xtabela>";
echo "<tr>";
echo "<td id=xnastab><input type='button' class='konskc' value='+'>";
echo "OSNOVNI PODACI";
echo "</td>";
echo "</tr>";
echo "<tr>";
echo "<td name='klijenti_sekcije'>";
$spis = "SELECT * FROM  imenik_klijenti WHERE klkln=".$klid;
$ishod= mysqli_query($con, $spis);
$row  = mysqli_fetch_array($ishod);

echo "<table id=xtabela>";
echo "<tr><td id=nasftab>ID</td>";
echo "<td id=txtftab>".$row["idmon"]."</td>";
echo "<td id=nasftab>STATUS</td>";
if($row["stat"] == "0")
{
	echo "<td id=txtftab>AKTIVAN</td></tr>";
}
else
{
	echo "<td id=txtftab>NEAKTIVAN</td></tr>";
}
echo "<tr><td id=nasftab>NAZIV KLIJENTA</td>";
echo "<td id=txtftab>".$row["nazkl"]."</td>";
echo "<td id=nasftab>ADRESA KLIJENTA</td>";
echo "<td id=txtftab>".$row["adrkl"]."</td></tr>";
echo "<tr><td id=nasftab>MESTO</td>";
echo "<td id=txtftab>".$row["mstkl"]."</td>";
echo "<td id=nasftab>FIKSNI</td>";
echo "<td id=txtftab>".$row["fiks"]."</td></tr>";
echo "<tr><td id=nasftab>E-MAIL</td>";
echo "<td id=txtftab>".$row["email"]."</td>";
echo "<td id=nasftab>RADNO VREME</td>";
echo "<td id=txtftab>".$row["radvr"]."</td></tr>";
echo "<tr><td id=nasftab>VRSTA KLIJENTA</td>";
echo "<td id=txtftab>".$row["vrsta"]."</td>";
echo "<td id=nasftab>GPS</td>";
echo "<td id=txtftab class='mnkon'>".$row["gps"]."<input type='button'  class='mnkon' value='+'></td>";
echo "</tr></table>";
echo "</td>";
echo "</tr>";

/*
echo "<tr><td id=xnastab>GALERIJA SLIKE</td></tr>";
echo "<tr><td  name='klijenti_sekcije'><table>";
echo "<tr><td class=obsl></td><td class=obsl></td><td class=obsl></td><td class=obsl></td>";
echo "<td class=obsl></td><td class=obsl></td><td class=obsl></td><td class=obsl></td>";
echo "<td class=obsl></td><td class=obsl></td></tr>";
echo "</table></td></tr>";	        */

$spis = "SELECT * FROM klijenti_akcije WHERE klkln=".$klid;
$ishod= mysqli_query($con, $spis);
$bror = mysqli_num_rows($ishod);
$row  = mysqli_fetch_array($ishod);

/*
$upit="CREATE TABLE klijenti_akcije(klkln VARCHAR(12),napo TEXT,akc1 TEXT,akc2 TEXT,akc3 TEXT,akc4 TEXT,akc5 TEXT)";
$ishod=mysqli_query($con,$upit);
echo "formirana tabela";
$ishod=mysqli_query($con,$upit); */

echo "<tr><td id=xnastab><input type='button' class='konskc' value='+'>AKCIONI PLAN</td></tr>";
echo "<tr><td  name='klijenti_sekcije'>";
echo "<table id=xtabela><tr>";
echo "<td id=nasftab>AKCIJA I</td>";
echo "<td id=txtftab>";
if($bror > 0)
{
	if($row["akc1"] == "000000000001")
	{
		echo "FIKSNI";
	}
	else if($row["akc1"] == "000000000002")
	{
		echo "INTERVENTNI TIM";
	}
	else if($row["akc1"] == "000000000003")
	{
		echo "KONTAKT LISTA";
	}
	else
	{
		$spis   = "SELECT * FROM imenik_akcija WHERE klak=". $row["akc1"];
		$ishoda = mysqli_query($con, $spis);
		$brora  = mysqli_num_rows($ishoda);
		if($brora == 0)
		{
			echo "BEZ AKCIJE";
		}
		else
		{
             		$rowa   = mysqli_fetch_array($ishoda);
			echo $rowa["nazakc"]." - ".$rowa["kont"];
		}
	}
}
echo "</td><td id=nasftab>AKCIJA II</td>";
echo "<td id=txtftab>";
if($bror > 0)
{
	if($row["akc2"] == "000000000001")
	{
		echo "FIKSNI";
	}
	elseif($row["akc2"] == "000000000002")
	{
		echo "INTERVENTNI TIM";
	}
	elseif($row["akc2"] == "000000000003")
	{
		echo "KONTAKT LISTA";
	}
	else
	{
		$spis   = "SELECT * FROM imenik_akcija WHERE klak=". $row["akc2"];
		$ishoda = mysqli_query($con, $spis);
		$brora  = mysqli_num_rows($ishoda);
		$rowa   = mysqli_fetch_array($ishoda);
		if($brora == 0)
		{
			echo "BEZ AKCIJE";
		}
		else
		{
			echo $rowa["nazakc"]." - ".$rowa["kont"];
		}
	}
}
echo "</td></tr>";
echo "<tr><td id=nasftab>AKCIJA III</td>";
echo "<td id=txtftab>";
if($bror > 0)
{
	if($row["akc3"] == "000000000001")
	{
		echo "FIKSNI";
	}
	elseif($row["akc3"] == "000000000002")
	{
		echo "INTERVENTNI TIM";
	}
	elseif($row["akc3"] == "000000000003")
	{
		echo "KONTAKT LISTA";
	}
	else
	{
		$spis   = "SELECT * FROM imenik_akcija WHERE klak=". $row["akc3"];
		$ishoda = mysqli_query($con, $spis);
		$brora  = mysqli_num_rows($ishoda);
		$rowa   = mysqli_fetch_array($ishoda);
		if($brora == 0)
		{
			echo "BEZ AKCIJE";
		}
		else
		{
			echo $rowa["nazakc"]." - ".$rowa["kont"];
		}
	}
}
echo "</td><td id=nasftab>AKCIJA IV</td>";
echo "<td id=txtftab>";
if($bror > 0)
{
	if($row["akc4"] == "000000000001")
	{
		echo "FIKSNI";
	}
	elseif($row["akc4"] == "000000000002")
	{
		echo "INTERVENTNI TIM";
	}
	elseif($row["akc4"] == "000000000003")
	{
		echo "KONTAKT LISTA";
	}
	else
	{
		$spis   = "SELECT * FROM imenik_akcija WHERE klak=". $row["akc4"];
		$ishoda = mysqli_query($con, $spis);
		$brora  = mysqli_num_rows($ishoda);
		$rowa   = mysqli_fetch_array($ishoda);
		if($brora == 0)
		{
			echo "BEZ AKCIJE";
		}
		else
		{
			echo $rowa["nazakc"]." - ".$rowa["kont"];
		}
	}
}
echo "</td></tr>";
echo "<tr><td id=nasftab>AKCIJA V</td>";
echo "<td id=txtftab>";
if($bror > 0)
{
	if($row["akc5"] == "000000000001")
	{
		echo "FIKSNI";
	}
	elseif($row["akc5"] == "000000000002")
	{
		echo "INTERVENTNI TIM";
	}
	elseif($row["akc5"] == "000000000003")
	{
		echo "KONTAKT LISTA";
	}
	else
	{
		$spis   = "SELECT * FROM imenik_akcija WHERE klak=". $row["akc5"];
		$ishoda = mysqli_query($con, $spis);
		$brora  = mysqli_num_rows($ishoda);
		$rowa   = mysqli_fetch_array($ishoda);
		if($brora == 0)
		{
			echo "BEZ AKCIJE";
		}
		else
		{
			echo $rowa["nazakc"]." - ".$rowa["kont"];
		}
	}
}
echo "</td><td></td><td></td></tr>";
echo "<tr><td id=txtftab colspan=4>";
if($bror > 0)
{
	echo $row["napo"] ;
}
echo "</td></tr>";
echo "</table>";


echo "<tr><td id=xnastab>KONTAKT LISTA</td></tr>";
echo "<tr><td  name='klijenti_sekcije'>";
echo "<table id=xtabela><tr><td id=kontab>+</td>";
echo "<td id=nastab>IME I PREZIME</td><td id=nastab>POZICIJA</td><td id=nastab>POJAM I</td>";
echo "<td id=nastab>POJAM II</td><td id=nastab>KONTAKTI</td></tr>";

$spis = "SELECT * FROM  klijenti_kontakti WHERE klkln=".$klid;
$ishod= mysqli_query($con, $spis);
$bror = mysqli_num_rows($ishod);
if($bror > 0)
{
	while($row = mysqli_fetch_array($ishod))
	{
		echo "<tr><td class=kontxt onclick=klijenti_kontakti_izmene(".$row["klkln"].",".$row["klkon"].")>+</td><td id=txtftab> ";
		echo $row["impre"] ;
		echo "</td>";
		echo "<td id=txtftab>";
		echo $row["poza"] ;
		echo "</td>";
		echo "<td id=txtftab>";
		echo $row["pojm1"] ;
		echo "</td>";
		echo "<td id=txtftab>";
		echo $row["pojm2"] ;
		echo "</td>";
		echo "<td id=txtftab><select id=izbk>";
		echo "<option>".$row["fiks"]. "</option>";
		echo "<option>".$row["mobi1"]. "</option>";
		echo "<option>".$row["mobi2"]. "</option>";
		echo "</select></td></tr>";

	}
}
echo "</table></td></tr></table>";
?>