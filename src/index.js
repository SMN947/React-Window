import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WindowModal from 'react-window-modal';

import './style.css';

const startPos = { x: 5, y: 5 };
const size = {x: window.innerWidth - 10, y: window.innerHeight - 10};

class App extends Component {
  render() {
    return (
      <div>
      <WindowModal title="Test" pos={startPos} size={size}>
        Hello from within the modal!
      </WindowModal>
        <WindowModal title="Test2" pos={startPos} size={size}>
          Hello from within the modal!
        </WindowModal>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
