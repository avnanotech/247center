<?php
$fkln   = $_REQUEST["kklid"];
require("veza.php");
$spis   = "SELECT * FROM  klijenti_akcije WHERE klkln=".$fkln;
$ishod  = mysqli_query($con,$spis);
$row    = mysqli_fetch_array($ishod);
$brorr  = mysqli_num_rows($ishod);
if($brorr == 0)
{
	echo "<table id=ftabela>";
	echo "<tr><td id=xnasftab>AKCIJA i</td><td id=xtxtftab><select id=inptxt name=akclst>";
	echo "<option value=000000000001>FIKSNI</option>";
	echo "<option value=000000000002>INTERVENTNI TIM</option>";
	echo "<option value=000000000003>KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);
	if($bror > 0)
	{
		while($row1 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row1["klak"].">".$row1["nazakc"]." - ".$row1["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";
	echo "<tr><td id=xnasftab>AKCIJA II</td><td id=xtxtftab><select id=inptxt name=akclst>";
	echo "<option value=000000000001>FIKSNI</option>";
	echo "<option value=000000000002>INTERVENTNI TIM</option>";
	echo "<option value=000000000003>KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);
	if($bror > 0)
	{
		while($row2 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row2["klak"].">".$row2["nazakc"]." - ".$row2["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";

	echo "<tr><td id=xnasftab>AKCIJA III</td><td id=xtxtftab><select  id=inptxt name=akclst>";
	echo "<option  value=000000000001>FIKSNI</option>";
	echo "<option value=000000000002>INTERVENTNI TIM</option>";
	echo "<option  value=000000000003>KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);
	if($bror > 0)
	{
		while($row3 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row3["klak"].">".$row3["nazakc"]." - ".$row3["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";

	echo "<tr><td id=xnasftab>AKCIJA IV</td><td id=xtxtftab><select  id=inptxt name=akclst>";
	echo "<option  value=000000000001>FIKSNI</option>";
	echo "<option value=000000000002>INTERVENTNI TIM</option>";
	echo "<option  value=000000000003>KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);
	if($bror > 0)
	{
		while($row4 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row4["klak"].">".$row4["nazakc"]." - ".$row4["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";

	echo "<tr><td id=xnasftab>AKCIJA V</td><td id=xtxtftab><select  id=inptxt name=akclst>";
	echo "<option  value=000000000001>FIKSNI</option>";
	echo "<option value=000000000002>INTERVENTNI TIM</option>";
	echo "<option  value=000000000003>KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);
	if($bror > 0)
	{
		while($row5 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row5["klak"].">".$row5["nazakc"]." - ".$row5["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";
	echo "<tr><td id=xnasftab>NAPOMENA</td><td id=xtxtftab><textarea rows=5 id=inptxt name=inptxt></textarea></td></tr>";
	echo "</table>";
        echo "<input type=button class=dugme_forma  value=UNOS>";
        echo "<input type=button class=dugme_forma value=IZLAZ>";
}
else{
	echo "<table id=ftabela>";
	echo "<tr><td id=xnasftab>AKCIJA I</td><td id=xtxtftab><select id=inptxt name=akclst>";
	echo "<option value=000000000001 ";
	if($row["akc1"]=="000000000001"){echo "selected";}
	echo ">FIKSNI</option>";
	echo "<option value=000000000002 ";
	if($row["akc1"]=="000000000002"){echo "selected";}	
	echo ">INTERVENTNI TIM</option>";
	echo "<option value=000000000003 ";
	if($row["akc1"]=="000000000003"){echo "selected";}		
	echo ">KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);
	if($bror > 0)
	{
		while($row1 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row1["klak"];
         		if($row["akc1"]==$row1["klak"]){echo " selected";}		
			echo ">".$row1["nazakc"]." - ".$row1["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";
	echo "<tr><td id=xnasftab>AKCIJA II</td><td id=xtxtftab><select id=inptxt  name=akclst>";
	echo "<option value=000000000001 ";
	if($row["akc2"]=="000000000001"){echo "selected";}
	echo ">FIKSNI</option>";
	echo "<option value=000000000002 ";
	if($row["akc2"]=="000000000002"){echo "selected";}	
	echo ">INTERVENTNI TIM</option>";
	echo "<option value=000000000003 ";
	if($row["akc2"]=="000000000003"){echo "selected";}		
	echo ">KONTAKT LISTA</option>";
            $spis1   = "SELECT * FROM  imenik_akcija"; 
               $ishod1  = mysqli_query($con,$spis1); 
               $bror  = mysqli_num_rows($ishod1);	

	if($bror > 0)
	{
		while($row1 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row1["klak"];
         		if($row["akc2"]==$row1["klak"]){echo " selected";}		
			echo ">".$row1["nazakc"]." - ".$row1["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";

	echo "<tr><td id=xnasftab>AKCIJA III</td><td id=xtxtftab><select  id=inptxt name=akclst>";
	echo "<option value=000000000001 ";
	if($row["akc3"]=="000000000001"){echo "selected";}
	echo ">FIKSNI</option>";
	echo "<option value=000000000002 ";
	if($row["akc3"]=="000000000002"){echo "selected";}	
	echo ">INTERVENTNI TIM</option>";
	echo "<option value=000000000003 ";
	if($row["akc3"]=="000000000003"){echo "selected";}		
	echo ">KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);	
	if($bror > 0)
	{
		while($row1 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row1["klak"];
         		if($row["akc3"]==$row1["klak"]){echo " selected";}		
			echo ">".$row1["nazakc"]." - ".$row1["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";


	echo "<tr><td id=xnasftab>AKCIJA IV</td><td id=xtxtftab><select  id=inptxt name=akclst>";
	echo "<option value=000000000001 ";
	if($row["akc4"]=="000000000001"){echo "selected";}
	echo ">FIKSNI</option>";
	echo "<option value=000000000002 ";
	if($row["akc4"]=="000000000002"){echo "selected";}	
	echo ">INTERVENTNI TIM</option>";
	echo "<option value=000000000003 ";
	if($row["akc4"]=="000000000003"){echo "selected";}		
	echo ">KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);	
	if($bror > 0)
	{
 		while($row1 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row1["klak"];
         		if($row["akc4"]==$row1["klak"]){echo " selected";}		
			echo ">".$row1["nazakc"]." - ".$row1["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";

	echo "<tr><td id=xnasftab>AKCIJA V</td><td id=xtxtftab><select  id=inptxt name=akclst>";
	echo "<option value=000000000001 ";
	if($row["akc5"]=="000000000001"){echo "selected";}
	echo ">FIKSNI</option>";
	echo "<option value=000000000002 ";
	if($row["akc5"]=="000000000002"){echo "selected";}	
	echo ">INTERVENTNI TIM</option>";
	echo "<option value=000000000003 ";
	if($row["akc5"]=="000000000003"){echo "selected";}		
	echo ">KONTAKT LISTA</option>";
        $spis1   = "SELECT * FROM  imenik_akcija"; 
        $ishod1  = mysqli_query($con,$spis1); 
        $bror  = mysqli_num_rows($ishod1);	 
	if($bror > 0)
	{
		while($row1 = mysqli_fetch_array($ishod1))
		{
			echo "<option value=".$row1["klak"];
         		if($row["akc5"]==$row1["klak"]){echo " selected";}		
			echo ">".$row1["nazakc"]." - ".$row1["kont"]."</option>";
		}
	}
	echo "</select></td></tr>";
	echo "<tr><td id=xnasftab>NAPOMENA</td><td id=xtxtftab><textarea rows=5 id=inptxt name=inptxt>".$row["napo"]."</textarea></td></tr>";
	echo "</table>";
        echo "<input type=button class=dugme_forma  value=UNOS>";
        echo "<input type=button class=dugme_forma value=IZLAZ>";
}

?>
