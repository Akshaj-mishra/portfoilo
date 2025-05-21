import React from 'react';
import { assets } from '../assets/public_assets/public_assets';

export default function Landing() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src={assets.backgroundpic}
        alt="background"
        className="w-screen h-screen object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-6 rounded-lg">
          Welcome to My Page
        </h1>
      </div>
    </div>
  );
}
