//first

const TriangleStars = function(a) {
	const b=function(c){
		if (c===0){
			return "";
		}
		console.log (f2(a-c) + f1(2*c-1))
		return b(c-1)
	}
	return b(a);
}

const f1 = function(stars) {
	if( stars===0) {
		return "";
	}
	return "*" + f1(stars-1);
	}
const f2=function(space){
	if (space===0){
		return "";
	}
	return f2(space-1) + " ";
}

console.log (TriangleStars(5));

//second

const pow=function(b,n) {
	if (n===1) {
		return b;
	}
	return b*pow(b, n-1);
}
console.log( pow(2,10) );

//third
