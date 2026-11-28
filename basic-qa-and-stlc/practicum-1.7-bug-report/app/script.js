const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", () => {
  const a = Number(firstNumber.value);
  const b = Number(secondNumber.value);
  let answer;

  switch (operator.value) {
    case "+":
      // INTENTIONAL BUG FOR QA PRACTICE:
      // Addition incorrectly adds 1 to the expected sum.
      answer = a + b + 1;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = b === 0 ? "Tidak dapat membagi dengan nol" : a / b;
      break;
    default:
      answer = "Operator tidak dikenal";
  }

  result.textContent = answer;
  console.log("[Calculator QA Practice]", {
    firstNumber: a,
    operator: operator.value,
    secondNumber: b,
    displayedResult: answer
  });

  if (operator.value === "+" && answer !== a + b) {
    console.error("[Known practice defect] Incorrect addition result.", {
      expected: a + b,
      actual: answer
    });
  }
});
