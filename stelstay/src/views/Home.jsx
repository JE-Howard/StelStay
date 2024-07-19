import { Outlet, Link } from 'react-router-dom'

import './homePage.css' 

// Define the Home component that steups up all the links nested in the buttons to support the routing between pages. 
export function Home () {
  return (
    <div id='container'>
      <Outlet />
      <div>

        <div id='buttonBox'>
          <img src='./src/assets/StelStayIcon.png' alt='Stely Stay Logo' id='logo' width='190px' />
          <h1 id='header'>Welcome to Stely Stay Properties</h1>
          <button id='adminButton'>
            <Link to='/AdminPage' replace style={{ color: 'white', textDecoration: 'none' }}>Admin Page</Link>
          </button>
          <button id='userButton'>
            <Link to='/UserPage' replace style={{ color: 'white', textDecoration: 'none' }}>User Page</Link>
          </button>
          <button id='registerButton'>
            <Link to='/RegisterPage' replace style={{ color: 'white', textDecoration: 'none' }}>Register Page</Link>
          </button>
        </div>

      </div>
    </div>
  )
};
