// 기본적으로 T에는 무슨 값이 올지 모르기 때문에 length를 사용할 수 없다고 뜬다.
// 함수에 문자열을 넘겼으니 당연히 이 문자열을 받아서 처리하는 함수 내부에서도 문자열로 취급되겠지라고 생각하는건
// 타입스크립트 컴파일러가 아닌 개발자의 관점
// function printTextLength<T>(text: T) {
//   console.log(text.length);
// }

// 아래처럼 처리해줘야 타입스크립트의 도움을 받을 수 있다.
function printTextLength<T extends { length: number }>(text: T) {
  console.log(text.length);
}
printTextLength("hi");
