// 타입오류
////////////////////////////////

//타입단원
const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = 'Hello';

//타입단원은 잘 사용해야함.
//아래의 예는 타입단원을 잘못 사용한 예 이다.
// function func(arg: string | null) {
//     return (arg as string).toLowerCase();
// }

// string으로 타입을 지정했는데 null값이 들어가서 오류 발생
// 이때, type guard로 사용해주면된다.
function func(arg: string | null) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func('hello');
func(null);

//!not null 타입 단언
// ! => undefined와 null이 절대 아니라고 타입스크립트에 말해준다.
const bodyElement1 = document.querySelector('body');
bodyElement1!.innerText = 'Hello';

//type guard
//bodyElement2가 있을 때만 innerText를 넣어줄 수 있게
const bodyElement2 = document.querySelector('body');
if (bodyElement2) {
    bodyElement2.innerText = 'Hello';
}
