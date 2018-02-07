function cc(){this.name='fs'}
// undefined
function dd(){}
// undefined
cc.call(dd)
// undefined

function dd(){console.log(this.name)}

dd.call(cc)
// cc

dd.apply(cc)
// cc

window.color = 'red';
document.color = 'yellow';

var s1 = {color: 'blue' };
function changeColor(){
    console.log(this.color);
}

changeColor.call();         //red (默认传递参数)
changeColor.call(window);   //red
changeColor.call(document); //yellow
changeColor.call(this);     //red
changeColor.call(s1);       //blue


var Pet = {
 words : '...',
 speak : function (say) {
     console.log(say + ''+ this.words)
 }
}
Pet.speak('Speak'); // 结果：Speak...

var Dog = {
 words:'Wang'
}

//将this的指向改变成了Dog
Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang


window.number = 'one';
document.number = 'two';

var s1 = {number: 'three' };
function changeColor(){
    console.log(this.number);
}

changeColor.apply();         //one (默认传参)
changeColor.apply(window);   //one
changeColor.apply(document); //two
changeColor.apply(this);     //one
changeColor.apply(s1);       //three

function Pet(words){
 this.words = words;
 this.speak = function () {
     console.log( this.words)
 }
}
function Dog(words){
 //Pet.call(this, words); //结果： Wang
Pet.apply(this, arguments); //结果： Wang
}
var dog = new Dog('Wang');
dog.speak();
