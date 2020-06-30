import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react'

import Card from './Card';

import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: setInterval(() => {
        const { interval, timer } = this.state;
        if (timer >= props.mainTimer) {
          clearInterval(interval);
        }
        else {
          this.setState({
            timer: timer + 1,
          });
        }
      }, 1000),
      timer: 0,
    };
  }

  render() {
    let { answered, currentIndex, mainTimer, questions } = this.props;
    let { timer } = this.state;

    let shouldStop = false;
    let question = {};

    // Allow user to see all questions at least once
    if (Object.keys(answered).length < questions.length) {
      question = questions[currentIndex] || {};
    }
    else {
      // Once user has seen all questions sort by score and show worse performing questions first.
      // Also this update pattern works because questions isn't being modified.
      if (currentIndex % questions.length === 0) {
        questions.sort((aItem, bItem) => {
          const a = answered[aItem.id];
          const b = answered[bItem.id];

          let ascore = a.answeredCorrectly / a.attempts / a.difficulty;
          let bscore = b.answeredCorrectly / b.attempts / b.difficulty;
          
          if (ascore < bscore) {
            return -1;
          }
          else if (ascore > bscore) {
            return 1;
          }
          else {
            return 0;
          }
        });
      }

      question = questions[currentIndex % questions.length];
    }

    // set end-state if timer is up
    if (mainTimer === timer) {
      shouldStop = true;
      question = {};
    }

    return (
      <div className='quiz'>
        <Header as='h3' className='main-timer' style={{color: 'white'}}>Total Time: {mainTimer - timer}</Header>
        <Card
          shouldStop={shouldStop}
          question={question}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  quiz: {
    currentSession: { answered, currentIndex },
    questions,
    mainTimer,
  }
}) => ({
  answered,
  currentIndex,
  questions,
  mainTimer,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
