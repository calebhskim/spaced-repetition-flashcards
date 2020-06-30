import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Checkbox, Form, Icon, Progress } from 'semantic-ui-react';

import nextQuestion from '../actions/nextQuestion';

import './Card.css';

const answerState = {
  UNANSWERED: 0,
  CORRECT: 1,
  WRONG: 2,
};

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckboxSelection = this.handleCheckboxSelection.bind(this);
    this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.startNewTimer = this.startNewTimer.bind(this);
    this.state = {
      selectedKey: 'a',
      cardState: answerState.UNANSWERED,
      currentInterval: 0, // no timer set
      currentTime: 0,
    };
  }

  componentDidMount() {
    this.startNewTimer();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.shouldStop) {
      clearInterval(state.currentInterval);
    }

    return state;
  }

  handleCheckboxSelection(key) {
    this.setState({
      selectedKey: key,
    });
  }

  handleCheckAnswer() {
    const { selectedKey } = this.state;
    const { question } = this.props;

    this.setState({
      cardState: selectedKey === question.answerKey ? answerState.CORRECT : answerState.WRONG,
    });
  }

  handleNextQuestion() {
    const { selectedKey, currentInterval } = this.state;
    const { question, shouldStop } = this.props;

    if (!shouldStop) {
      this.props.nextQuestion(question.id, selectedKey === question.answerKey, question.questionText, question.difficulty);
      this.setState({
        selectedKey: 'a',
        cardState: answerState.UNANSWERED,
        currentTime: 0,
      });
      clearInterval(currentInterval);
      this.startNewTimer();
    }
  }

  startNewTimer() {
    this.setState({
      currentTime: 0,
      currentInterval: setInterval(() => {
        const { currentInterval, currentTime } = this.state;
        const { question: { timer }, shouldStop } = this.props;
        const timerInMs = timer * 1000;

        if (timerInMs === currentTime || shouldStop) {
          clearInterval(currentInterval);
          this.handleNextQuestion();
        }
        else {
          this.setState({
            currentTime: currentTime + 100,
          });
        }
      }, 100), // every 100ms for 'smoothness'
    });
  }

  render() {
    const { cardState, currentTime } = this.state;
    const { question: { answerKey, questionText, options, timer } } = this.props;

    if (!answerKey) {
      return <Redirect to='/results' />;
    }

    const optionKeys  = Object.keys(options || {});

    optionKeys.sort();

    const optionElements = optionKeys.map((k, i) => {
      let modifier = null;

      if (cardState !== answerState.UNANSWERED) {
        if (k === answerKey) {
          modifier = <Icon className='modifier-check' name='check' />;
        }
        else {
          modifier = <Icon className='modifier-times' name='times' />;
        }
      }

      const label = (
        <label className='label-modifier'>
          {options[k]}
          {modifier || ''}
        </label>
      );

      return (<Form.Field key={i}>
        <Checkbox
          radio
          label={label}
          name='checkboxRadioGroup'
          value={options[k]}
          checked={this.state.selectedKey === k}
          onClick={() => this.handleCheckboxSelection(k)}
        />
      </Form.Field>);
    });

    const answered = cardState !== answerState.UNANSWERED;

    return (
      <div className='card'>
        <Progress className='card-progress' value={currentTime} total={timer * 1000} size='small' />
        <Form className='question-form'>
          <Form.Field>{questionText}</Form.Field>
          {optionElements}
          <Button
            className='answer-check'
            onClick={answered ? this.handleNextQuestion : this.handleCheckAnswer}
          >
            { answered ? 'Next' : 'Check Answer' }
          </Button>
        </Form> 
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  nextQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
