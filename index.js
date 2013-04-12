var weak = require("weak");

module.exports = WeakMap;


function WeakMap(){
	this.clear();
}

WeakMap.prototype.get = function(key){
	return this.map[key];
}
WeakMap.prototype.set = function(key,value){
	var self = this;
	this.map[key] = weak(value,function(){
		self.delete(key);
	});
}
WeakMap.prototype.delete = function(key){
	delete this.map[key];
}
WeakMap.prototype.clear = function(){
	this.map = {};
}