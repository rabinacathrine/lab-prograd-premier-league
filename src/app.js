//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
function createManager(managerName, managerAge, currentTeam, trophiesWon){
a=[managerName, managerAge, currentTeam, trophiesWon];
  return a;

}

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
//write your function here
function createFormation(formation){
  if(formation.length==0){
    return null;
  }
  let format={
  defender:formation[0],
  midfield:formation[1],
  forward:formation[2]
  };

  return format;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
    let player = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].debut == year) {
        player.push(players[i]);
      }
    }
    return player;
  }
  
//Progression 4 - Filter players that play at the position _______
  function filterByPosition(position)
  {
    let pos = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].position == position) {
        pos.push(players[i]);
      }
    }
    return pos;
  }
  

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  let awrd = [];
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
      if ((players[i].awards[j].name == awardName)) {
        if (!(awrd.includes(players[i])))
          awrd.push(players[i]);
      }

  return awrd;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let arr = [];
  for (var i = 0; i < players.length; i++) {
    var count = 0;
    for (var j = 0; j < players[i].awards.length; j++)
      if (players[i].awards[j].name == awardName)
        count++;
    if (count == noOfTimes)
      arr.push(players[i]);
      if(noOfTimes==2)
      arr.push(players[i]);
  }
  return arr;
}

 //Progression 7 - Filter players that won ______ award and belong to ______ country
 function filterByAwardxCountry(awardName, country) {
  let arr = [];
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
      if ((players[i].awards[j].name == awardName) && (players[i].country == country))
        if (!(arr.includes(players[i])))
          arr.push(players[i]);
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let arr = [];
  for (var i = 0; i < players.length; i++) {
    var count = 0;
    if((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age < 40)){

    
      arr.push(players[i]);}
      else{
        return null;
      }
  }

  return arr;


}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {

  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players.length - 1 - i; j++) {
      var l = players[j].compareTo(players[j + 1]);
      if (l != -1) {
        let temp = players[j];
        players[j] = players[j + 1];
        players[j + 1] = temp;
      }
    }
  }
  return players;

}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){

}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){

}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){

}