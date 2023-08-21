class Chatgpt {
  // 타입스크립트로 클래스를 작성할 때는 생성자 메서드에서 사용될 클래스 속성들을 미리 정의해 주어야 합니다.
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sum(a: number, b: number) {
    return a + b;
  }
}

class WaterPurifier {
  // 접근 제어자는 3가지가 있다.
  // public: 어디서든 접근이 가능하다.
  // private: 클래스 내부에서만 접근이 가능하다.(상속한 애도 접근 불가능)
  // protected: 클래스 내부와 상속한 클래스에서만 접근이 가능하다.
  private waterAmount: number;

  constructor(waterAmount: number) {
    this.waterAmount = waterAmount;
  }

  wash() {
    if (this.waterAmount > 0) {
      console.log("정수기 동작 성공");
    }
  }
}

class JsWaterPurifier {
  // 타입스크립트는 실행시점까지는 막지 못한다.
  // 실행시점에서 막으려면 자바스크립트의 프라이빗 문법을 사용해야한다.
  #waterAmount: number;

  constructor(waterAmount: number) {
    this.#waterAmount = waterAmount;
  }

  wash() {
    if (this.#waterAmount > 0) {
      console.log("정수기 동작 성공");
    }
  }
}
