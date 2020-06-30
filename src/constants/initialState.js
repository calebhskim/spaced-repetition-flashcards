import questions from './questions';

export default {
  quiz: {
    currentSession: {
      currentIndex: 0,
      answered: {},
    },
    questions,
    mainTimer: 60,
  },
};
