// const curry = (fn, arity = fn.length, ...args) =>
//   arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

//  var curry = function (fn, arity = fn.length, ...args) {
//     console.log(args);
//     return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
//   }

//   console.log(curry(Math.pow)(2));
  var arity = 6;
  var fn = Math.pow;

  var currys =function(x=1,y=2,...args){
    console.log(args);
    return arity <= args.length ? fn(...args) : currys.bind(null, fn, arity, ...args);
  }
  var a=currys(1)(2)(3)(4)(5)
  console.log(a);