/*发布/订阅模式*/

function EventProxy(){
	this.eventList = {};
}

EventProxy.prototype.listen = function(key,fn){
	if(!this.eventList[key]){
		this.eventList[key] = [];
	}
	this.eventList[key].push(fn);
}

EventProxy.prototype.trigger = function(){
	var key = Array.prototype.shift.call(arguments);
	var events = this.eventList[key];
	if(events&&events.length>0){
		for(var i=0,len=events.length;i<len;i++){
			events[i].apply(this,arguments);
		}
	}
}

EventProxy.prototype.remove = function(key,fn){
	var events = this.eventList[key];
	if(events&&events.length>0){
		for(var i=0,len=events.length;i<len;i++){
			if(fn===events[i]){
				events.splice(i,1);
				return;
			}
		}
	}
}

var globalEvent = new EventProxy();