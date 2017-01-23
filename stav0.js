function imenik()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("pano").innerHTML=xmlhttp.responseText;
			imenik_meni_opcije();
		}
	}
	spis="evitln=mtx_imenik_glavni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_meni_opcije()
{
	document.getElementsByClassName("podmeni_stavka")[0].addEventListener("click", imenik_klijenti);
	document.getElementsByClassName("podmeni_stavka")[1].addEventListener("click", imenik_akcioni);
	document.getElementsByClassName("podmeni_stavka")[2].addEventListener("click", imenik_interni)
}

function imenik_klijenti()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
			document.getElementsByName("izbor")[0].addEventListener("change", imenik_klijenti_izbor);
			imenik_klijenti_profil_ucitavanje();
			imenik_klijenti_meni("1");
		}
	}
	spis="evitln=mtx_klijenti_glavni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_profil_ucitavanje()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("klijenti_pano").innerHTML=xmlhttp.responseText;
		}
	}
	spis="evitln=mtx_klijenti_profil.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_lista_ucitavanje(vst)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("klijenti_pano").innerHTML=xmlhttp.responseText;
		}
	}
	spis="vrvr="+vst;
	xmlhttp.open("GET","klijent_lista_ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_lista_vrsta(vrss)
{
	var vriz=document.getElementsByName("mnizb")[0].value;
	if (vrss==1)
	{
		vrizz=Number(vriz)+4;
		vriz=vrizz.toString();
	}
       imenik_klijenti_lista_ucitavanje(vriz);  	
}

function imenik_klijenti_meni(izs)
{
	if(izs==1)
	{
		spis="evitln=mtx_podmeni-p.html"
	}
	else
	{
		spis="evitln=mtx_podmeni-l.html"
	}
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("klijenti_meni_opcije").innerHTML=xmlhttp.responseText;
			imenik_klijenti_menii(izs);
		}
	}
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_menii(izs)
{
	document.getElementsByClassName("mnkon")[0].addEventListener("click", imenik_klijenti_unos);
	if(izs==1)
	{
		document.getElementsByClassName("mnkon")[1].addEventListener("click", imenik_klijenti_pretraga);
	}
	else
	{
		document.getElementsByClassName("mnkon")[1].addEventListener("click", function()
			{
				imenik_klijenti_lista_vrsta(0);
			});
		document.getElementsByClassName("mnkon")[2].addEventListener("click", function()
			{
				imenik_klijenti_lista_vrsta(1);
			});
	}
}

function imenik_klijenti_izbor()
{
	var izsta=document.getElementsByName("izbor")[0].value
	if(izsta==1)
	{
		imenik_klijenti_profil_ucitavanje();
	}
	else
	{
		imenik_klijenti_lista_ucitavanje(1);
	}
	imenik_klijenti_meni(izsta);
}

function imenik_klijenti_unos()
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
			imenik_klijenti_unos_opcije();
		}
	}
	spis="evitln=mtx_imenik_dialog_klijenti_osnova_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_unos_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", imenik_klijenti_unos_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_klijenti_unos_upis()
{
        var vrpre=document.getElementsByName("izbor")[0].value;
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_klijenti_lista_ucitavanje(1);
		}
	}
	spis="fkln="+kljuc();
   alert(vrpre);
    if(vrpre=="2"){
	spis=spis+"&fidmn='"+document.getElementsByName("inptxt")[0].value;
	spis=spis+"'&fnazk='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fadrk='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fmstk='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&femai='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&frdv='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&fvrst='"+document.getElementsByName("inptxt")[7].value;
	spis=spis+"'&fgruo='"+document.getElementsByName("inptxt")[8].value;
	spis=spis+"'&fgps='"+document.getElementsByName("inptxt")[9].value+"'";
  } 
  else{
	spis=spis+"&fidmn='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fnazk='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fadrk='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fmstk='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&femai='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&frdv='"+document.getElementsByName("inptxt")[7].value;
	spis=spis+"'&fvrst='"+document.getElementsByName("inptxt")[8].value;
	spis=spis+"'&fgruo='"+document.getElementsByName("inptxt")[9].value;
	spis=spis+"'&fgps='"+document.getElementsByName("inptxt")[10].value+"'";
 }
	xmlhttp.open("GET","klijent_osnova_upis.php?"+spis,true);
	xmlhttp.send();


}
function imenik_klijenti_unos_izlaz()
{
	document.body.removeChild(document.getElementById("dialog_unos"))	;
	document.body.removeChild(document.getElementById("zavesa"))	;
}


function imenik_klijenti_profil(tip,klid)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("klijenti_pano").innerHTML=xmlhttp.responseText;
			imenik_klijenti_profil_sekcije(klid)
		}
	}
	spis="kltip="+tip;
	spis=spis+"&klid="+klid;
	xmlhttp.open("GET","klijenti_profil_ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_profil_otv(izid){
  imenik_klijenti_profil(1,izid);
  document.getElementsByName("izbor")[0].value=1;
  imenik_klijenti_meni(1);
}


function imenik_klijenti_profil_sekcije(kklid)
{
	document.getElementsByClassName("konskc")[0].addEventListener("click", function()
		{
			imenik_klijenti_osnova_izmene(kklid);
		});
	document.getElementsByClassName("konskc")[1].addEventListener("click", function()
		{
			imenik_klijenti_akcije_izmene(kklid);
		});
	document.getElementById("kontab").addEventListener("click", function()
		{
			imenik_klijenti_kontakti_novo(kklid);
		});
	document.getElementsByClassName("mnkon")[2].addEventListener("click",imenik_klijenti_mape);
}

function   imenik_klijenti_osnova_izmene(kklid)
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
			imenik_klijenti_osnova_izmene_opcije(kklid)
		}
	}
	spis="kklid="+kklid;
	xmlhttp.open("GET","klijenti_dialog_osnova_izmene.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_osnova_izmene_opcije(kklid)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
		{
			imenik_klijenti_osnova_izmene_upis(kklid);
		});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", function()
		{
			imenik_klijenti_osnova_status(kklid);
		});
	document.getElementsByClassName("dugme_forma")[2].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_klijenti_osnova_izmene_upis(kklid)
{
        var vrpre=document.getElementsByName("izbor")[0].value;
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_klijenti_profil(0,kklid);
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="fkln="+kklid;
    if(vrpre=="2"){
	spis=spis+"&fidmn='"+document.getElementsByName("inptxt")[0].value;
	spis=spis+"'&fnazk='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fadrk='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fmstk='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&femai='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&frdv='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&fvrst='"+document.getElementsByName("inptxt")[7].value;
	spis=spis+"'&fgruo='"+document.getElementsByName("inptxt")[8].value;
	spis=spis+"'&fgps='"+document.getElementsByName("inptxt")[9].value+"'";
  } 
  else{
	spis=spis+"&fidmn='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fnazk='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fadrk='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fmstk='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&femai='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&frdv='"+document.getElementsByName("inptxt")[7].value;
	spis=spis+"'&fvrst='"+document.getElementsByName("inptxt")[8].value;
	spis=spis+"'&fgruo='"+document.getElementsByName("inptxt")[9].value;
	spis=spis+"'&fgps='"+document.getElementsByName("inptxt")[10].value+"'";
 }

	xmlhttp.open("GET","klijenti_osnova_izmene.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_osnova_status(kklid)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_klijenti_profil(0,kklid);
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="fkln="+kklid;
	xmlhttp.open("GET","klijenti_status.php?"+spis,true);
	xmlhttp.send();
}


function imenik_klijenti_akcije_izmene(kklid)
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
			imenik_klijenti_akcije_izmene_opcije(kklid)
		}
	}
	spis="kklid="+kklid;
	xmlhttp.open("GET","klijenti_dialog_akcije_izmene.php?"+spis,true);
	xmlhttp.send();

}

function imenik_klijenti_akcije_izmene_opcije(kklid)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
		{
			imenik_klijenti_akcije_izmene_upis(kklid);
		});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}


function imenik_klijenti_akcije_izmene_upis(kklid)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_klijenti_profil(0,kklid);
			imenik_klijenti_unos_izlaz();
		}
	}

	spis="fkln="+kklid;
	spis=spis+"&fakc1='"+document.getElementsByName("akclst")[0].value;
	spis=spis+"'&fakc2='"+document.getElementsByName("akclst")[1].value;
	spis=spis+"'&fakc3='"+document.getElementsByName("akclst")[2].value;
	spis=spis+"'&fakc4='"+document.getElementsByName("akclst")[3].value;
	spis=spis+"'&fakc5='"+document.getElementsByName("akclst")[4].value;
	spis=spis+"'&fnapo='"+document.getElementsByName("inptxt")[0].value+"'";
	xmlhttp.open("GET","klijenti_akcije_izmene.php?"+spis,true);
	xmlhttp.send();
}

function imenik_klijenti_kontakti_novo(kklid)
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
			imenik_klijenti_kontakti_novo_opcije(kklid)
		}
	}
	spis="tup=n";
	spis=spis+"&kklid="+kklid;
	spis=spis+"&klkn=0";
	xmlhttp.open("GET","klijenti_dialog_kontakti.php?"+spis,true);
	xmlhttp.send();

}

function imenik_klijenti_kontakti_novo_opcije(kklid)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
		{
			imenik_klijenti_kontakti_upis(kklid,0);
		});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_klijenti_kontakti_upis(kklid,klkn)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_klijenti_profil(0,kklid);
			imenik_klijenti_unos_izlaz();
		}
	}
	if(klkn==0)
	{
		vrun=0;
		klkn=kljuc();
	}
	else
	{
		vrun=1;
	}
	spis="vrun="+vrun;
	spis=spis+"&fkln="+kklid;
	spis=spis+"&fklk="+klkn;
	spis=spis+"&fimpr='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fpoza='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fpoj1='"+document.getElementsByName("inptxt")[3].value;
	spis=spis+"'&fpoj2='"+document.getElementsByName("inptxt")[4].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[5].value;
	spis=spis+"'&fmob1='"+document.getElementsByName("inptxt")[6].value;
	spis=spis+"'&fmob2='"+document.getElementsByName("inptxt")[7].value+"'";
	xmlhttp.open("GET","klijenti_kontakti_unos.php?"+spis,true);
	xmlhttp.send();
}

function   imenik_klijenti_kontakti_izmene(kklid,klkn)
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
			imenik_klijenti_kontakti_izmene_opcije(kklid,klkn)
		}
	}
	spis="tup=i";
	spis=spis+"&kklid="+kklid;
	spis=spis+"&klkn="+klkn;
	xmlhttp.open("GET","klijenti_dialog_kontakti.php?"+spis,true);
	xmlhttp.send();

}

function imenik_klijenti_kontakti_izmene_opcije(kklid,klkn)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
		{
			imenik_klijenti_kontakti_upis(kklid,klkn);
		});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", function()
		{
			imenik_klijenti_kontakti_brisanje(kklid,klkn);
		});
	document.getElementsByClassName("dugme_forma")[2].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_klijenti_kontakti_brisanje(kklid,klkn)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_klijenti_profil(0,kklid);
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="fkln="+kklid;
	spis=spis+"&fklk="+klkn;
	xmlhttp.open("GET","klijenti_kontakti_brisanje.php?"+spis,true);
	xmlhttp.send();
}



function imenik_klijenti_pretraga()
{
	var trag=document.getElementsByName("inptxt")[0].value;
	var duz=trag.length;
	if(duz==4)
	{
		var xmlhttp=new XMLHttpRequest();
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var  izkl=xmlhttp.responseText;
				if(izkl!="000")
				{
					imenik_klijenti_profil(0,izkl);
				}
			}
		}
		spis="vrpt=0";
		spis=spis+"&ptrg="+trag;
		xmlhttp.open("GET","klijenti_pretraga.php?"+spis,true);
		xmlhttp.send();
	}
	else
	{
		alert("Unesite ponovo ID");
	}
}

function imenik_klijenti_mape()
{
	var lokca=document.getElementsByClassName("mnkon")[0].innerHTML
	lokc=lokca.slice(0,17);
	var mpvis=lokc.slice(0,2);
	var mpvis1=lokc.slice(3,5);
	var mpvis11=lokc.slice(6,8);
	var mpduz=lokc.slice(7,9);
	var mpduz1=lokc.slice(10,12);
	var mpduz11=lokc.slice(13,15);
	mpv=parseInt(mpvis)+parseInt(mpvis1)/60+parseInt(mpvis11)/3600;
	mpd=parseInt(mpduz)+parseInt(mpduz1)/60+parseInt(mpduz11)/3600;
	var okfor = document.createElement("div") ;
	document.body.appendChild(okfor);
	okfor.id="zavesa";
	var okfor1 = document.createElement("div") ;
	document.body.appendChild(okfor1);
	okfor1.id="dialog_map";
	document.getElementById("dialog_map").innerHTML="<div id=klmap><div>";
	imenik_klijenti_mape_otvor(mpd,mpv);
	document.getElementById("klmap").style.width ="500px";
	document.getElementById("klmap").style.height="500px" ;
}

function imenik_klijenti_mape_otvor(mpv,mpd)
{
	var mapProp =
	{
		center:new google.maps.LatLng(mpd,mpv),
		zoom:10,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("klmap"),mapProp);
}

function imenik_akcioni()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
			imenik_akcioni_ucitavanje();
			imenik_akcioni_meni_opcije();
		}
	}
	spis="evitln=mtx_imenik_akcioni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_akcioni_ucitavanje(){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("akcioni_pano").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","akcioni_lista_ucitaj.php",true);
	xmlhttp.send();
}

function imenik_akcioni_meni_opcije()
{
	document.getElementsByClassName("mnkon")[0].addEventListener("click", imenik_akcioni_novo);
}


function imenik_akcioni_novo()
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
			imenik_akcioni_novo_opcije();
		}
	}
	spis="evitln=mtx_imenik_dialog_akcioni_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_akcioni_novo_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", imenik_akcioni_novo_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_akcioni_novo_upis()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_akcioni_ucitavanje();
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=0";
	spis=spis+"&fkln="+kljuc();
	spis=spis+"&fnazak='"+document.getElementsByName("inptxt")[0].value;
	spis=spis+"'&fknak='"+document.getElementsByName("inptxt")[1].value+"'";
	xmlhttp.open("GET","imenik_akcioni_upis.php?"+spis,true);
	xmlhttp.send();
}

function imenik_akcioni_izmene(kklak)
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
			imenik_akcioni_izmene_opcije(kklak);
		}
	}
	spis="kklak="+kklak;
	xmlhttp.open("GET","akcioni_dialog_izmene.php?"+spis,true);
	xmlhttp.send();
}

function imenik_akcioni_izmene_opcije(kklak)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
		{
			imenik_akcioni_izmene_upis(kklak);
		});
/*	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", function()
		{
			imenik_akcioni_brisanje(kklak);
		});*/
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_akcioni_izmene_upis(klak)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_akcioni();
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=1";
	spis=spis+"&fkln="+klak;
	spis=spis+"&fnazak='"+document.getElementsByName("inptxt")[0].value;
	spis=spis+"'&fknak='"+document.getElementsByName("inptxt")[1].value+"'";
	xmlhttp.open("GET","akcioni_upis.php?"+spis,true);
	xmlhttp.send();
}

function imenik_akcioni_brisanje(kklak)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_akcioni();
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="fkln="+kklak;
	xmlhttp.open("GET","akcioni_brisanje.php?"+spis,true);
	xmlhttp.send();
}

function imenik_interni()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("podpano").innerHTML=xmlhttp.responseText;
			imenik_interni_ucitavanje();
			imenik_interni_meni_opcije();
		}
	}
	spis="evitln=mtx_imenik_interni.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}


function imenik_interni_ucitavanje()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("interni_pano").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","interni_lista_ucitaj.php",true);
	xmlhttp.send();
}

function imenik_interni_meni_opcije()
{
	document.getElementsByClassName("mnkon")[0].addEventListener("click", imenik_interni_novo);
}


function imenik_interni_novo()
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
			imenik_interni_novo_opcije();
		}
	}
	spis="evitln=mtx_imenik_dialog_interni_unos.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function imenik_interni_novo_opcije()
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", imenik_interni_novo_upis);
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_interni_novo_upis()
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_interni_ucitavanje();
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=0";
	spis=spis+"&fkln="+kljuc();
	spis=spis+"&fimpr='"+document.getElementsByName("inptxt")[0].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fmob1='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fmob2='"+document.getElementsByName("inptxt")[3].value;
	var ocek=document.getElementsByName("cekic");
	if (ocek[0].checked==true)
	{
		spis=spis+"'&fopr=1";
	}
	else
	{
		spis=spis+"'&fopr=0";
	}
	if (ocek[1].checked==true)
	{
		spis=spis+"&fint=1";
	}
	else
	{
		spis=spis+"&fint=0";
	}
	if (ocek[2].checked==true)
	{
		spis=spis+"&fsrv=1";
	}
	else
	{
		spis=spis+"&fsrv=0";
	}
	xmlhttp.open("GET","interni_upis.php?"+spis,true);
	xmlhttp.send();
}

function imenik_interni_izmene(kklak)
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
			imenik_interni_izmene_opcije(kklak);
			imenik_interni_izmene_overe();
		}
	}
	spis="kklak="+kklak;
	xmlhttp.open("GET","interni_dialog_izmene.php?"+spis,true);
	xmlhttp.send();
}

function imenik_interni_izmene_opcije(kklak)
{
	document.getElementsByClassName("dugme_forma")[0].addEventListener("click", function()
		{
			imenik_interni_izmene_upis(kklak);
		});
	document.getElementsByClassName("dugme_forma")[1].addEventListener("click", imenik_klijenti_unos_izlaz);
}

function imenik_interni_izmene_overe()
{
	var ocek=document.getElementsByName("cekic");
	if (ocek[0].value=="1")
	{
		ocek[0].checked=true;
	}
	else
	{
		ocek[0].checked=false;
	}
	if (ocek[1].value=="1")
	{
		ocek[1].checked=true;
	}
	else
	{
		ocek[1].checked=false;
	}
	if (ocek[2].value=="1")
	{
		ocek[2].checked=true;
	}
	else
	{
		ocek[2].checked=false;
	}

}
function imenik_interni_izmene_upis(klak)
{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			imenik_interni_ucitavanje();
			imenik_klijenti_unos_izlaz();
		}
	}
	spis="vrun=1";
	spis=spis+"&fkln="+klak;
	spis=spis+"&fimpr='"+document.getElementsByName("inptxt")[0].value;
	spis=spis+"'&ffiks='"+document.getElementsByName("inptxt")[1].value;
	spis=spis+"'&fmob1='"+document.getElementsByName("inptxt")[2].value;
	spis=spis+"'&fmob2='"+document.getElementsByName("inptxt")[3].value;
	var ocek=document.getElementsByName("cekic");
	if (ocek[0].checked==true)
	{
		spis=spis+"'&fopr=1";
	}
	else
	{
		spis=spis+"'&fopr=0";
	}
	if (ocek[1].checked==true)
	{
		spis=spis+"&fint=1";
	}
	else
	{
		spis=spis+"&fint=0";
	}
	if (ocek[2].checked==true)
	{
		spis=spis+"&fsrv=1";
	}
	else
	{
		spis=spis+"&fsrv=0";
	}
	xmlhttp.open("GET","interni_upis.php?"+spis,true);
	xmlhttp.send();
}

