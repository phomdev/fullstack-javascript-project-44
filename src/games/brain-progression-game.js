import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const createProgression = (firstNum, commonDiff, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + (commonDiff * i));
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const firstNum = getRandomInRange(1, 100);
  const commonDiff = getRandomInRange(1, 10);
  const progression = createProgression(firstNum, commonDiff, progressionLength);
  const hiddenNumIndex = getRandomInRange(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenNumIndex]);
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runEngine(gameRules, generateRound);
};
