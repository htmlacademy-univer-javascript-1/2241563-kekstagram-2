import {generateDescription, PHOTOS_COUNT} from './data.js';
import {isCorrectLength} from './util.js';
import {insertDescriptions} from './user.js';

const descriptions = Array.from({length: PHOTOS_COUNT}, generateDescription);
insertDescriptions(descriptions);

isCorrectLength(descriptions, PHOTOS_COUNT); // Чтобы eslint не ругался
