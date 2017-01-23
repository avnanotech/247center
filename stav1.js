function alarmi()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("pano").innerHTML=xmlhttp.responseText;
                        alarmi_lista("1");
        		alarmi_lista_opcije() ;
		}
	}
	spis="evitln=mtx_alarmi_glavni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function alarmi_lista(vsa){
  	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
 		}
	}
	spis="vrvr="+vsa;
	xmlhttp.open("GET","alarmi_lista_ucitaj.php?"+spis,true);
	xmlhttp.send();	
}


function alarmi_lista_opcije() {
  document.getElementsByClassName("mnkon")[0].addEventListener("click", alarmi_novo);	
  document.getElementsByClassName("mnkon")[1].addEventListener("click", function()
	{
     	    alarmi_vrsta(0);
	}); 
 document.getElementsByClassName("mnkon")[2].addEventListener("click", function()
	{
     	    alarmi_vrsta(1);
	}); 
}

function alarmi_novo()
{
	var okfor = document.createElement("div") ;
	document.body.appendChild(okfor);
	okfor.id="zavesa";
	var okfor1 = document.createElement("div") ;
	document.body.appendChild(okfor1);
	okfor1.id="dialog_unos";
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("dialog_unos").innerHTML=xmlhttp.responseText;
			alarmi_lista_klijenti();
			alarmi_novo_opcije();
		}
	}
	spis="evitln=mtx_alarmi_dialog_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function alarmi_novo_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", alarmi_novo_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function alarmi_lista_klijenti()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementsByName("inptxt")[0].innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","alarmi_klijenti.php",true);
	xmlhttp.send();
}


function alarmi_novo_upis()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			alarmi_lista("1");
		}
	}
	spis="vrun=0";
	spis=spis+"&fklz="+kljuc();
	sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdata='"+ndatu;
	spis=spis+"'&fvrma='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fkln="+document.getElementsByName("inptxt")[0].value;
	spis=spis+"&fzon='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fops='"+document.getElementsByName("inptxt")[4].value;
        var icek=document.getElementsByName("icekic");
        if(icek[0].checked==true){
	 spis=spis+ "'&fint=1";	
	} 
	else {
	 spis=spis+ "'&fint=0";			
	}
        if(icek[1].checked==true){
	 spis=spis+ "&fpol=1";	
	} 
	else {
	 spis=spis+ "&fpol=0";			
	}
        var vcek=document.getElementsByName("vcekic");
        if(vcek[0].checked==true){
	 spis=spis+ "&fvst=1";	
	} 
	if(vcek[1].checked==true) {
	 spis=spis+ "&fvst=2";			
	}
	if(vcek[2].checked==true) {
	 spis=spis+ "&fvst=2";			
	}
	if(vcek[3].checked==true) {
	 spis=spis+ "&fvst=3";			
	}            	
	xmlhttp.open("GET","alarmi_upis.php?"+spis,true);
	xmlhttp.send();
}

function alarmi_izmene(klaz)
{
	var okfor = document.createElement("div") ;
	document.body.appendChild(okfor);
	okfor.id="zavesa";
	var okfor1 = document.createElement("div") ;
	document.body.appendChild(okfor1);
	okfor1.id="dialog_unos";
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("dialog_unos").innerHTML=xmlhttp.responseText;
			alarmi_izmene_opcije(klaz);
		}
	}
	spis="fklz="+klaz;
	xmlhttp.open("GET","alarmi_dialog_izmene.php?"+spis,true);
	xmlhttp.send();
}
function alarmi_izmene_opcije(klaz)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
	{
     	    alarmi_izmene_upis(klaz);
	});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", klijenti_unos_izlaz);
}

function alarmi_izmene_upis(klaz)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			alarmi_lista("1");
			klijenti_unos_izlaz();
		}
	}
	spis="vrun=1";
	spis=spis+"&fklz="+klaz;
	sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdata='"+ndatu;
	spis=spis+"'&fvrma='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fkln="+document.getElementsByName("inptxt")[0].value;
	spis=spis+"&fzon='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fops='"+document.getElementsByName("inptxt")[4].value;
        var icek=document.getElementsByName("icekic");
        if(icek[0].checked==true){
	 spis=spis+ "'&fint=1";	
	} 
	else {
	 spis=spis+ "'&fint=0";			
	}
        if(icek[1].checked==true){
	 spis=spis+ "&fpol=1";	
	} 
	else {
	 spis=spis+ "&fpol=0";			
	}
        var vcek=document.getElementsByName("vcekic");
        if(vcek[0].checked==true){
	 spis=spis+ "&fvst=1";	
	} 
	if(vcek[1].checked==true) {
	 spis=spis+ "&fvst=2";			
	}
	if(vcek[2].checked==true) {
	 spis=spis+ "&fvst=2";			
	}
	if(vcek[3].checked==true) {
	 spis=spis+ "&fvst=3";			
	}            	
	xmlhttp.open("GET","alarmi_upis.php?"+spis,true);
	xmlhttp.send();
}

function alarmi_vrsta(vrss){
  var vriz=document.getElementsByName("mnizb")[0].value;		
  if (vrss==1){
   vrizz=Number(vriz)+4;	
   vriz=vrizz.toString();	
  }
  alarmi_lista(vriz);  	
}