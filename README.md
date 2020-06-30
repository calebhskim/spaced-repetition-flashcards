# Spaced Repetition Flashcards
[Spaced Repetition on Wikipedia](https://en.wikipedia.org/wiki/Spaced_repetition)

If you're curious on how to run/use this repo checkout [Create React App](https://github.com/facebook/create-react-app).

## Question and Timing Configuration
If you want to either modify the questions edit `./src/constants/questions.js`. A sample question looks something like:   
```
  {
    id: 5, // Unique identifier
    category: 'Division', // Type of question
    questionText: 'What is 9 / 3?',
    answerKey: 'd', // Correct multiple choice answer
    options: { // Multiple choice options
      a: 6,
      b: 12,
      c: 18,
      d: 3,
      e: 'Not possible',
    },
    timer: 10, // Length of time allowed for this question
    difficulty: 2, // Difficulty rating
  },
```
If you want to modify the overall time allowed for the entire quiz session modify `./src/constants/initialState.js` -> `mainTimer`.
