
import { useState, useEffect } from "react";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png";

const roles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "Backend Developer"
];

const Hero = () => {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      setText(roles[index].slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex === roles[index].length) {
        setTimeout(() => {
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 80);

    return () => clearTimeout(typing);
  }, [charIndex, index]);

  return (
    <section id="home" className="relative min-h-screen md:flex md:items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="absolute inset-0 lg:hidden bg-black/30"></div>

      {/* Hi Icon (UNCHANGED POSITION) */}
      <div
        className="absolute top-36 sm:top-20 md:top-24 lg:block hidden
         left-64 sm:left-8 md:left-12 lg:left-190 z-10"
      >
        <img
          src={hi}
          alt="Hi Icon"
          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 flex flex-col
       lg:flex-row items-center justify-between w-full pt-2 sm:pt-16 md:pt-0">

        {/* Text content */}
        <div className="max-w-2xl mt-24 lg:mt-0 mb-8 lg:mb-0 lg:pr-8 text-center lg:text-left order-1">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Hello I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aditya
            </span>
          </h1>

          {/* Typing Role */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 h-[40px]">
            {text}
            <span className="animate-pulse text-blue-500">|</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 max-w-lg mx-auto lg:mx-0">
            Building modern, responsive, and user-friendly web applications
            using MongoDB, Express.js, React.js and Node.js with Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">

            <a
              href="#works"
              className="px-5 py-2.5 sm:px-6 sm:py-3
              bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500
              text-white font-medium rounded-lg
              hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40
              transition duration-300 text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3
              border-2 border-blue-400 text-white
              font-medium rounded-lg
              hover:bg-blue-500/20 hover:scale-105
              transition duration-300 text-sm sm:text-base"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Stats box */}
        <div
          className="border border-blue-400/50 rounded-xl bg-black/40 backdrop-blur-sm p-4 md:p-5
           w-full max-w-xs sm:max-w-sm md:max-w-xs mx-auto lg:mx-0 order-2 mt-24 md:mt-0
           hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
        >

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <span className="text-gray-300 font-medium">Projects</span>
              <span className="text-lg font-bold text-indigo-400">2+</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 font-medium">Current Year</span>
              <span className="text-lg font-bold text-indigo-400">4th</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 font-medium">Certifications</span>
              <span className="text-lg font-bold text-indigo-400">3+</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 font-medium">Questions Solved</span>
              <span className="text-lg font-bold text-indigo-400">500+</span>
            </div>

            {/* Availability */}
            <div className="border-t border-white/20 pt-3">
              <div className="flex items-center justify-between text-sm">

                <span className="text-gray-300">Availability :</span>

                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Available for Work
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
