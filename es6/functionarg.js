function say(name='fs'){
  return name
}
//fs

function say(...name){
 console.log(`hello ${name[0]}`);
}

function say(name,names){
 console.log(`hello ${name}, ${names}`);
}


let name=['fang','shi']
say(...name)