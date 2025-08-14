// Bubble Sort - O(N^2)
// 이때, 버블과 근접한 값의 비교를 통해 정렬된 우측 값이 다음 회차의 동작에서 제외되야 하는 부분이 중요하다.
function Bubble_Sort(data) {
  // 요소의 수만큼 버블 정렬 실행 (마지막 요소는 자동 정렬이므로, length - 1)
  for (let i = 0; i < data.length - 1; i++) {
    // 각 요소를 버블 정렬하는 동안 비교 & 스왑 연산 실행 (i가 증가할수록 우측의 요소는 정렬되므로 length - 1 - i)
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) [data[j], data[j + 1]] = [data[j + 1], data[j]];
    }
  }
  return data;
}

console.log(Bubble_Sort([5, 4, 3, 2, 1]));
