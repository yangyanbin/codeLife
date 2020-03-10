globalEvent.listen("click",listen);

globalEvent.remove("click",listen);

function listen(){
	console.log(typeof arguments);
}