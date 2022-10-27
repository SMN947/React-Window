import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WindowModal from 'react-window-modal';

import './style.css';

const startPos = { x: 5, y: 40 };
const size = { x: window.innerWidth - 10, y: window.innerHeight - 80 };

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button>Abrir un caso por numero</button>
        </div>
        <WindowModal
          resizable="true"
          title="Reporte uno"
          pos={startPos}
          size={size}
        >
          El PBI por aca
        </WindowModal>
        <WindowModal
          resizable="true"
          title="Reporte dos"
          pos={startPos}
          size={size}
        >
          El PBI por aca
        </WindowModal>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
