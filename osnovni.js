function revolution()
{
	sat();
	document.getElementsByClassName("mnred")[0].style.visibility="collapse";
	document.getElementsByClassName("mnred")[0].style.display="none";
	document.getElementById("xtabela").style.height=screen.availHeight+"px";
        kapija();
}
function revolu()
{
	document.getElementsByClassName("meni_stavka")[0].addEventListener("click", imenik);
	document.getElementsByClassName("meni_stavka")[1].addEventListener("click", alarmi);
	document.getElementsByClassName("meni_stavka")[2].addEventListener("click", prijemni)
	document.getElementsByClassName("meni_stavka")[3].addEventListener("click", odsustva);
	document.getElementsByClassName("meni_stavka")[4].addEventListener("click", intervencije);
/*	document.getElementsByClassName("meni_stavka")[5].addEventListener("click", servis);*/


	document.getElementsByClassName("meni_stavka")[0].addEventListener("mouseover", function()
		{
			oboji(0,0);
		});
	document.getElementsByClassName("meni_stavka")[1].addEventListener("mouseover", function()
		{
			oboji(0,1);
		});
	document.getElementsByClassName("meni_stavka")[2].addEventListener("mouseover", function()
		{
			oboji(0,2);
		});
	document.getElementsByClassName("meni_stavka")[3].addEventListener("mouseover", function()
		{
			oboji(0,3);
		});
	document.getElementsByClassName("meni_stavka")[4].addEventListener("mouseover", function()
		{
			oboji(0,4);
		});
/*	document.getElementsByClassName("meni_stavka")[5].addEventListener("mouseover", function()
		{
			oboji(0,5);
		});*/

	document.getElementsByClassName("meni_stavka")[0].addEventListener("mouseout", function()
		{
			oboji(1,0);
		});
	document.getElementsByClassName("meni_stavka")[1].addEventListener("mouseout", function()
		{
			oboji(1,1);
		});
	document.getElementsByClassName("meni_stavka")[2].addEventListener("mouseout", function()
		{
			oboji(1,2);
		});
	document.getElementsByClassName("meni_stavka")[3].addEventListener("mouseout", function()
		{
			oboji(1,3);
		});
	document.getElementsByClassName("meni_stavka")[4].addEventListener("mouseout", function()
		{
			oboji(1,4);
		});
/*	document.getElementsByClassName("meni_stavka")[5].addEventListener("mouseout", function()
		{
			oboji(1,5);
		});*/



}

function oboji(vr,rd)
{
	if (vr==1)
	{
		/*   document.getElementsByClassName("meni_stavka")[rd].style.backgroundColor="#535179";*/
		document.getElementsByClassName("meni_stavka")[rd].style.color="#ddffff";
	}
	else
	{
		/*   document.getElementsByClassName("meni_stavka")[rd].style.backgroundColor="#000000";*/
		document.getElementsByClassName("meni_stavka")[rd].style.color="#aadddd";
	}
}

function kljuc()
{
	var sada = new Date();
	var dd = sada.getDate();
	var ms = sada.getMonth();
	var gg = sada.getFullYear();
	var cs = sada.getHours();
	var mn = sada.getMinutes();
	var ss = sada.getSeconds();

	var ggg=String(gg);
	ggg=ggg.slice(2,4);

	var ddd = String(dd);
	if (ddd.length==1)
	{
		ddd="0"+ddd;
	}

	ms=ms+1;
	var mms = String(ms);
	if (mms.length==1)
	{
		mms="0"+mms;
	}

	var ccs = String(cs);
	if (ccs.length==1)
	{
		ccs="0"+ccs;
	}

	var mmn = String(mn);
	if (mmn.length==1)
	{
		mmn="0"+mmn;
	}

	var sss = String(ss);
	if (sss.length==1)
	{
		sss="0"+sss;
	}

	return ggg+mms+ddd+ccs+mmn+sss;
}


function sat()
{
	var sada = new Date();
	var dd = sada.getDate();
	var ms = sada.getMonth();
	var gg = sada.getFullYear();
	var cs = sada.getHours();
	var mn = sada.getMinutes();
	var ss = sada.getSeconds();

	var ggg=String(gg);

	var ddd = String(dd);
	if (ddd.length==1)
	{
		ddd="0"+ddd;
	}

	ms=ms+1;
	var mms = String(ms);
	if (mms.length==1)
	{
		mms="0"+mms;
	}

	var ccs = String(cs);
	if (ccs.length==1)
	{
		ccs="0"+ccs;
	}

	var mmn = String(mn);
	if (mmn.length==1)
	{
		mmn="0"+mmn;
	}

	var sss = String(ss);
	if (sss.length==1)
	{
		sss="0"+sss;
	}
	document.getElementsByClassName("infoc")[0].innerHTML=ddd+"."+mms+"."+ggg;
	document.getElementsByClassName("infoc")[2].innerHTML=	ccs+":"+mmn+":"+sss;
	setTimeout(function(){sat()}, 1000);
}


/* KALENDAR - skup funkcija */


function kald(id)
{
	var dtm=new Date();
	kldd=dtm.getDate();
	kldm=dtm.getMonth()+1;
	kldg=dtm.getFullYear();
	var dasa = new Date(kldg,kldm-1,1);
	var dasa = new Date(kldg,kldm-1,1);
	klrd=dasa.getDay();
	if (klrd==0)
	{
		klrd=6;
	}
	else
	{
		klrd--;
	}
	izbo=id;
	var okfor = document.createElement("div");
	document.body.appendChild(okfor);
	okfor.id="okno1";
	document.getElementById('okno1').style.visibility="visible";
	document.getElementById('okno1').style.zIndex=10002;
	spis="<table id=kdtb><tr><td id=kdgp onclick='kalgod(0)'> < </td><td id=kdn name=kdg colspan='5'> 2014 </td><td  id=kdgn onclick='kalgod(1)'> > </td> </tr>";
	spis=spis+"<tr><td id=kdmp onclick='kalmes(0)'> < </td><td id=kdn name=kdm colspan='5'> april </td><td id=kdmn onclick='kalmes(1)'> > </td></tr>";
	spis=spis+"<tr><td id=kdnn>PON</td><td id=kdnn>UTO</td><td id=kdnn>SRE</td><td id=kdnn>CET</td><td id=kdnn>PET</td><td id=kdnn>SUB</td><td id=kdnn>NED</td></tr>";
	spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
	spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
	spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
	spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
	spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
	spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
	spis=spis+"<td id=kdn colspan=7><input type='button' id='dgm' value='UNOS' onclick='datun()'><input id='dgm' type='button' value='IZLAZ' onclick='diaoutk()'></td></table>";
	document.getElementById("okno1").innerHTML=spis;
	kalendar();
}

function kalendar()
{

	document.getElementsByName("kdg")[0].innerHTML=kldg;
	switch (kldm)
	{
		case 1:
		day = "Januar";
		break;
		case 2:
		day = "Februar";
		break;
		case 3:
		day = "Mart";
		break;
		case 4:
		day = "April";
		break;
		case 5:
		day = "Maj";
		break;
		case 6:
		day = "Jun";
		break;
		case 7:
		day = "Jul";
		break;
		case 8:
		day = "August";
		break;
		case 9:
		day = "Septembar";
		break;
		case 10:
		day = "Oktobar";
		break;
		case 11:
		day = "Novembar";
		break;
		case 12:
		day = "Decembar";
		break;
	}
	document.getElementsByName("kdm")[0].innerHTML=day;
	for (ll=0;ll<=5;ll++)
	{
		for (kk=0;kk<=6;kk++)
		{
			kl=ll*7+kk;
			if (kl>=klrd && kl<=klrd+30)
			{
				document.getElementsByName("kdn")[kl].innerHTML=kl-klrd+1;
			}
			else
			{
				document.getElementsByName("kdn")[kl].innerHTML="*";
				document.getElementsByName("kdn")[kl].style.color="#000099";
			}
		}
	}
	for (ll=0;ll<=5;ll++)
	{
		for (kk=0;kk<=6;kk++)
		{
			kl=ll*7+kk;
			if (kl>=klrd && kl<=klrd+30)
			{
				dnn=kl-klrd+1;
				if(dnn==kldd)
				{
					document.getElementsByName("kdn")[kl].style.color="#ff0000";
				}
				else
				{
					document.getElementsByName("kdn")[kl].style.color="#000099";
				}
			}

		}
	}
}

function kalgod(id)
{
	if(id==0)
	{
		kldg--;
	}
	else
	{
		kldg++;
	}
	var dasa = new Date(kldg,kldm-1,1);
	klrd=dasa.getDay();
	if (klrd==0)
	{
		klrd=6;
	}
	else
	{
		klrd--;
	}
	kalendar();
}

function kalmes(id)
{
	if(id==0)
	{
		kldm--;
		if(kldm==0)
		{
			kldm=12;
			kldg--;
		}
	}
	else
	{
		kldm++;
		if(kldm==13)
		{
			kldm=1;
			kldg++;
		}
	}
	var dasa = new Date(kldg,kldm-1,1);
	klrd=dasa.getDay();
	if (klrd==0)
	{
		klrd=6;
	}
	else
	{
		klrd--;
	}
	kalendar();
}

function daniz(obj)
{
	kldd=parseInt(obj.innerHTML);
	kalendar();
}

function datun()
{
	var klddd = String(kldd);
	if (klddd.length==1)
	{
		klddd="0"+klddd;
	}

	var kldms = String(kldm);
	if (kldms.length==1)
	{
		kldms="0"+kldms;
	}

	document.getElementsByClassName("inptxt")[izbo].value=klddd+"."+kldms+"."+kldg;
	document.body.removeChild(document.getElementById("okno1"));
}

function kapija(){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("pano").innerHTML=xmlhttp.responseText;
             document.getElementById("ullog").style.height=document.getElementById("pano").clientHeight;
             document.getElementById("dialog_unos").style.left="35%";
             document.getElementById("dialog_unos").style.top="35%";
             document.getElementById("dialog_unos").style.width="40%";
             document.getElementById("dialog_unos").style.height="20%";
		}
	}
	spis="evitln=mtx_glavni_log.html"
	xmlhttp.open("GET","ucitaj.php?"+spis,true);
	xmlhttp.send();
}

function kapija_akcija()
{
	var logki=document.getElementsByName("inptxt")[0].value;
	var loglz=document.getElementsByName("inptxt")[1].value;
	if(logki=="demo" && loglz=="demo")
	{
		document.getElementsByClassName("mnred")[0].style.visibility="visible";
		document.getElementsByClassName("mnred")[0].style.display="block";
		document.getElementById("pano").innerHTML="";
        document.getElementById("pano").style.background="url(back1.png)"
		revolu();
	}
	else
	{
alert("Unesite ponovo Vase podatke")
	}
}