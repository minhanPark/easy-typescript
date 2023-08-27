// tsconfig에 lib을 추가해놓으면 타입스크립트 익스텐션 안에 노드 모듈 안에 lib을 사용해서 타입 정보를 사용할 수 있다.
const d = document.querySelector("#app");

// 타입 선언 파일은 d.ts 확장자를 갖는 타입스크립트 파일을 의미한다.
// 프로젝트에서 자주 사용되는 공통 타입이나 프로젝트 전반에 걸쳐 사용하는 라이브러리 타입을 정의하는 공간

// project.d.ts
interface Product {
  name: string;
  id: number;
}

const shirts: Product = {
  name: "와이셔츠",
  id: 1,
};

let table = new DataTable("#example", {});
