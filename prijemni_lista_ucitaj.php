<?php
  $vrvr=$_REQUEST["vrvr"];
  require("veza.php");
  switch($vrvr){
   case "1":	
    $spis="SELECT * FROM prijemi ORDER BY datprp";
    break;	
   case "2":	
    $spis="SELECT * FROM prijemi ORDER BY brtel";
    break;	
   case "3":	
    $spis="SELECT * FROM prijemi ORDER BY impre";
    break;	
   case "4":	
    $spis="SELECT * FROM prijemi ORDER BY datprp DESC";
    break;	
   case "5":	
    $spis="SELECT * FROM prijemi ORDER BY brtel DESC";
    break;	
   case "6":	
    $spis="SELECT * FROM prijemi ORDER BY impre DESC";
    break;	
 }
  $ishod=mysqli_query($con, $spis);
  $bror=mysqli_num_rows($ishod);
   if ($bror>0) {
       echo "<table id=xtabela>";
        while($row= mysqli_fetch_array($ishod)){									
		echo "<tr><td class=kontxt onclick=prijemni_izmene(".$row["klpr"].")>+</td><td id=txtftab>";
		echo $row["datprp"];
		echo "</td>";
		echo "<td id=txtftab>";
		echo $row["vrmprp"] ;
		echo "</td>";
		echo "<td id=txtftab>";
		echo $row["brtel"] ;
		echo "</td>";
		echo "<td id=txtftab>";
		echo $row["impre"] ;
		echo "</td></tr>";
		echo "<td id=txtftab colspan=5>";
		echo $row["opis"] ;
		echo "</td></tr>";
		
	}	
	 echo "</table>";	
    }	
      mysqli_close($con); 
?>