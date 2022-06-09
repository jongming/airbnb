import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import Css from './style.css'
// import Catss from './cat.css'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App tab="home" />)
// ReactDOM.render(
//   <div>

//     <App />
//   </div>
//   ,
//   document.getElementById("root")
// )
