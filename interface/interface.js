"use strict";
const ironman = {
    name: "토니",
    age: 30,
    skills: ["React", "Javascript", "TypeScript"],
};
const languages = ["typescript", "javascript"];
const salary = {
    junior: 1000,
    mid: 2000,
};
// 인덱스 시그니처는 정확히 속성의 이름을 명시하지 않고 속성 이름의 타입과 속성 값의 타입을 정의하는 문법이다.
// 객체의 속성이 정해져 있는 경우엔 명시해서 사용하고, 속성 이름이 무언가 추가 될지는 모르지만 타입과 값의 타입을 아는 경우에 인덱스 시그니처를 활용할 수 있다.
