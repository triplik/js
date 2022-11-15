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



