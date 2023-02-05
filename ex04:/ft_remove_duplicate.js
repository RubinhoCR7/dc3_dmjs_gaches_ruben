function supprimeLesDuplicates(array) {
  return Array.from(new Set(array));
}

const array = [717, 1, 10, 716, 717];
console.log(supprimeLesDuplicates(array));