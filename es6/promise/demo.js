let status=1;
let promise=new Promise(function(resolve,reject){
  if(status===1){
   resolve('fulilled')
  }else{
   reject('rejected')
  }
})

promise.then((resolve)=>{
 console.log('success1:',resolve)
},(reject)=>{
 console.log('fail1:',reject);
}).then((resolve)=>{
 console.log('success2:',resolve)
},(reject)=>{
 console.log('fail2:',reject);
})

let promise1=new Promise(function(resolve,reject){
  setTimeout(()=>{
   console.log('A');
   resolve()
  },3000)
})
promise1.then(()=>{
 return new Promise(function(resolve,reject){
  setTimeout(()=>{
   console.log('B');
   resolve()
  },2000)
})
}).then(()=>{
   return new Promise(function(resolve,reject){
    setTimeout(()=>{
     console.log('C');
     resolve()
    },1000)
  })
}).then(()=>{
 return new Promise(function(resolve,reject){
   console.log('D');
 })
})

//A  3
//B  2
//C  1
//D 

let promise2=new Promise(function(resolve,reject){
 setTimeout(()=>{
  console.log('A');
  resolve()
 },3000)
})
promise2.then(()=>{
return new Promise(function(resolve,reject){
 setTimeout(()=>{
  console.log('B');
  // resolve()
 },2000)
})
}).then(()=>{
  return new Promise(function(resolve,reject){
   setTimeout(()=>{
    console.log('C');
    resolve()
   },1000)
 })
}).then(()=>{
return new Promise(function(resolve,reject){
  console.log('D');
})
})

//A  3
//B  2
