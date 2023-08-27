"use strict";
// 기본적으로 이넘은 숫자 0으로 시작하는 값을 가지게 된다.
var Color;
(function (Color) {
    Color[Color["a"] = 0] = "a";
    Color[Color["b"] = 1] = "b";
    Color[Color["c"] = 2] = "c";
})(Color || (Color = {}));
//문자열 이넘은 문자열로 생성된다.
var Color2;
(function (Color2) {
    Color2["a"] = "a";
    Color2["b"] = "b";
})(Color2 || (Color2 = {}));
