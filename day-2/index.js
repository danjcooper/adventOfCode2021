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
let aim = 0;

console.log(data);
data.forEach((item) => {
  if (item.includes('down')) {
    aim += parseInt(item[1]);
  } else if (item.includes('up')) {
    aim -= parseInt(item[1]);
  } else {
    forward += parseInt(item[1]);
    depth += aim * parseInt(item[1]);
  }
});

console.log(
  `Depth: ${depth}\nForward: ${forward}\nCombined: ${depth * forward}`
);
