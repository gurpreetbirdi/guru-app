import React from 'react';

function formatDate(date){
  //return date.toLocaleDateString();
  // return date.getDay();
  // return date.getDate();
  return date.getFullYear(); //Date.prototype.toLocaleDateString()
}

function Comment(props){
  return(
    <div>
    <div className="User-Pic">
      <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}
      />
    </div>
    <div className="User-Info">
      <h4>{ props.author.name}</h4>
      <p> welcome to React.</p>
    </div>
    <div className="User-Date">
{formatDate(props.date)}
    </div>
    </div>
  );
}

export const comment={
  date:new Date(),
  author:{
    name: 'Gurpreet Singh',
    avatarUrl:'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
  }
};

export default Comment;
