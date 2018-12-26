import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      parents: [],
    }
  }
 
  componentDidMount() {
    fetch('http://localhost:3001/api/parents')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ parents: data })
          return data;
        })
        .catch(error => console.log(error));
  }


  render() {
    const { parents } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Just a POC
          </p>
          <ul>
            {parents.map(parent =>
                <li key={parent.id}>
                  <span>{parent.name}</span>
                </li>
            )}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
