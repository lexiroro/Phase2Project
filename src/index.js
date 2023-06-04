// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render( 
// <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   , document.getElementById("root"));


// After
import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BrowserRouter> <App /> </BrowserRouter>);