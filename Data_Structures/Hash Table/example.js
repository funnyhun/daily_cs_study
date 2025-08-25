// 해시 테이블을 활용한 코드

// if, switch 등의 분기를 hash로 대체하는 경우
function origin_if(arg) {
  if (arg === a) return 1;
  else if (arg === b) return 2;
  else if (arg === c) return 3;
}

// 이는 조건문의 순차 비교를 hash의 key를 통한 직접 접근으로 대체한다.
function if_to_hash(arg) {
  const hash = {
    a: 1,
    b: 2,
    c: 3,
  };

  return hash[arg];
}
