import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPencilAlt,
  faToggleOn,
  faToggleOff,
  faCaretDown,
  faCaretUp,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faPencilAlt,
  faToggleOn,
  faToggleOff,
  faCaretDown,
  faCaretUp,
  faPlus,
  faTrash
);

function App() {
  console.log('dfhb');
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
