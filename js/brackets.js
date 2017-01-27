var Bracket = function (params) {
  this.mode= params.mode || "BO1";
  this.type = params.type || "random";
  this.teams = params.teams || [];
  this.round = [];
}

Bracket.prototype.init = function () {
  if (this.type=="random") {
    this.teams = this.teams.suffle();
    var matchs = [];
    for (var i=0;i<=this.teams.length/2;i++) {
      matchs.push( new Match({"teamA":this.teams[i*2],"teamB":this.teams[i*2+1],"mode":this.mode}) );
    }
    this.round.push( new Round({"match":matchs,"round":this.round.length}));
  }
  console.log(this);
}

Bracket.prototype.toString = function () {
  return "bracket";
}

Bracket.prototype.addTeam = function (team) {
  if (typeof team=="object" && team.toString()=="team") {
    this.teams.push(team);
  }else{console.log("Error adding team: "+team);}
}

Bracket.prototype.getIndex = function (team) {
  if (typeof team=="object" && team.toString()=="team") {
    for(var i=0;i<this.teams.length;i++){
      if(this.teams[i].name==team.name || this.teams[i].id==team.id || this.teams[i].tag==team.tag) return i;
    }
  }else{
    for(var i=0;i<this.teams.length;i++){
      if(this.teams[i].name==team || this.teams[i].id==team || this.teams[i].tag==team) return i;
    }
  }
}

Bracket.prototype.removeTeam = function (team) {
  var i = this.getIndex(team);
  if (i != -1) {this.teams.splice(i,1);}
}

Bracket.prototype.addResults = function (params) {
  if (params.round!=null && params.result.length>0) {
    for (var i=0;i<params.result.length;i++) {
      var res = params.result[i].split("-");
      if (res[0]) {this.round[params.round].match[i].result.teamA = res[0];}
      if (res[1]) {this.round[params.round].match[i].result.teamB = res[1];}
    }
    //console.log(this.round[params.round]);
  }
}
