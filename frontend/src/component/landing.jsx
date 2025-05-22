import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

export default function Landing() {
  const titles = [' "Web Developer" ', ' "Gamer" ',' "GOD" '];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative ml-64 w-[calc(100vw-16rem)] h-screen overflow-hidden">
      <img
        src={assets.public_assets.backgroundpic}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className=" text-5xl font-bold text-white">
          Welcome to My Page
        </h1>

        <p className="text-white text-4xl mt-6 font-semibold">
          I am <span className="text-blue-400 transition-opacity duration-500">{titles[index]}</span>
        </p>
      </div>
    </div>
  );
}
