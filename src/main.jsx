import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar.jsx';
import DisplayArea from './components/display_area.jsx';
import './index.css';
import './components/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'>
      {/* <App /> */}
      <NavBar />
      <DisplayArea />
    </div>
  </React.StrictMode>,
)
