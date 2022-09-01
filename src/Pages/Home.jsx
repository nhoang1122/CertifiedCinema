import React from 'react'


//COMPONENTS//
import Main from '../Components/Main'
import Row from '../Components/Row'

import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <br />
        <br />
        <br />
        <br />

        <Row title='UPCOMING' fetchURL={requests.requestUpcoming} />
        
        <Row title='POPULAR' fetchURL={requests.requestPopular} />
        <Row title='TRENDING' fetchURL={requests.requestTrending} />
        <Row title='TOP RATED' fetchURL={requests.requestTopRated} />
        
        {/* <Row title='ACTION' fetchURL={requests.requestAction} />
        <Row title='ANIME' fetchURL={requests.requestAnime} />
        <Row title='COMEDY' fetchURL={requests.requestComedy} />
        <Row title='DOCUMENTARIES' fetchURL={requests.requestDocumentaries} />
        <Row title='KIDS' fetchURL={requests.requestKids} />
        <Row title='ROMANTIC' fetchURL={requests.requestRomantic} />
        <Row title='SPORTS' fetchURL={requests.requestSports} />
        <Row title='THRILLER' fetchURL={requests.requestThriller} /> */}
    </div>
  )
}

export default Home