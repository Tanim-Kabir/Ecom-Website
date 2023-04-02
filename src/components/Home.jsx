import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div>
        <img className='w-full' src={bgImg} alt="/" />
    </div>
  )
}

export default Hero