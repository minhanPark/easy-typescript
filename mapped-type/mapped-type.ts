// 맵드 타입은 이미 정의된 타입을 가지고 새로운 타입을 생성할 때  사용

interface Hero6 {
  name: string;
  skill: string;
}

type HeroPropCheck = {
  [K in keyof Hero6]: boolean;
};

// 매핑 수정자는 맵드 타입으로 변환할 때 속성 성질을 변환할 수 있도록 도와주는 문법
// readonly, ?(선택속성), -, + 등이 있음

type HeroOptional = {
  [H in keyof Hero6]?: string;
};

type HeroRequired = {
  [H in keyof HeroOptional]-?: string;
};

type MyPartial<T> = {
  [Property in keyof T]?: T[Property];
};

type TodoPa = Partial<Hero6>;
