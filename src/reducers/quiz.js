import initialState from '../constants/initialState';
import actions from '../constants/actions';

const {
  NEXT_QUESTION,
} = actions;

const quiz = (state = initialState.quiz, { payload, response, type }) => {
  switch (type) {
    case NEXT_QUESTION: {
      const { questionId, isCorrect, question, difficulty } = payload;
      const newState = { ...state };
      newState.currentSession.currentIndex += 1;

      if (questionId in newState.currentSession.answered) {
        newState.currentSession.answered[questionId].attempts += 1;
        if (isCorrect) {
          newState.currentSession.answered[questionId].answeredCorrectly += 1;
        }
      }
      else {
        newState.currentSession.answered[questionId] = {
          attempts: 1,
          answeredCorrectly: isCorrect ? 1 : 0,
          question,
          difficulty,
        };
      }

      return newState;
    }
    default:
      return state;
  }
};

export default quiz;
