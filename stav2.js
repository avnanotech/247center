function prijemni()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("pano").innerHTML=xmlhttp.responseText;
                        prijemni_lista("1");
         		prijemni_lista_opcije() ;
		}
	}
	spis="evitln=mtx_prijemni_glavni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function prijemni_lista(id){
  	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
		}
	}
	spis="vrvr="+id;
	xmlhttp.open("GET","prijemni_lista_ucitaj.php?"+spis,true);
	xmlhttp.send();	
}

function prijemni_lista_opcije() {
  document.getElementsByClassName("mnkon")[0].addEventListener("click", prijemni_novo);	
  document.getElementsByClassName("mnkon")[1].addEventListener("click", function()
	{
     	    prijemni_vrsta(0);
	}); 
 document.getElementsByClassName("mnkon")[2].addEventListener("click", function()
	{
     	    prijemni_vrsta(1);
	}); 
	
}

function prijemni_novo()
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
			prijemni_novo_opcije();
		}
	}
	spis="evitln=mtx_prijemni_dialog_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function prijemni_novo_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", prijemni_novo_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function prijemni_novo_upis()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
                        document.getElementById("podpano").innerHTML=xmlhttp.responseText;
                        prijemni_lista("1");
		}
	}
	spis="vrun=0";
	spis=spis+"&fkln="+kljuc();
	sdatu=document.getElementsByName("inptxt")[0].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	alert(ndatu);
	spis=spis+"&fdatp='"+ndatu;
	spis=spis+"'&fvrp='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fbro='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fimp='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fops='"+document.getElementsByName("inptxt")[4].value+"'";
	xmlhttp.open("GET","prijemni_upis.php?"+spis,true);
	xmlhttp.send();
}

function prijemni_izmene(klpr)
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
			prijemni_izmene_opcije(klpr);
		}
	}
	spis="fklp="+klpr;
	xmlhttp.open("GET","prijemni_dialog_izmene.php?"+spis,true);
	xmlhttp.send();
}
function prijemni_izmene_opcije(klpr)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
	{
     	    prijemni_izmene_upis(klpr);
	});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function prijemni_izmene_upis(klpr)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
                        prijemni_lista("1");
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=1";
	spis=spis+"&fkln="+klpr;
	sdatu=document.getElementsByName("inptxt")[0].value;
	ndatu=sdatu.slice(-4)+"/"+sdatu.slice(3,5)+"/"+sdatu.slice(0,2);
	spis=spis+"&fdatp='"+ndatu;
	spis=spis+"'&fvrp='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fbro='"+document.getElementsByName("inptxt")[2].value;
        spis=spis+"'&fimp='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fops='"+document.getElementsByName("inptxt")[4].value+"'";
	xmlhttp.open("GET","prijemni_upis.php?"+spis,true);
	xmlhttp.send();
}

function prijemni_vrsta(vrss){
  var vriz=document.getElementsByName("mnizb")[0].value;		
  if (vrss==1){
   vrizz=Number(vriz)+3;	
   vriz=vrizz.toString();	
  }
  prijemni_lista(vriz);  	
}
