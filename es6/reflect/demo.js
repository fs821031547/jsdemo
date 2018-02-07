
// 　　Reflect.apply其实就是ES5中的 Function.prototype.apply() 替身， 执行Reflect.apply需要三个参数
// 　　第一个参数为： 需要执行的函数；
// 　　第二个参数为： 需要执行函数的上下文this；
// 　　第三个参数为： 是一个数组或者伪数组， 会作为执行函数的参数；
let fn = function() {
 this.attr = [0,1,2,3];
};
let obj = {};
Reflect.apply(fn, obj, [])   // Reflect.apply()  类似Function.prototype.apply
console.log(obj);  
//{attr: Array(4)}attr: (4) [0, 1, 2, 3]




// 访问器中不想使用自己的方法，而是想要重定向this到wrapper
//Reflect
var objs = {
 set foo(value) { return this.bar(); },
 bar: function() {
     alert(1);
 }
};
var wrapper = {
 bar : function() {
     console.log("wrapper");
 }
}
Reflect.set(obj, "foo", "value", wrapper);   //wrapper

//　　Reflect.apply的DEMO：
Reflect.apply(Math.floor, undefined, [1.75]); // 输出：1;
Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]); // 输出："hello"  String.fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串
Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index; //输出： 4
Reflect.apply("".charAt, "ponies", [3]);

// 　　Reflect可以与Proxy联合使用：
{
 var  Fn = function(){
 };
 Fn.prototype.run = function() {
     console.log( "runs out" );
 };
 var ProxyFn  = new Proxy(Fn, {
     construct (target ,arugments) {
         console.log("proxy constructor");
         var obj = new target(...arugments);
         //Reflect.apply的使用方法;
         Reflect.apply(target.prototype.run, obj, arugments);
         return obj;
     }
 });
 new ProxyFn ();  //会先输出: "proxy constructor" ； 再输出： runs out
}


// Reflect.construct其实就是实例化构造函数，通过传参形式的实现， 执行的方式不同， 效果其实一样，
//  construct的第一个参数为构造函数， 第二个参数由参数组成的数组或者伪数组， 基本的使用方法为：
var Fn = function(arg) {
 this.args = [arg]
};
console.log( new Fn(1), Reflect.construct(Fn,[1]) ); // 输出是一样的

var d = Reflect.construct(Date, [1776, 6, 4]);   //等于new Date(1776,6,4)
d instanceof Date; // true
d.getFullYear(); // 1776
//所以Reflect.consturct和new 构

// 　　所以Reflect.consturct和new 构造函数是一样， 至少到目前为止..
// 　　我们可以给Reflect.construct传第三个参数 ， 第三个参数为一个超类， 新元素会继承这个超类；
function someConstructor() {}
var result = Reflect.construct(Array, [], someConstructor);
Reflect.getPrototypeOf(result); // someConstructor.prototype
Array.isArray(result); // true
//or
var Fn = function() {
    this.attr = [1];
};
var Person = function() {
};
Person.prototype.run = function() {
};
console.log( Reflect.construct(Fn, [], Person) );  //Person {attr: Array(1)}

// Reflect.defineProperty返回的是一个布尔值， 
// 通过直接赋值的方式把属性和属性值添加给对象返回的是一整个对象， 如果添加失败会抛错；
var objs = {}; 
if( Reflect.defineProperty(objs, "x", {value : 7 }) ) {
    console.log("added success");
}else{
    console.log("添加失败");
};
//true
//objs {x:7}


// Reflect.get
// 　这个方法的有两个必须的参数： 第一个为obj目标对象， 第二个为属性名对象， 第三个是可选的，是作为读取器的上下文(this);
Reflect.get(objs, "x") //7

var objs = {
 "foo" : 1,
 get bar() {
     return this.foo;
 }
};
var foo = {};
foo.foo = "heheda";
console.log(Reflect.get(obj, "bar", foo));
// heheda

// 　通过Reflect.getOwnPropertyDescritptor获取属性描述：
Reflect.getOwnPropertyDescriptor({x: "hello"}, "x");
//{value: "hello", writable: true, enumerable: true, configurable: true}

// Reflect.getPrototypeOf返回一个对象的原型
Reflect.getPrototypeOf({}); // 输出：Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …

// 　Reflect.has这个方法有点像操作符：in ， 比如这样： xx in obj;
Reflect.has({x:0}, "x") //输出： true；

//　　Reflect.ownKeys， Object可没有ownKeys方法, Reflect.ownKeysz他的作用是返回对象的keys;
console.log(Reflect.ownKeys({"a":0,"b":1,"c":2,"d":3})); //输出 ：["a", "b", "c", "d"]

// 　　Reflect.set方法和get是差不多的；
var objs = {};
Reflect.set(obj, "prop", "value"); // 输出：true
console.log( obj.prop ); // 输出："value"

var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
console.log( arr[2] ); // "goose"

Reflect.set(arr, "length", 1); // true
console.log( arr );// ["duck"];

var objs= {
 value : 10,
 set key( value ) {
     console.log("setter");
     this.value =  value;
 },
 get key() {
     return this.value;
 }
};
Reflect.set(objs,"key","heheda", objs);
console.log(objs);  //{value:heheda}