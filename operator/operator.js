"use strict";
function introduce(someone) {
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
function introduceHero(someone) {
    console.log(someone.name);
    console.log(someone.skill);
}
// 인터섹션으로 되어 있다면 둘다 만족시켜야 한다.
// introduceHero({name: 'Tony'});
