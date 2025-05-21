import React from 'react';
import background from './backgroundpic.jpg';

export default function Landing() {
  return (
    <div className='h-screen w-screen bg-center '>
    <img className='bg-cover w-screen h-screen object-cover'  src = {background} alt='for background'/>
    </div>
  )
}
