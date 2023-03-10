function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
import {generateDescription, PHOTOS_COUNT} from './data';
import {isCorrectLength} from './util';

const descriptions = Array.from({length: PHOTOS_COUNT}, generateDescription);

isCorrectLength(descriptions, PHOTOS_COUNT); // Чтобы eslint не ругался
