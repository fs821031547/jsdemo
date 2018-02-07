let numbers= [1,2,3,4,5]

let ites=numbers[Symbol.iterator]()
let res=ites.next()
//{value: 1, done: false}
ites.next()
// {value: 2, done: false}

ites.next()
// {value: 3, done: false}
ites.next()
// {value: 4, done: false}
ites.next()
// {value: 5, done: false}
ites.next()
// {value: undefined, done: true}