function LesDeuxPlusGrandesValeursDuTableau(numbers) {
  let lepluslarge1 = numbers[0];
  let lepluslarge2 = numbers[1];

  if (lepluslarge2 > lepluslarge1) {
    [lepluslarge1, lepluslarge2] = [lepluslarge2, lepluslarge1];
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber > lepluslarge1) {
      lepluslarge2 = lepluslarge1;
      lepluslarge1 = currentNumber;
    } else if (currentNumber > lepluslarge2) {
      lepluslarge2 = currentNumber;
    }
  }

  return [lepluslarge1, lepluslarge2];
}

const numbers = [10, 100, 500, 3, 8, 230];
console.log(LesDeuxPlusGrandesValeursDuTableau(numbers));
