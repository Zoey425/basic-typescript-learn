console.log(Symbol('foo') === Symbol("foo"));

const sym = Symbol(); // 고유한 형태의 값
let obj = {
	[sym]: "value"
};

console.log(obj[sym]); // "value"