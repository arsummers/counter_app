import React from 'react';
import logo from './logo.svg';
import './App.css';


class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    };
  }


// I would like to make this section more dry by making just 1 handle click event, and have it know which button I click. Not sure how to implement that in react yet (and there are other things I need to work on), so this works for now.

handeClickIncrement = e =>{
  e.preventDefault()
  let count = this.state.count
  count += 1
  this.setState({ count });
}

handeClickDecrement = e =>{
  e.preventDefault()
  let count = this.state.count
  count -= 1
  this.setState({ count });
}


  render(){
    return(
     <div>
       <p>
         {this.state.count}
       </p>
       <button onClick ={this.handeClickIncrement}> + </button>
       <button onClick ={this.handeClickDecrement}> - </button>
     </div>
    )
  }

}


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    )
  }
}

export default App;
