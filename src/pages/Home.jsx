import React from 'react'
import Layout from '../component/Layout'
import Header from '../component/Header'
import Banner from '../Tea_Images/Banner.avif'
import '../styles/HomeStyle.css'

const Home = () => {
  return (
     <div className='home' style={{background:`url(${Banner})`}}>
      <div className='homeContainer'>
        <h1 style={{margin:0}}>Enjoy the Essance Of Tea Leaves</h1>
        <p style={{margin:0}}>Tea is not just a beverage it's an emotion..</p>
      </div>
    </div>
  )
}

export default Home
