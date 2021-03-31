
let type = function evenOdd(a){
	if(a%2==0){console.log("even");}
	else {console.log("odd");}
}
type(9);

console.log("------------------")

let great = function(...no){
	let max=0;
	for(let i=0; i<no.length;i++){
		if(no[i]>max){ max=no[i];}
	}
	//return max;
	document.getElementById("demo").innerHTML = max;
}
console.log(great(20,60,50));

console.log("------------------");

let padChars= function(b,a){
	let t=""
	while(b){
		t+=a;
		b--;
	}
	return t;
}
console.log(padChars(5,"a"));

console.log("------------------");

let norolltogetsix = function(){
	var co=0;
	while(6!=Math.floor(Math.random() * 6) + 1){
		co++;
		console.log("ma");
	}
	return co;
}
console.log(norolltogetsix());

console.log("------------------");

