function trouveMoiCeDuplicate(array) {
  return array.some(function(item, index) {
    return array.slice(index + 1).includes(item);
  });
}


const array = [717, 1, 10, 716, 717];
console.log(trouveMoiCeDuplicate(array));