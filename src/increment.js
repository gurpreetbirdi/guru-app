class Button extends React.Component {
  constructor(){
    super();
    this.state={
      num:1,
    };
  }
  handleClick(){
    this.setState({num: this.state.num+=1,});
  }
    render() {
    return (
      <div>
        <div className="board-row">
          <button onClick={()=>this.handleClick()}>{this.state.num}</button>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Button />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
