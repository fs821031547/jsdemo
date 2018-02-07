const generators=function* (){
	let numbers= [1,2,3,4,5]
	for(let number of numbers){
	yield console.log(number)
}
}

let result=generators()

result.next()
// {value: undefined, done: false}
result.next()
// {value: undefined, done: false}
result.next()
// {value: undefined, done: false}
result.next()
// {value: undefined, done: false}
result.next()
// {value: undefined, done: false}