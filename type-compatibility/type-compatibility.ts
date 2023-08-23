type Captain = {
  name: string;
};

interface AntMan {
  name: string;
}

let a1: Captain = {
  name: "Steve",
};

let b: AntMan = {
  name: "앤트맨",
};
//타입스크립트는 구조적 타이핑이다. 속성이 똑같으면 호환이 된다.
b = a1;

//이처럼 객체 타입은 인터페이스, 타입 별칭 등 타입 유형이 아니라 최소한의 타입 조건을 만족했는지에 따라 호환여부가 판단된다.

let add = function (a: number, b: number) {
  return a + b;
};

let sumAll = function (a: number, b: number) {
  return a + b;
};

// 함수타입도 구조적 타이핑 관점에서 구조가 유사하면 호환
add = sumAll;

let getNumber = function (num: number) {
  return num;
};

// 기존 함수 코드의 동작을 보장해 줄 수 있으면 호환됨
sumAll = getNumber;

enum L {
  C,
  Java,
  Typescript,
}

enum P {
  C,
  Java,
  Typescript,
}

let langC: L.C;
// 이넘 타입은 같은 속성과 값을 가졌더라고 이넘 타입간에는 호환되지 않는다.
//langC = P.C;
