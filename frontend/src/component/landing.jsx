import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { assets } from '../assets/assets';

export default function Landing() {
  const titles = ['Student', 'Web Developer', 'Software Developer'];

  return (
    <div className="relative ml-64 w-[calc(100vw-16rem)] h-screen overflow-hidden">
      <img
        src={assets.public_assets.backgroundpic}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white">
          Hello, I'm{' '}
          <span className="text-blue-300 transition-opacity duration-500  decoration-blue-300 underline">
            {assets.personal_assets.myname}
          </span>{" "}.
        </h1>

        <p className="text-white text-4xl mt-6 font-semibold">
          I am{' '}
          <span className="text-white underline decoration-blue-400 underline-offset-4">
            <Typewriter
              words={titles }
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </span>
        </p>
      </div>
    </div>
  );
}
