<?php
  $vrvr = $_REQUEST["vrvr"];
  require("veza.php");
  echo "<table id=xtabela>";
    switch($vrvr){
   case "1":	
    $spis="SELECT * FROM  inter_zapisi ORDER BY datpmp";
    break;	
   case "2":	
    $spis="SELECT  inter_zapisi.*, imenik_klijenti.idmon FROM  inter_zapisi LEFT JOIN imenik_klijenti ON  inter_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.idmon";
    break;	
   case "3":	
    $spis="SELECT  inter_zapisi.*, imenik_klijenti.nazkl FROM  inter_zapisi LEFT JOIN imenik_klijenti ON  inter_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.nazkl";
    break;	
   case "4":	
    $spis="SELECT * FROM inter_zapisi ORDER BY vrsit";
    break;	
   case "5":	
    $spis="SELECT * FROM  inter_zapisi ORDER BY datpmp DESC";
    break;	
   case "6":	
    $spis="SELECT  inter_zapisi.*, imenik_klijenti.idmon FROM  inter_zapisi LEFT JOIN imenik_klijenti ON  inter_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.idmon DESC";
    break;	
   case "7":	
    $spis="SELECT  inter_zapisi.*, imenik_klijenti.nazkl FROM  inter_zapisi LEFT JOIN imenik_klijenti ON  inter_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.nazkl DESC";
    break;	
   case "8":	
    $spis="SELECT * FROM inter_zapisi ORDER BY vrsit DESC";
    break;	
 }
  
  $ishod=mysqli_query($con, $spis);
  $bror=mysqli_num_rows($ishod);
  if ($bror>0) {
        while($row= mysqli_fetch_array($ishod)){									
		$vrst=$row["vrsit"];
		echo "<tr><td class=kontxt onclick=intervencije_izmene(".$row["klin"].")>+</td><td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabala>";		      	
		break;
		}
               $spis1="SELECT * FROM  imenik_klijenti WHERE klkln=".$row["klkln"];
               $ishod1=mysqli_query($con, $spis1);
               $row1= mysqli_fetch_array($ishod1);
		echo $row1["idmon"]." ".$row1["nazkl"] ;
		echo "</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabala>";		      	
		break;
		}
		echo $row["datpmp"]." ".$row["vrpmp"] ;
		echo "</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabala>";		      	
		break;
		}
		echo $row["datdol"]." ".$row["vrdol"] ;
                echo "</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabala>";		      	
		break;
		}
               $spis1="SELECT * FROM  imenik_interni WHERE klint=".$row["nazint"];
               $ishod1=mysqli_query($con, $spis1);
               $row1= mysqli_fetch_array($ishod1);
		echo $row1["nazint"] ;
		echo "</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabala>";		      	
		break;
		}
		echo $row["zonit"] ;
		echo "</td></tr>";
               echo "<tr><td ";
             	switch($vrst){
		   case "1":
		    echo"id=txtftabaln";
		    break;
		   case "2":
		    echo"id=txtftabala";
		   break;
		   case "3":
		    echo"id=txtftabala";		      	
		break;
		}
                echo " colspan=6>";
		echo $row["opit"] ;
 	       echo "</td></tr>";
	}	
    }	
  echo "</table>";	  		
?>