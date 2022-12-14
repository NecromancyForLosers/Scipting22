// JavaScript Document
//function setFace()


//if(Button=="Light"){
	//	JobsPics = "<img class='img-fluid' src='Drawings/light_skin.png' alt='Light'>"
	//}else if(Button=="Medium"){
	//	JobsPics = "<img class='img-fluid' //src='Drawings/medium_skin.png' alt='Medium'>"
	//}else if(Button=="Dark"){
	//	JobsPics = "<img class='img-fluid' src='Drawings/dark_skin.png' alt='Dark'>"
	//}
var character={skin:"", hair:"", tattoos:""};


function setSkin(changling){
character.skin=changling;
	BodyBuilder();

}

function setHair(changling){
character.hair=changling;
	BodyBuilder();

}

function setTattoos(changling){
character.tattoos=changling;
	BodyBuilder();
}


function BodyBuilder(){
	
	
	if(character.skin!=""){
	
	document.getElementById('skin').innerHTML="<img class='img-fluid' src='Drawings/"+character.skin+"'alt='skin'>";
}
	
	if(character.hair!=""){
	
	document.getElementById('hair').innerHTML="<img class='img-fluid' src='Drawings/"+character.hair+"'alt='hair'>";
	
	}
	
	if(character.tattoos!=""){
	document.getElementById('tattoos').innerHTML="<img class='img-fluid' src='Drawings/"+character.tattoos+"'alt='tattoos'>";
	}
	
	
	
}