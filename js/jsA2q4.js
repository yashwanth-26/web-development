function isEven(num) { return(num%2 == 0); }
function find(a,fun){
	var b= a.shift();
	if(fun(b))
		{return b;}
	if(a.length===0){return "not found";}
	else {return find(a,fun);}
	
}
console.log(find([1, 3, 9, 2, 7],isEven));