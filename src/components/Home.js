import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header as='h2' style={{color: 'white'}}>Spaced Repetition System</Header>
        <Link to='/quiz'><Button>Start Session</Button></Link>
      </div>
    );
  }
}

export default Home;
