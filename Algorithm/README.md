# 알고리즘 (Algorithm)

이 디렉토리는 '누구나 자료 구조와 알고리즘' 서적의 알고리즘 파트 학습 내용을 정리하는 공간입니다. <br>
해당 서적은 각 장을 명확하게 분리된 내용으로 구성하기보다, 큰 개념을 이해하기 위해 작은 개념을 순차적으로 학습하도록 계획되어 있습니다. <br>
따라서 이 디렉토리 내의 각 학습 내용은 명확하게 구분되지 않고 일부 개념들이 포함되어 나타날 수 있습니다. <br>

**이 저장소에 작성된 모든 문서는 해당 서적의 내용을 토대로 개인의 생각을 자유롭게 작성한 것입니다.**

---

### 1. 알고리즘이란?

알고리즘은 특정 문제(혹은 요구사항)을 해결하기 위한 명확하고 유한한 일련의 절차이다. <br>
구체적으로, 입력(Input)이 문제 해결을 위한 동작 단계(Step)를 거쳐서 원하는 출력(Out)을 만들어내는 과정을 의미한다. <br>
이전에 자료구조 챕터에서 학습한 배열과 정렬된 배열의 검색 연산을 비교해보자.

* 선형 검색 (Linear Search): 해당 데이터를 찾을 때까지 모든 데이터를 탐색한다 -> O(N) <br>
* 이때, 알고리즘은 입력으로 주어지는 모든 데이터를 순회하는 동작을 갖는다.

* 이진 검색 (Binary Search): 해당 데이터를 찾기 위해 요소의 중간에서부터 좌 혹은 우로 방향을 설정해 요소의 범위를 절반씩 줄인다. -> O(log N) <br>
* 이때, 알고리즘은 값 비교를 통해 요소의 범위를 절반씩 줄이는 동작을 갖는다.

이처럼 동일한 검색 연산임에도 불구하고, 문제 상황(입력, 환경, 언어적 제한)을 토대로 어떤 알고리즘을 사용하냐에 따라 프로그램의 성능에 큰 영향을 끼칠 수 있다. <br>
따라서 프로그램을 구현하는 과정에서 입력 값을 토대로 로직의 효율을 고민하는 과정이 필요하고, 이때 쉽게 적용 가능한 답안지를 알고리즘이라고 생각하면 쉽다.

---