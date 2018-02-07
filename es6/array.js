var arr=[1,2,3,4,5,6]
arr.every((x)=>{return x>=3}) //false

arr.every((x)=>{return x>0})
// true

arr.some((x)=>{return x>3})
// true

arr.some((x)=>{return x>6})
// false


arr.map((x)=>{return x>6})
// [false, false, false, false, false, false]
arr.map((x)=>{return x>3})
// (6) [false, false, false, true, true, true]

arr.filter((x)=>{return x>3})
// (3) [4, 5, 6]

arr.reduce((x,y)=>{return x+y})
// 21

arr.reduce((x,y)=>{return x+','+y})
// "1,2,3,4,5,6"

arr.reduceRight((x,y)=>{return x+','+y})
// "6,5,4,3,2,1"

Array.of(1,2,3)
// (3) [1, 2, 3]

Array.from(arr)
// (6) [1, 2, 3, 4, 5, 6]

arr.find(x=>{return x==3})
// 3

arr.findIndex(x=>{return x==3})
// 2

arr.fill(10)
// (6) [10, 10, 10, 10, 10, 10]

arr.copyWithin(1,5)
// (6) [1, 6, 3, 4, 5, 6]