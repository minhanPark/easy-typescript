interface Person4 {
  name: string;
  age: number;
}

let joo = {} as Person4;
joo.name = "joo";

// 타입 단언은 중첩해서 사용할 수 있다.
// 타입 단언보다 타입 추론을 사용하는 것이 좋다
const num = 10 as any as number;

// 중요한건 타입의 교집합 즉 타입이 호환 될 때만 단언을 사용할 수 있다.
// 그래서 밑에 코드는 경고가 나옴
//const str = "ab" as number;
