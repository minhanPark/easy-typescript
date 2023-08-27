"use strict";
const s = {
    id: "1",
    name: "s",
};
const s2 = {
    id: "2",
    name: "s2",
};
// 확장형태로 가는건 인터페이스가 좋다.
//
const a = {
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