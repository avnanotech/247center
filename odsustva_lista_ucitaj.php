<?php
   $vrvr=$_REQUEST["vrvr"];
  switch($vrvr){
   case "1":	
    $spis="SELECT * FROM klijenti_odsustva ORDER BY datodl";
    break;	
   case "2":	
    $spis="SELECT  klijenti_odsustva.*, imenik_klijenti.idmon FROM klijenti_odsustva LEFT JOIN imenik_klijenti ON klijenti_odsustva.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.idmon";
    break;	
   case "3":	
    $spis="SELECT klijenti_odsustva.*, imenik_klijenti.nazkl FROM klijenti_odsustva LEFT JOIN imenik_klijenti ON klijenti_odsustva.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.nazkl";
    break;	
   case "4":	
    $spis="SELECT * FROM klijenti_odsustva ORDER BY datodl DESC";
    break;	
   case "5":	
    $spis="SELECT klijenti_odsustva.*, imenik_klijenti.idmon FROM klijenti_odsustva LEFT JOIN imenik_klijenti ON klijenti_odsustva.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.idmon DESC";
    break;	
   case "6":	
    $spis="SELECT klijenti_odsustva.*, imenik_klijenti.nazkl FROM klijenti_odsustva LEFT JOIN imenik_klijenti ON klijenti_odsustva.klkln=imenik_klijenti.klkln ORDER BY imenik_klijenti.nazkl DESC";
    break;	
 }
  echo "<table id=xtabela>";
  require("veza.php");
  $ishod=mysqli_query($con, $spis);
  $bror=mysqli_num_rows($ishod);
  if ($bror>0) {
        while($row= mysqli_fetch_array($ishod)){									
		$vrst=$row["stat"];
		echo "<tr><td class=kontxt onclick=odsustva_izmene(".$row["klod"].")>+</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftab>";
		    break;
		   case "2":
		    echo"id=txtftabodn>";
		   break;
		}
               echo $row["datodl"];
		echo "</td><td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftab>";
		    break;
		   case "2":
		    echo"id=txtftabodn>";
		   break;
		}
               $spis1="SELECT * FROM  imenik_klijenti WHERE klkln=".$row["klkln"];
               $ishod1=mysqli_query($con, $spis1);
               $row1= mysqli_fetch_array($ishod1);
		echo $row1["idmon"]." - ".$row1["nazkl"] ;
		echo "</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftab>";
		    break;
		   case "2":
		    echo"id=txtftabodn>";
		   break;
		}
		echo $row["osoba"] ;
		echo "</td>";
		echo "<td ";
		switch($vrst){
		   case "1":
		    echo"id=txtftab>";
		    break;
		   case "2":
		    echo"id=txtftabodn>";
		   break;
		}
               echo $row["kont"];
	       echo "</td></tr>";
	}	
    }	
  echo "</table>";	  		
  mysqli_close($con); 

?>