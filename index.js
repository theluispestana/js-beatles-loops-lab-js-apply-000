// add solution here
let theBeatlesPlay = (musicians, instruments) => {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

let johnLennonFacts = facts => {
  let arr = [];
  let i = 0;
  while (i < facts.length) {
    arr.push(`${facts}!!!`);
    i++;
  }
  return arr;
}