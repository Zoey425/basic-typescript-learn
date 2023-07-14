// Boolean
let boolean: boolean;
let falseBoolean: boolean = false;
// type error => let falseBoolean: boolean = 'false';

/////////////////////////////////////////////////
//Number
let number: number;
let integer: number = 6;
let float: number = 1.2345;

/////////////////////////////////////////////////
//String
let string: string;
let firstName: string = 'Young';

/////////////////////////////////////////////////
//Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<String> = ['John', 'Kim'];

//여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

//여러 타입을 단언하기 어려울 때, any
let someArray: any[] = ['John', 1, [], {}, false];

/////////////////////////////////////////////////
// Interface, Type

// 읽기 전용 배열 생성(readonly, readonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

/////////////////////////////////////////////////
// error
// stringArray.push('C');
// numberArray[0] = 3;

/////////////////////////////////////////////////
//Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a'];

let users: [number, string][];
users = [
    [1, 'John'],
    [2, 'Moon'],
];

let tuple2: [string, number];
tuple2 = ['a', 2];
tuple2.push(2);
// tuple2.push(false);
// tuple은 push 매소드로 값을 넣는것은 허용.
// 하지만 타입에 맞는 값만 가능

/////////////////////////////////////////////////
// any
let any: any = 'abc';
any = 1;
any = [];

/////////////////////////////////////////////////
// unknown
let unknown: unknown = false;
//let string1: string = unknown;
// ^^ Type 'unknown' is not assignable to type 'string'.
//let string1: boolean = unknown;
// ^^ Type 'unknown' is not assignable to type 'boolean'.ts(2322)

/////////////////////////////////////////////////
//Object
let obj: object = {};
let arr: object = [];
// let null: object = null;
let date: object = new Date();

const obj1: { id: number; title: string; description: string } = {
    id: 1,
    title: 'title1',
    description: 'description1',
};

/////////////////////////////////////////////////
//Union
let union: string | number;
union = 'hi';
union = 123;
// union = [];

/////////////////////////////////////////////////
// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
    return x * y;
};

//return이 없을 때 void 타입 사용
let func2: () => void;
func2 = function () {
    console.log('hi');
};

//Null, Undefined
//tsconfig의 값이 strictNullChecks = false하면 오류 없음
// let number1: number = undefined;
// let string9: string = null;
// let object: { a: 10; b: false } = undefined;
// let array: any[] = null;
// let undefined: undefined = null;
// let null1: null = undefined;
// let void1: void = null;

//void는 undefined 할당 가능
let void2: void = undefined;

/////////////////////////////////////////////////
//Void : 함수의 리턴이 없을 때 사용
function greeting(): void {
    console.log('hi');
}

// 나오는 값이 undefined라고 해도 type은 void로 설정해야한다.
const hi: void = greeting();
console.log(hi); // undefined

/////////////////////////////////////////////////
// never
function throwError(): never {
    throw new Error('error');
}

function keepProcessing(): never {
    while (true) {
        console.log('hi');
    }
}

const never: never[] = [];
// never.push(1);
// ^ Argument of type 'number' is not assignable to parameter of type 'never'.ts(2345)
