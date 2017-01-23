<?php
  $vrvr = $_REQUEST["vrvr"];
  require("veza.php");
   switch($vrvr){
   case "1":	
    $spis="SELECT * FROM alarmi_zapisi ORDER BY dataz";
    break;	
   case "2":	
    $spis="SELECT  alarmi_zapisi.*, imenik_klijenti.idmon FROM  alarmi_zapisi LEFT JOIN imenik_klijenti ON  alarmi_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.idmon";
    break;	
   case "3":	
    $spis="SELECT  alarmi_zapisi.*, imenik_klijenti.nazkl FROM  alarmi_zapisi LEFT JOIN imenik_klijenti ON  alarmi_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.nazkl";
    break;	
   case "4":	
    $spis="SELECT * FROM alarmi_zapisi ORDER BY vrsaz";
    break;	
   case "5":	
    $spis="SELECT * FROM  alarmi_zapisi ORDER BY dataz DESC,vrmaz DESC";
    break;	
   case "6":	
    $spis="SELECT  alarmi_zapisi.*, imenik_klijenti.idmon FROM  alarmi_zapisi LEFT JOIN imenik_klijenti ON  alarmi_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.idmon DESC";
    break;	
   case "7":	
    $spis="SELECT  alarmi_zapisi.*, imenik_klijenti.nazkl FROM  alarmi_zapisi LEFT JOIN imenik_klijenti ON  alarmi_zapisi.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.nazkl DESC";
    break;	
   case "8":	
    $spis="SELECT * FROM alarmi_zapisi ORDER BY vrsaz DESC";
    break;	
 }
  $ishod=mysqli_query($con, $spis);
  $bror=mysqli_num_rows($ishod);
  echo "<table id=xtabela>";
  if ($bror>0) {
        while($row= mysqli_fetch_array($ishod)){									
		$vrst=$row["vrsaz"];
		echo "<tr><td class=kontxt onclick=alarmi_izmene(".$row["klaz"].")>+</td><td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabals>";		      	
		break;
		}
		echo $row["dataz"] ;
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
		    echo"id=txtftabals>";		      	
		break;
		}
		echo $row["vrmaz"] ;
		echo "</td>";
               $spis1="SELECT * FROM  imenik_klijenti WHERE klkln=".$row["klkln"];
               $ishod1=mysqli_query($con, $spis1);
               $row1= mysqli_fetch_array($ishod1);
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftabaln>";
		    break;
		   case "2":
		    echo"id=txtftabala>";
		   break;
		   case "3":
		    echo"id=txtftabals>";		      	
		break;
		}
               echo $row1["idmon"];
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
		    echo"id=txtftabals>";		      	
		break;
		}
		echo $row1["nazkl"] ;
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
		    echo"id=txtftabals>";		      	
		break;
		}
		echo $row["zonaz"] ;
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
		    echo"id=txtftabals";		      	
		break;
		}
                echo " colspan=6>";
		echo $row["opaz"] ;
 	       echo "</td></tr>";
	}	
    }	
  echo "</table>";	  		
?>