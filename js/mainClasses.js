/*
 * Class Team
 */

var Team = function (params) {
  this.id = this.generateId();
  this.name = params.name || "Desconocido";
  this.tag = params.tag || "";
}

Team.prototype.generateId = function () {
  var n = 10;
  var t = "";
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0;i<n;i++){t+=a.charAt(Math.floor(Math.random()*a.length));}
  return t;
}

Team.prototype.toString = function(){
  return "team";
}

/*
 * Class Match
 */

var Match = function (params) {
  this.teamA = params.teamA || null;
  this.teamB = params.teamB || null;
  this.mode = params.mode || "BO3";
  this.result = params.result || {'teamA':0,'teamB':0} ;
}

/*
 * Class Round
 */

var Round = function(params){
  this.round = params.round;
  this.match = params.match || [];
}
