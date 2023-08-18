type User1 = {
  id: string;
  name: string;
};

interface User2 {
  id: string;
  name: string;
}

const s: User1 = {
  id: "1",
  name: "s",
};

const s2: User2 = {
  id: "2",
  name: "s2",
};

// 인터페이스와 타입의 차이는 미리보기할 때 차이가 난다.
// 타입은 타입 정보가 미리보기에 보이지만 인터페이스는 보이지 않는다.
// 변수에 연결된 타입이 구체적으로 어떤 모양인지 파악할 때는 타입 별칭이 좋다.

interface A {
  name: string;
}

interface BigA extends A {
  age: number;
}

type B = {
  name: string;
};

type BigB = B & { age: number };

// 확장형태로 가는건 인터페이스가 좋다.

//
const a: Developer = {
  name: "s",
  skills: ["s"],
  age: 1,
};
// 위에 인터페이스는 왜 그냥 불러와 지는가?

// 21년 이전의 타입스크립트 공식문서에서는 좋은 소프트웨어는 확장이 용이해야한다는 관점아래
// 타입 별칭보다 인터페이스의 사용을 권장했지만
// 23년 현재의 공식 문서에서는 이 내용이 없고,
// 일단 인터페이스를 주로 사용해보고 타입 별칭이 필요할 때 타입 별칭을 쓰라고 안내한다.
// 해외 개발 블로그나 커뮤니티에서는 인터페이스와 타입 별칭은 개인 선호에 따라 사용하라고 나와 있기도 하다.
