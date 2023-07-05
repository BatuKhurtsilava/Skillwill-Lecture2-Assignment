//1
const names = [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}];

const nameOfMinAgePerson = function(user) {
  let userWithMinAge = 100;
  for(let i = 0; i < user.length ; i++) {
    if (user[i].age > user[i + 1].age) {
      userWithMinAge = user[i + 1].name;
    }
   return userWithMinAge;
  }
}

//2

const copyObject = function(user) {
const copyUser = {}
for(const [key, value] in Object.entries(user)) {
  copyUser[key] = value;
}
return copyUser;
}

//3

const diceGame = function() {
const firstRolls = () => Math.trunc(Math.random() * 6) + 1;
const secondRolls = () => Math.trunc(Math.random() * 6) + 1;
let firstResult;
let secondResult;
do {
  firstRolls();
  secondRolls();
  firstResult = firstRolls();
  secondResult = secondRolls();
} while (firstResult !== 3 && secondResult !== 3);

if(firstResult === 3) {
return `${firstResult}, ${secondResult} - player1  won the game  `;
} if(secondResult === 3){
return `${firstResult}, ${secondResult} - player2  won the game  `; 
}
};



