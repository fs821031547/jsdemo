
//1 1 2 3 5 8 13

const fibonacci=(function(){
 var a=[0,1],start=0
   // if(n<=1){
  //  return a[1]
  // }
 var fnfi=function(n){
  start= a.length
  if(n-start>=0){
   for(let i=start;i<=n;i++){
     a[i]=a[i-1]+a[i-2]
   }
  }
  return a[n]
 }
 return fnfi;
})()