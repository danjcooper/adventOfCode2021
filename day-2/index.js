const fs = require('fs');

const parseData = () => {
  try {
    const data = fs.readFileSync('./input.txt', 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
};

let data = parseData().split('\n');

console.log(data);

for (let i = 0; i < data.length; i++) {
  data[i] = data[i].split(' ');
}

let depth = 0;
let forward = 0;

console.log(data);
data.forEach((item) => {
  if (item.includes('down')) {
    depth += parseInt(item[1]);
    console.log('going down');
  } else if (item.includes('up')) {
    depth -= parseInt(item[1]);
    console.log('going up');
  } else {
    forward += parseInt(item[1]);
    console.log(forward);
    console.log('going forward');
  }
});

console.log(
  `Depth: ${depth}\nForward: ${forward}\nCombined: ${depth * forward}`
);
