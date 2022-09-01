import React from 'react'
import '../Styles/Account.css'

import SavedMovies from '../Components/SavedMovies'

const Account = () => {
  return (
    <div>
      <div className='account'>

        <img
        className="bg-img-acct"
        src="https://cutewallpaper.org/23/anime-movie-theatre-wallpaper/1472117585.jpg"
        alt="/"
        />

        {/* <div className='my-movies'>
          <h1 className='my-movie-h1'>MY MOVIES</h1>
        </div> */}
      
      </div>

      <SavedMovies />

    </div>
  )
}

export default Account