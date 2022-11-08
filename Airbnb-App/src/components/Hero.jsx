import React from 'react'
import Group from '../assets/group.png'

function Hero() {
  return (
    <div className='hero--container'>
      <img className='hero--img' src={ Group } alt="Group of pictures" />
      <h1 className='hero--title'>Online Experiences</h1>
      <p className='hero--content'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
  )
}

export default Hero