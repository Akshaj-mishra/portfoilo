import React from 'react';
import {assets} from '../assets/public_assets/public_assets';

export default function Landing() {
  return (
    <div className='h-screen w-screen bg-center '>
    <img className='bg-cover w-screen h-screen object-cover'  src = {assets.backgroundpic} alt='for background'/>
    </div>
  )
}
