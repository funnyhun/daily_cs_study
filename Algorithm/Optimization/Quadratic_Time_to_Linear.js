// 어떤 단일 요소를 탐색하는데 Brute-force를 사용한 경우, N^2에서 N으로 최적화할 수 있다.

// 주어진 데이터에 중복된 요소가 있는지 찾는 함수
// 배열의 좌측을 기준으로 두개의 포인터(인덱스)를 우측으로 밀면서 모든 경우를 탐색
function example(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] === data[j]) return true;
    }
  }
  return false;
}

// 이때, 외부 스코프에 확인한 요소를 기록하는 방식으로 O(N^2)에서 O(N)으로 최적화할 수 있다.

// 데이터의 범위가 1 ~ 1000일 때 -> 이는 입력값 N이 아닌 입력의 조건인 데이터의 범위를 의미한다.
function optimized(data) {
  const existingData = new Array(1000).fill(0);
  for (let n of data) {
    if (existingData[n] === 1) return true;
    existingData[n] = 1;
  }
  return false;
}

// 하지만 위 최적화는 입력과 독립적인 문제의 요구조건인 데이터의 범위를 크기로 갖는 배열이 필요하다.
// 이때, Set을 사용하면 O(N)의 공간복잡도로 최적화할 수 있다.
function optimized2(data) {
  const existingData = new Set();
  for (let n of data) {
    if (existingData.has(n)) return true;
    existingData.add(n);
  }
  return false;
}

// 데이터의 범위가 큰 경우, 공간복잡도가 효율적인 Set이 유리하다.
// 데이터의 범위가 좁고 연속된 경우, 안정성이 좋은 배열이 유리하다.
