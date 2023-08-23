interface Dropdown<T> {
  title: string;
  value: T;
}

let shoppingItem: Dropdown<number> = {
  title: "쇼핑리스트",
  value: 10,
};

interface DetailedDropdown<K> extends Dropdown<K> {
  tag: string;
  description: string;
}

// 1. shppingDetailItem에서 number 타입으로 넘김
// 2. DetailedDropdown에서 k를 Dropdown에 넘김
// 3. Dropdown에서 K를 T로 사용
let shoppingDetailItem: DetailedDropdown<number> = {
  title: "쇼핑리스트",
  tag: "string",
  description: "string",
  value: 10,
};
