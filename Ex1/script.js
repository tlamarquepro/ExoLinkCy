let inputNbr = document.querySelector("#inputNumber");
let result = document.querySelector(".result");
let button = document.querySelector("#button");

let n;
// console.log(button);

inputNbr.addEventListener("input", (e) => {
  n = parseInt(e.target.value);
//   console.log(n);
});

button.addEventListener("click", (e) => {
  let sumSquares = 0;
  for (let i = 0; i <= n; i++) {
    let array1 = [i * i];
    array1.forEach((number) => {
      sumSquares += number;
      //   console.log(y);
    });
  }
  let squareSum = 0;
  let x = 0;
  for (let i = 0; i <= n; i++) {
    let array2 = [i];
    array2.forEach((number) => {
      x += number;
      squareSum = x * x;
    });
  }
  let z = squareSum - sumSquares;
  result.textContent = z;
});
