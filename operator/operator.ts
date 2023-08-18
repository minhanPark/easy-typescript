interface Person1 {
  name: string;
  age: number;
}

interface Developer1 {
  name: string;
  skill: string;
}

function introduce(someone: Person1 | Developer1) {
  // 여기서 age와 skill은 접근할 수 없다 | 일때는 공통속성에 접근할 수 있다.
  console.log(someone);
  if ("age" in someone) {
    console.log(someone.age);
    return;
  }
  if ("skill" in someone) {
    console.log(someone.skill);
    return;
  }
}

interface Avenger {
  name: string;
}

interface Hero {
  skill: string;
}

function introduceHero(someone: Avenger & Hero) {
  console.log(someone.name);
  console.log(someone.skill);
}
// 인터섹션으로 되어 있다면 둘다 만족시켜야 한다.
// introduceHero({name: 'Tony'});
