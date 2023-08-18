// 객체타입을 정의할 때  사용하는 문법
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  skills: string[];
}

const ironman: Developer = {
  name: "토니",
  age: 30,
  skills: ["React", "Javascript", "TypeScript"],
};

// 인터페이스를 상속하여 사용할 때는 부모 인터페이스의 타입을 자식 인터페이스에서 모두 보장해주어야 한다.
// Designer 인터페이스가 Person 인터페이스를 잘못 확장합니다.
// age 속성의 형식이 호환되지 않습니다.

// interface Designer extends Person {
//   age: string;
// }

// 만약 인터페이스를 상속할 때 속성을 바꿔야 한다면
interface Designer extends Omit<Person, "age"> {
  age: string;
}

interface StringArray {
  /**
   * 어떤 숫자든 속성의 이름이 될 수 있다.
   */
  [index: number]: string;
}

const languages: StringArray = ["typescript", "javascript"];

interface SalaryMap {
  /**
   * 어떤 문자열이든 속성의 이름이 될 수 있다.
   */
  [level: string]: number;
}

const salary: SalaryMap = {
  junior: 1000,
  mid: 2000,
};

// 인덱스 시그니처는 정확히 속성의 이름을 명시하지 않고 속성 이름의 타입과 속성 값의 타입을 정의하는 문법이다.
// 객체의 속성이 정해져 있는 경우엔 명시해서 사용하고, 속성 이름이 무언가 추가 될지는 모르지만 타입과 값의 타입을 아는 경우에 인덱스 시그니처를 활용할 수 있다.
