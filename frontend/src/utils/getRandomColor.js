export default function getRandomColor(array) {
  const randomNumber = Math.floor(Math.random() * array.length);

  const randomColor = array[randomNumber];

  return randomColor;
}
