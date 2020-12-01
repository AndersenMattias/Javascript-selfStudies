class Player {
  constructor(name, points){
      this.name = name;
      this.points = points
  }

  addPoints(points) {
    this.points = this.points + points;
    return this.points;
  }

  deductPoints(points) {
    this.points = this.points - points;
    return this.points;
  }

  static highScoreList(playerList) {   
    let sortedList =  players.sort((a,b) => {
      if(a.points > b.points) {
        return -1;
      }
      if(a.points < b.points) {
        return 1;
      }     
    });  
    console.log(sortedList);
  }
  
}

let göran = new Player('Göran', 55);
let bertil = new Player('Bertil', 89);
let nisse = new Player('Nisse', 88);
let goran = new Player('Goran', 80);

let players = [];
players.push(göran);
players.push(bertil);
players.push(nisse);
players.push(goran);


console.log(players);
Player.highScoreList(players);
nisse.addPoints(2);
console.log(nisse);

Player.highScoreList(players);











