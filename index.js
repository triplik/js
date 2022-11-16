const getLetter = (name, num) => name[num - 1] || '';

//Рисуем столько котиков, сколько захотим!
var drawCats=function (howManyTimes) {
	for (var i=0; i<howManyTimes; i++){
    console.log(i+'=^.^=');
  }
}
drawCats(10);//Вместо 10 тут может быть руое число

var secondOfAMintes = 60;
var minutesOfAHours = 60;
var secondOfAHours = secondOfAMintes * minutesOfAHours;
var hoursInADay = 24;
var secondOfADay = secondOfAHours * hoursInADay;
var dayOfAYear = 365;
var secondOfAYear = dayOfAYear * secondOfADay;
var daysOfAAge = 293 + dayOfAYear * 26;
var secondOfAAge = daysOfAAge * secondOfADay;
secondOfAAge;

var score = 100;
score /= 2;

'супердлиннаястрока'.length

var longString = 'Эта длинная строка такая длиная';
longString.slice(4,18);

var string = 'эЙ, кАк делА?';
var lowerString = string.slice(1).toLowerCase();
var firstLetterString = string[0].toUpperCase();
string = firstLetterString + lowerString;

var string = 'эЙ, кАк делА?';
string[0].toUpperCase() + string.slice(1).toLowerCase();

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool;

var height = 150;
var heightRestriction = 150;
height >= heightRestriction;

var age = 12;
var accompanied = true;
age >= 11 && accompanied;

maniacs.push('кот','собака','курица');

var lastManiacs = maniacs.pop();
maniacs;
lastManiacs; 

var lastManiacs = maniacs.shift();
maniacs;
lastManiacs; 

var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла"]
furryAnimals;
["Альпака", "Кольцехвостый лемур", "Йети"]
scalyAnimals;
["Удав", "Годзилла"]

var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals + scalyAnimals;
furryAndScalyAnimals;
"Альпака,Кольцехвостый лемур,ЙетиУдав,Годзилла" 

var colors = ['красный', 'зелёный', 'синий'];
colors.indexOf('красный');
0 

var boringAnimals = ['Мартышка', 'Кот', 'Собака', 'Черепаха', 'Попугай'];
boringAnimals.join('и');
"МартышкаиКотиСобакаиЧерепахаиПопугай" 

var boringAnimals = ['Мартышка', 'Кот', 'Собака', 'Черепаха', 'Попугай'];
boringAnimals.join(' and ');
"Мартышка and Кот and Собака and Черепаха and Попугай" 

var boringAnimals = ['Мартышка', 'Кот', 'Собака', 'Черепаха', 'Попугай'];
boringAnimals.join();
"Мартышка,Кот,Собака,Черепаха,Попугай" 

var randomWords = ['Кот', 'Собака', 'Рыбка', 'Попугай', 'Черепаха'];
var randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex];
"Собака" 

var randomWords = ['Кот', 'Собака', 'Рыбка', 'Попугай', 'Черепаха'];
randomWords[Math.floor(Math.random() * 5)];
"Попугай"

var randomWords = ['Кот', 'Собака', 'Рыбка', 'Попугай', 'Черепаха'];
randomWords[Math.floor(Math.random() * randomWords.length)];
"Рыбка" 

var firstWords =['здоровый','больной','тупой'];
var secondWords = ['ублюдок','расист','мудак'];
var insult = ['Привет', firstWords[Math.floor(Math.random()*firstWords.length)] ,secondWords[Math.floor(Math.random()*secondWords.length)]].join(' ');
insult;
"Привет здоровый мудак" 

var firstWords =['рука','голова','нога'];
var secondWords = ['кривая','ровная','тупая'];
var thirdWords = ['копыта','хвост','рога'];
var fourthWords = ['свиньи','коровы','оленя'];
var insult = ['У тебя', firstWords[Math.floor(Math.random() * firstWords.length)], 'ещё более', secondWords[Math.floor(Math.random() * secondWords.length)],…
"У тебя нога ещё более ровная чем рога у коровы" 

var firstWords =['рука','голова','нога'];
var secondWords = ['кривая','ровная','тупая'];
var thirdWords = ['копыта','хвост','рога'];
var fourthWords = ['свиньи','коровы','оленя'];
var insult ='У тебя '  + firstWords[Math.floor(Math.random() * firstWords.length)] + ' ещё более ' + secondWords[Math.floor(Math.random() * secondWords.length)] + 
', чем ' + thirdWords[Math.floor(Math.random() * thirdWords.length)] + ' у ' + fourthWords[Math.floor(Math.random() * fourthWords.length)];
insult;
"У тебя голова ещё более кривая, чем хвост у свиньи" 

var number = [3,2,1];
var result = number.join(' больше, чем ');
result;
"3 больше, чем 2 больше, чем 1" 

var array = Object.keys(cats);
array;
Array(3) [ "name", "age", "height" ]

cat.foot = 5;
5 

var dino = [
  {name: 'Tiran', period: 'Melo'},
    {name: 'Diplo', period: 'Yursk'},
    {name: 'Vilo', period: 'Witcher'}
];…
Array(3) [ {…}, {…}, {…} ]
​
0: Object { name: "Tiran", period: "Melo" }
​
1: Object { name: "Diplo", period: "Yursk" }
​
2: Object { name: "Vilo", period: "Witcher" }
​
length: 3
​
<prototype>: Array []

dino[1]["name"];
"Diplo" 

dino[1].name;
"Diplo" 

var anna = {name: "Анна", age: 11, LuckyNumbers: [2, 4, 8, 16] };
var dave = {name: 'Дэйв', age: 5, LuckyNumbers: [3, 9, 40] };
var kate = {name: 'Кейт', age: 9, LuckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];
friends;
friends[1].LuckyNumbers[1]
9 

var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};
myCrazyObject['some array'][2]['number'];
