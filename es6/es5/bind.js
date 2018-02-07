const fun=function(param){
	console.log(this+':'+param)
}

fun.call(this,'aaa')
//  [object Window]:aaa
let funNew =fun.bind('aaaa','zzz')  
funNew()
 // aaaa:zzz   this=aaaa