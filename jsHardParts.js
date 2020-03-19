const map = (arr, transform) => {
  arr.forEach((element, i) => {
    arr[i] = transform(element, i);
  });
};

const multiplyByTwo = n => n * 2;
const sampleInput = [1, 2, 3, 4];

map(sampleInput, multiplyByTwo);
map(sampleInput, multiplyByTwo);

// not creating a useState mimic
const useState = init => {
  let state = init;
  const setState = newState => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};

const [count, setCount] = useState(0);
console.log(count());
setCount(5);
console.log(count());
