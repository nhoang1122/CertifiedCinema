import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

import '../Styles/LogIn.css'

const LogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const {user, logIn} = UserAuth();

  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setErr('')
    try {
      await logIn(email,password) 
      navigate('/')
    } catch (error) {
      console.log(error)
      setErr(error.message)
    }
  }

  return (
    <div className="signUp">
    <img
      className="bg-img"
      src="https://cutewallpaper.org/23/anime-movie-theatre-wallpaper/1472117585.jpg"
      alt="/"
    />
    <div className="sign-div">
      <div className="form">
        <div className="form-div">
          <h1 className="h1-signup">SIGN IN</h1>
          {err ? <p className='err'>{err}</p> : null}
          <form  onSubmit={handlerSubmit} className="signup-f">
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="EMAIL" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD" />
            <button className="signup-btn">SIGN IN</button>
            <p className="link">
              <span className="span-link">
                Need An Account? 
              </span> {''}
              <Link to='/signup'>
                SIGN UP
              </Link> 
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LogIn