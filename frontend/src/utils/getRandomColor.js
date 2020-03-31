import { darken } from 'polished';

export default function getRandomColor(array) {
  const randomNumber = Math.floor(Math.random() * array.length);

  const bgColor = array[randomNumber];

  const avatarColors = {
    bgColor,
    fontColor: darken(0.2, bgColor),
  };

  return avatarColors;
}
