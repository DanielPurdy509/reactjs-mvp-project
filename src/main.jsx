import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar.jsx';
import DisplayArea from './components/display_area.jsx';
import './index.css';
import './components/styles.css';

const App = () => {
  
  const [loggedPage,setLoggedPage] = useState();

  // useEffect(() => {
  //   console.log('Updated Parent State:', loggedPage);
  // }, [loggedPage]);

  // console.log(`Parent State Updated: ${loggedPage}`);

  return (
    <>
      <NavBar 
        setLoggedPage={setLoggedPage}
      />
      <DisplayArea 
        loggedPage={loggedPage}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'>
      <App />
    </div>
  </React.StrictMode>,
)
