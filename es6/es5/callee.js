function factorial(num) {
 if (num <= 1) {
  return 1;
 } else {
  return num * factorial(num - 1)
 }
}
// 定义阶乘函数一般都要用到递归算法；如上面的代码所示，在函数有名字，而且名字以后也不会变 的情况下，
// 这样定义没有问题。但问题是这个函数的执行与函数名 
// factorial 紧紧耦合在了一起。为 了消除这种紧密耦合的现象，可以像下面这样使用 arguments.callee
function factorial(num) {
 if (num <= 1) {
  return 1;
 } else {
  return num * arguments.callee(num - 1);
 }
}
var trueFactorial = factorial;
alert(trueFactorial(5)); //120    


factorial = function () {
 return 0;
}
alert(trueFactorial(5)); // 120 如果没有使用arguments.callee，将返回0


function aa(){
  console.log(aa.caller)  //等于arguments.callee.caller
}

function bb(){
 aa()
}

bb()  
/**
 * function bb(){
   aa()
   }
 * 
 */