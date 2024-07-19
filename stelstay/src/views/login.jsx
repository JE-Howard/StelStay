import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLogin, useNotify, Notification } from 'react-admin'
import './login.css';

//The login component which uses a UseState hook to fetch the username and password inputted and then sends it to the authentication provider to check the login details 

const MyLoginPage = ({ theme }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()
  const notify = useNotify()

  const handleSubmit = e => {
    e.preventDefault()
    login({ username, password }).catch(() =>
      notify('Invalid username or password')
    )
  }

  return (
    <div id="container">
      <form id="buttonBox" onSubmit={handleSubmit}>
        
        <h3>Username:</h3>
        <input
          id='usernameInput'
          name='username'
          type='text'
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)}

        />
        <h3>Password:</h3>
        <input
          id='passwordInput'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="buttonStyle" type='submit' id='loginButton'>
          Login
        </button>
        <button id='welcomePageButton'>
          <Link to='/' replace style={{ color: 'white', textDecoration: 'none' }}>Welcome Page</Link>
        </button>
      </form>
    </div>
  )
}

export default MyLoginPage
