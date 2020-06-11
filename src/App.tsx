import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  faPencilAlt,
  faToggleOn,
  faToggleOff,
  faCaretDown,
  faCaretUp,
  faPlus,
  faTrash,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faPencilAlt,
  faToggleOn,
  faToggleOff,
  faCaretDown,
  faCaretUp,
  faPlus,
  faTrash,
  faEye,
  faEyeSlash
);

function App() {
  console.log('dfhb');
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
