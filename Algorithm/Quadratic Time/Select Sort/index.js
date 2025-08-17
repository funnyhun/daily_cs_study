// Select Sort - O(N^2)
// 배열에서 가장 작은 수를 찾은 뒤, 배열의 시작으로 이동시킨다.
// 각 정렬 단계의 시작 인덱스는 정렬된 요소의 수만큼 증가한다.
function Select_Sort(data) {
  // 정렬되지 않은 요소를 순회 (N - 1)
  for (let i = 0; i < data.length - 1; i++) {
    let minIdx = i;

    // 시작점을 기준으로 우측으로 순회하며 최소값이 존재하는 index 탐색
    // 이때, 좌측으로 요소가 정렬되므로 j = i + 1
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIdx]) minIdx = j;
    }

    // 찾은 가장 작은 값과 탐색의 시작점을 교환
    if (i !== minIdx) [data[i], data[minIdx]] = [data[minIdx], data[i]];
  }
  return data;
}

console.log(Select_Sort([5, 4, 3, 2, 1]));
