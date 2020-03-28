export default function getRandomColor(array) {
  const randomNumber = Math.floor(Math.random() * array.length);

  const randomColor = array[randomNumber];

  const randomFontColor = randomColor;

  // return randomColor;

  const rdm = {
    randomColor,
    randomFontColor,
  };

  return rdm;
}
