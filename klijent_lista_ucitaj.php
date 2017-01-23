<?php
  $vrvr=$_REQUEST["vrvr"];
  switch($vrvr){
     case "1":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY idmon";
    break;	
   case "2":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY nazkl";
    break;	
   case "3":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY mstkl";
    break;	
   case "4":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY vrsta";
    break;	
   case "5":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY idmon DESC";
    break;	
   case "6":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY nazkl DESC";
    break;	
   case "7":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY mstkl DESC";
    break;	
   case "8":	
    $spis="SELECT * FROM imenik_klijenti ORDER BY vrsta DESC";
    break;	

 }
  require("veza.php");
  $ishod=mysqli_query($con,$spis);
  $brrd=mysqli_num_rows($ishod);
  echo"<table id=xtabela>"; 
  echo"<tr><td id=nastab>ID KLIJENTA</td><td id=nastab>NAZIV KLIJENTA</td>";
  echo"<td id=nastab>ADRESA KLIJENTA</td><td id=nastab>MESTO KLIJENTA</td>";
  echo"<td id=nastab>FIKSNI</td><tr>"; 
  if ($brrd>0) {
     while($row= mysqli_fetch_array($ishod)){
       echo "<tr><td id=txttab>".$row["idmon"]."</td>";
       echo "<td id=txttab onclick=imenik_klijenti_profil_otv(".$row["klkln"].")>".$row["nazkl"]."</td>";
       echo "<td id=txttab>".$row["adrkl"]."</td>";
       echo "<td id=txttab>".$row["mstkl"]."</td>";
       echo "<td id=txttab>".$row["fiks"]."</td></tr>";
    }
  echo "</table>";
  }	
?>