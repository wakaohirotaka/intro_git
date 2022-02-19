const x = 2; // グローバルスコープ

function f () {
  const x = 1; // ローカルスコープ
  console.log(x); //1 ローカルスコープが呼び出される
}

f();
console.log(x); //2 グローバルスコープが呼び出される