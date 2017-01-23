function odsustva(){
 	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("pano").innerHTML=xmlhttp.responseText;
                        odsustva_lista("1");
         		odsustva_lista_opcije() ;
		}
	}
	spis="evitln=mtx_odsustva_glavni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function odsustva_lista(id){
  	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
		}
	}
	spis="vrvr="+id;
	xmlhttp.open("GET","odsustva_lista_ucitaj.php?"+spis,true);
	xmlhttp.send();	
}



function odsustva_lista_opcije() {
  document.getElementsByClassName("mnkon")[0].addEventListener("click", odsustva_novo);	
  document.getElementsByClassName("mnkon")[1].addEventListener("click", function()
	{
		odsustva_vrsta(0);
	}); 
 document.getElementsByClassName("mnkon")[2].addEventListener("click", function()
	{
     	    odsustva_vrsta(1);
	}); 
	
}

function odsustva_novo()
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
			odsustva_novo_opcije();
		}
	}
	spis="evitln=mtx_odsustva_dialog_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function odsustva_novo_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", odsustva_novo_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}



function odsustva_novo_upis()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		/*	document.getElementById("dialog_unos").innerHTML=xmlhttp.responseText;*/
			odsustva_lista("1");
		}
	}
	spis="vrun=0";
	spis=spis+"&fklod="+kljuc();
	spis=spis+"&fkln="+document.getElementsByName("inptxt")[0].value;
	sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdat='"+ndatu;
	spis=spis+"'&foso='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fkon='"+document.getElementsByName("inptxt")[3].value+"'";
	xmlhttp.open("GET","odsustva_upis.php?"+spis,true);
	xmlhttp.send();
}

function odsustva_izmene(klod)
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
			odsustva_izmene_opcije(klod);
		}
	}
	spis="fklod="+klod;
	xmlhttp.open("GET","odsustva_dialog_izmene.php?"+spis,true);
	xmlhttp.send();
}
function odsustva_izmene_opcije(klod)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
	{
     	    odsustva_izmene_upis(klod);
	});
        document.getElementsByClassName("dugme_forma")[1].addEventListener("click", function()
	{
     	    odsustva_status(klod);
	});
	document.getElementsByClassName("dugme_forma")[2].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function odsustva_izmene_upis(klod)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			odsustva_lista("1");
			klijenti_unos_izlaz();
		}
	}
	spis="vrun=1";
	spis=spis+"&fklod="+klod;
	sdatu=document.getElementsByName("inptxt")[1].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdat='"+ndatu;
	spis=spis+"'&foso='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fkln="+document.getElementsByName("inptxt")[0].value;
	spis=spis+"&fkon='"+document.getElementsByName("inptxt")[3].value+"'";
	xmlhttp.open("GET","odsustva_upis.php?"+spis,true);
	xmlhttp.send();
}

function odsustva_status(klod)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			odsustva_lista("1");
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=2";
	spis=spis+"&fklod="+klod;
	xmlhttp.open("GET","odsustva_upis.php?"+spis,true);
	xmlhttp.send();
}

function odsustva_vrsta(vrss){
  var vriz=document.getElementsByName("mnizb")[0].value;		
  if (vrss==1){
   vrizz=Number(vriz)+3;	
   vriz=vrizz.toString();	
  }
  odsustva_lista(vriz);  	
}
