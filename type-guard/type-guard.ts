interface Person5 {
  name: string;
  age: number;
}

interface Developer5 {
  name: string;
  skill: string;
}

// Person과 Developer 타입의 값을 받아 Person 타입의 속성이 있는지 확인한 후
// 속성이 있다면 Person타입으로 간주하라.
function isPerson(someone: Person5 | Developer5): someone is Person {
  return (someone as Person5).age !== undefined;
}

function greet(someone: Person5 | Developer5) {
  if (isPerson(someone)) {
    console.log(someone.age);
  } else {
    console.log(someone.skill);
  }
}
