import React from 'react';
import ReactDOM from 'react-dom';
// import Comment, {comment} from './TestFunComp';
import Clock from './clock';
import './index.css';


ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);
/*
ReactDOM.render(
  <Comment date={comment.date}
  author={comment.author} />,
  document.getElementById('root')
);
*/
