import React from 'react';
import { assets } from '../assets/assets';

export default function Landing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={assets.public_assets.backgroundpic}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-6 rounded-lg">
          Welcome to My Page
        </h1>
      </div>
    </div>
  );
}
