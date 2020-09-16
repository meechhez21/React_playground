import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class Gametimer extends React.Component {
  constructor(props){
    super(props)
    this.state = {seconds:0};
}

Countseconds() {
  this.setState(state =>({
    seconds :state.seconds + 1
  }));
}

render() {
  return <span className="lpaddle">Component</span>
}
render(){
  let className = 'left_paddle';
  if (this.props.isActive){
    className += 'lpaddle-active';
  }
  return <span className={left_paddle}>Component</span>
}

 
}

componentDidMount() 

export default App;
