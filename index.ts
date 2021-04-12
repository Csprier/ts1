const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
/* This is the error gateway you'd write to prevent the input.values from being typeof 'string' and concatenating, instead of having the mathematical operation run on them.
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
*/
  return num1 + num2;
};

button.addEventListener("click", () => {
  /** Using + in front of input.value will make the 'string' into a number, if the string is already in number/integer format; otherwise NaN is returned */
  console.log(add(+input1.value, +input2.value));
});
