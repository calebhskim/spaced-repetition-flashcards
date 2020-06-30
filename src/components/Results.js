import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
} from 'semantic-ui-react'

import './Results.css';

class Results extends React.Component {
  render() {
    const { answered } = this.props;
    const answerKeys = Object.keys(answered);
    const hasStats = answerKeys.length > 0;

    const totalAttempts = answerKeys.reduce((acc, k) => acc + answered[k].attempts, 0);
    const totalCorrect = answerKeys.reduce((acc, k) => acc + answered[k].answeredCorrectly, 0);
    const totalScore = totalCorrect / totalAttempts;

    return (
      <div className='results'>
        <Header as='h2'>Results</Header>
        {hasStats ?
          <div className='stats'>
            <div className='question-stats'>
              <Header as='h4'>Question Stats</Header>
              {Object.keys(answered).map((k, i) => {
                const { attempts, answeredCorrectly, difficulty, question } = answered[k]; 
                return (
                  <div className='stat-group' key={i}>
                    <div className='stat-title'>{question}</div>
                    <div className='stat'>Attempts: {attempts}</div>
                    <div className='stat'>Correct: {answeredCorrectly}</div>
                    <div className='stat'>Difficulty: {difficulty}</div>
                    <div className='stat'>Score: {answeredCorrectly / attempts}</div>
                  </div>
                );
              })}
            </div>
            <div className='summary'>
              <Header as='h4'>Overall Stats</Header>
              <div className='summary-title'>Total Attempts: {totalAttempts}</div>
              <div className='summary-title'>Total Correct: {totalCorrect}</div>

              <div className='summary-title'>Total Score: {totalScore.toFixed(3)}</div>
            </div>
          </div> :
          <Header as='h4'>Oops it looks like there are no stats!</Header>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { quiz: { currentSession: { answered } } } = state;

  return {
    answered,
  };
};

export default connect(mapStateToProps)(Results);
