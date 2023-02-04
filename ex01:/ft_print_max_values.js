function LesDeuxPlusGrandesValeursDuTableau(numbers) {
  let largest1 = numbers[0];
  let largest2 = numbers[1];

  if (largest2 > largest1) {
    [largest1, largest2] = [largest2, largest1];
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber > largest1) {
      largest2 = largest1;
      largest1 = currentNumber;
    } else if (currentNumber > largest2) {
      largest2 = currentNumber;
    }
  }

  return [largest1, largest2];
}

const numbers = [10, 100, 500, 3, 8, 230];
console.log(LesDeuxPlusGrandesValeursDuTableau(numbers));