const hex = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const colorDetail = document.querySelector('.color-detail');

btn.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[RandomColor()];
  }
  color.style.backgroundColor = hexColor;
  colorDetail.innerHTML = hexColor;
});

const RandomColor = () => {
  return Math.floor(Math.random() * hex.length);
};
