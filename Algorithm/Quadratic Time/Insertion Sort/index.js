// Insertion Sort O(N^2)
// 삽입 정렬은 정렬되지 않은 배열의 좌측의 시작점을 토대로 start + 1을 타겟으로 잡아 좌측 근접값과 비교하며 이동시켜 정렬한다.

// 핵심은 정렬의 기준이 되는 temp가 삽입 되는 시점이다.
// 1. 좌측값 > temp : 좌측값을 우측으로 이동시킨다.
// 2. idx가 0에 도달했을 때 : temp를 idx = 0에 삽입한다. - temp가 탐색 영역에서 가장 작은 값
// 3. 좌측값 < temp : temp를 해당 자리에 삽입한다.

// 이때, 삽입 지점은 insertionIdx + 1이라는 점을 잊지 말자.
function Insertion_Sort(array) {
  // i는 대상 값의 idx로 정렬의 기준이 된다.
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    // 비교 대상의 idx
    let insertionIdx = i - 1;

    // idx가 0이 될 경우, 범위 내에서 대상값이 가장 작다는 걸 의미한다.
    while (insertionIdx >= 0) {
      // 좌측값과 비교하여 우측으로 이동시킨다.
      if (array[insertionIdx] > temp) {
        array[insertionIdx + 1] = array[insertionIdx];
        insertionIdx--;
      } else break;
    }

    // 루프가 종료될 경우 해당 지점에 삽입한다.
    // 1) 대상 값보다 작은 값을 만난 경우
    // 2) idx = 0으로 루프가 종료된 경우
    array[insertionIdx + 1] = temp;
  }

  return array;
}

console.log(Insertion_Sort([5, 4, 3, 2, 1]));
