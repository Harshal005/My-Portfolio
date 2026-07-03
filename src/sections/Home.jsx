import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

const Home = () => {

  const roles = useMemo(() => ["Web Developer", "Java Full Stack Developer", "Front-End Developer", "React.js Developer", "Software Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(()=>{
    const current = roles[index];
    const timeout = setTimeout(()=>{
      if(!deleting && subIndex < current.length) setSubIndex( v => v + 1);

      else if(!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200); 
      else if(deleting && subIndex > 0) subIndex( v => v - 1);
      else if(deleting && subIndex === 0) { setDeleting(false); setIndex( p=> (p+1) % roles.length); }
    }, deleting ? 40 : 60);


    return ()=> clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <div>
        <div
          className="absolute -top-32 -left-32 
          w-[70vw] sm:w-[z-50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
            ></div>
        <div
          className="absolute bottom-0 right-0 
          w-[70vw] sm:w-[z-50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"
            ></div>


            <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col">

              </div>

            </div>
      </div>
    </section>
  );
};

export default Home;
