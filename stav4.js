function intervencije(){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("pano").innerHTML=xmlhttp.responseText;
                        intervencije_lista("1");
         		intervencije_lista_opcije() ;
		}
	}
	spis="evitln=mtx_intervencije_glavni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function intervencije_lista(vrs){
  	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
		}
	}
	spis="vrvr="+vrs;
	xmlhttp.open("GET","intervencije_lista_ucitaj.php?"+spis,true);
	xmlhttp.send();	
}


function intervencije_lista_opcije() {
  document.getElementsByClassName("mnkon")[0].addEventListener("click", intervencije_novo);	
  document.getElementsByClassName("mnkon")[1].addEventListener("click", function()
	{
     	    intervencije_vrsta(0);
	}); 
 document.getElementsByClassName("mnkon")[2].addEventListener("click", function()
	{
     	    intervencije_vrsta(1);
	}); 
}

function intervencije_novo()
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
			intervencije_lista_clanovi()
			intervencije_novo_opcije();
		}
	}
	spis="evitln=mtx_intervencije_dialog_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function intervencije_novo_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", intervencije_novo_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function intervencije_lista_clanovi()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementsByName("inptxt")[5].innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","intervencije_clanovi.php",true);
	xmlhttp.send();
}

function intervencije_novo_upis()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
                        intervencije_lista("1");
		}
	}
	spis="vrun=0";
	spis=spis+"&fklint="+kljuc();
       sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdatp='"+ndatu;
	spis=spis+"'&fvrmp='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fkln="+document.getElementsByName("inptxt")[0].value;
       sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdatd='"+ndatu;
	spis=spis+"'&fvrmd='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&fcln='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&fzon='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&fops='"+document.getElementsByName("inptxt")[7].value;
        var vcek=document.getElementsByName("vcekic");
        if(vcek[0].checked==true){
	 spis=spis+ "'&fvst=1";	
	} 
	if(vcek[1].checked==true) {
	 spis=spis+ "'&fvst=2";			
	}
	if(vcek[2].checked==true) {
	 spis=spis+ "'&fvst=3";			
	}
	xmlhttp.open("GET","intervencije_upis.php?"+spis,true);
	xmlhttp.send();
}

function intervencije_izmene(klint)
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
			intervencije_izmene_opcije(klint);
		}
	}
	spis="fklint="+klint;
	xmlhttp.open("GET","intervencije_dialog_izmene.php?"+spis,true);
	xmlhttp.send();
}
function intervencije_izmene_opcije(klint)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
	{
     	    intervencije_izmene_upis(klint);
	});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function intervencije_izmene_upis(klint)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
                        intervencije_lista("1");
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=1";
	spis=spis+"&fklint="+klint;
	sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdatp='"+ndatu;
	spis=spis+"'&fvrmp='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fkln="+document.getElementsByName("inptxt")[0].value;
	sdatu=document.getElementsByName("inptxt")[3].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdatd='"+ndatu;
	spis=spis+"'&fvrmd='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&fcln='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&fzon='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&fops='"+document.getElementsByName("inptxt")[7].value;
        var vcek=document.getElementsByName("vcekic");
        if(vcek[0].checked==true){
	 spis=spis+ "'&fvst=1";	
	} 
	if(vcek[1].checked==true) {
	 spis=spis+ "'&fvst=2";			
	}
	if(vcek[2].checked==true) {
	 spis=spis+ "'&fvst=3";	
	}
	xmlhttp.open("GET","intervencije_upis.php?"+spis,true);
	xmlhttp.send();
}

function intervencije_vrsta(vrss){
  var vriz=document.getElementsByName("mnizb")[0].value;		
  if (vrss==1){
   vrizz=Number(vriz)+4;	
   vriz=vrizz.toString();	
  }
  intervencije_lista(vriz);  	
}