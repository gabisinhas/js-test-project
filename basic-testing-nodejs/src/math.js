export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

export function options(permission){
  let options1 = [1,2,4]
  let options2 = [3,4,5]

  // refatorar os acessos (condicoes
  if(permission === 'W'||permission === 'R'){
    return options1;
  }else if(permission === 'S'){
    return options2;
  }else{
      console.log('Permission not found');
  }
};

exports = {add, options};
