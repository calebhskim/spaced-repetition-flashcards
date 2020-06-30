import actions from '../constants/actions';

const { NEXT_QUESTION } = actions;

const nextQuestion = (questionId, isCorrect, question, difficulty) => ({
  type: NEXT_QUESTION,
  payload: {
    questionId,
    isCorrect,
    question,
    difficulty,
  },
});

export default nextQuestion;
