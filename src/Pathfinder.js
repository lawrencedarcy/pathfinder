import React, { Component } from 'react';
import Node from './Node';
import './Node.css';

class Pathfinder extends Component {

  constructor (props) {
    super(props);

    this.state = {
      nodes: []
    }
  }

  componentDidMount () {

    const nodes = [];
    

    for (let row = 0; row < 30; row++) {
      const currentRow = [];
      for (let col = 0; col < 30; col++){
        const currentNode = {
          col, 
          row,
        isStart: row===10 && col===30,
        isFinish:  row===20 && col===4,
      };
        currentRow.push([currentNode]);
      }
      nodes.push(currentRow);
    }
    this.setState({nodes});

  }

  render() {

    const { nodes } = this.state;
    console.log(nodes);

    return (
      <div className="grid">

         {nodes.map((row, rowIdx) => {

  return ( 
  <div key={rowIdx} > 
    {row.map((node, nodeIdx) => {
      const { isStart, isFinish } = node;
      return (
    <Node
      key ={nodeIdx}
      isStart={isStart}
      isFinish={isFinish}
    />
    );
    })}
  </div>
    );
  })}
  </div>
   );
  }
}

export default Pathfinder;