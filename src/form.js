import React, {Component} from 'react';

class NameForm extends Component{
  constructor(){
    super();
    this.state= {value:''};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    alert('welcome': +this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input value="submit" type="submit"/>
      </form>
    );
  }
}

export default NameForm;
