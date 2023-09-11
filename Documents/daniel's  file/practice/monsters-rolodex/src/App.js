import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters :[
        {name: 'francis',
        id : 'id1'
      },
      {name: 'Daniel',
        id : 'id2'
      },
      {name: 'Todi',
        id : 'id3'
      },
      {name: 'Praise',
        id : 'id4'
      },
      {name: 'Hemjay',
        id : 'id5'
      },
      {name : 'bassey',
      id : 'id6'
    }
      ]

    

    }
    
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster=> <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  }
}
export default App;
