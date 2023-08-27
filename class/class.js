"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _waterAmount;
class Chatgpt {
    constructor(name) {
        this.name = name;
    }
    sum(a, b) {
        return a + b;
    }
}
class WaterPurifier {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
    }
    wash() {
        if (this.waterAmount > 0) {
            console.log("정수기 동작 성공");
        }
    }
}
class JsWaterPurifier {
    constructor(waterAmount) {
        // 타입스크립트는 실행시점까지는 막지 못한다.
        // 실행시점에서 막으려면 자바스크립트의 프라이빗 문법을 사용해야한다.
        _waterAmount.set(this, void 0);
        __classPrivateFieldSet(this, _waterAmount, waterAmount);
    }
    wash() {
        if (__classPrivateFieldGet(this, _waterAmount) > 0) {
            console.log("정수기 동작 성공");
        }
    }
}
_waterAmount = new WeakMap();
