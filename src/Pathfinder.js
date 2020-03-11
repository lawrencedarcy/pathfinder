import React, { Component } from 'react';
import Node from './Node';
import './Node.css';
import { dijkstra } from './Dijkstra';


const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

class Pathfinder extends Component {

  constructor (props) {
    super(props);

    this.state = {
      nodes: [],
      

    }
    
    this.startSearch = this.startSearch.bind(this)
  }

  

  startSearch () {
    const {nodes} = this.state;
    let startNode = nodes[START_NODE_ROW][START_NODE_COL];
    let finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
    console.log('search started')
     dijkstra(this.state.nodes, startNode, finishNode);
    
  }

  componentDidMount () {

    const nodes = [];
    

    for (let row = 0; row < 30; row++) {
      const currentRow = [];
      for (let col = 0; col < 30; col++){
        const currentNode = {
          col, 
          row,
        isStart: row===2 && col===2,
        isFinish: row===12 && col===22
      };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({nodes});

  }

  render() {

    const { nodes } = this.state;
    console.log(nodes);

    return (
      <div>
      
      <div className="grid">
      <button onClick={this.startSearch}>Start search</button>
         {nodes.map((row, rowIdx) => {

  return ( 
  <div key={rowIdx} > 
    {row.map((node, nodeIdx) => {
      const { isStart, isFinish } = node;
      return (
    <Node
      key={nodeIdx}
      isStart={isStart}
      isFinish={isFinish}
      isVisited={false}
      distance={Infinity}
      isWall={false}
    />
    );
    })}
  </div>
    );
  })}
  </div>
  </div>
   );
  }
}

export default Pathfinder;