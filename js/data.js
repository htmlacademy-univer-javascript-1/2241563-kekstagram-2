import { getRandomInt } from './util.js';

const count_photo = 25;
const names = ['Дима', 'Олежа', 'Дементий', 'Егор', 'Эдик'];
const description = Array.from({ length: count_photo }, (_, i) => `Описание ${i}`);
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENT_IDS = [];

const getRandomLikes = () => getRandomInt(15, 200);

const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const getId = (() => {
  let id = 1;
  return () => id++;
})();

function generateDescription() {
  const comments = Array.from({ length: getRandomInt(0, 3) }, generateComment);
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: description[id - 1],
    likes: getRandomLikes(),
    comments: comments
  };
}

function generateComment() {
  const messageTexts = [];
  for (let i = 0; i < getRandomInt(1, 2); i++) {
    messageTexts.push(getRandomElement(message));
  }
  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: messageTexts.join(' '),
    name: getRandomElement(names
    )
  };
}

function getCommentId() {
  let id = getRandomInt(1, 1000);
  while (COMMENT_IDS.includes(id)) {
    id = getRandomInt(1, 1000);
  }
  return id;
}

export { generateDescription, count_photo };
