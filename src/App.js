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




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and do things
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
