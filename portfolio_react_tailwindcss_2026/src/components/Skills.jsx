
import { useEffect, useState, useRef } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql
} from "react-icons/si";

const Skills = () => {

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400 text-lg" />, level: 95 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-lg" />, level: 90 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-lg" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-lg" />, level: 90 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-lg" />, level: 88 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-lg" />, level: 88 },
        { name: "Express", icon: <SiExpress className="text-gray-300 text-lg" />, level: 85 },
        { name: "Oracle Database", icon: <FaDatabase className="text-red-400 text-lg" />, level: 80 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-lg" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-lg" />, level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-lg" />, level: 90 }
      ]
    }
  ];

  const learning = ["GSAP", "SpringBoot", "SpringAI", "Docker"];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-2">
            Here are the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6
              transition-all duration-300
              hover:scale-[1.03]
              hover:shadow-xl hover:shadow-cyan-500/10
              hover:border-cyan-400/40"
            >

              <h3 className="text-xl font-semibold mb-6 text-center text-gray-200">
                {category.title}
              </h3>

              {category.skills.map((skill, i) => (

                <div key={i} className="mb-5">

                  <div className="flex justify-between mb-1">

                    <div className="flex items-center gap-2 hover:scale-105 transition">
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>

                    <span className="text-gray-300 text-sm">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">

                    <div
                      className="h-2 rounded-full
                      bg-gradient-to-r from-cyan-400 via-pink-400 to-green-400
                      transition-all duration-[2200ms] ease-out"
                      style={{ width: animate ? `${skill.level}%` : "0%" }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          ))}

        </div>

        {/* Currently Learning */}

        <div className="mt-16 text-center">

          <h3 className="text-3xl font-bold mb-8 text-gray-200">
            Currently Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {learning.map((item, index) => (

              <div
                key={index}
                className="px-6 py-3 rounded-full
                bg-gray-900 border border-gray-700
                text-gray-300 font-medium
                transition-all duration-300
                hover:scale-110
                hover:border-cyan-400
                hover:text-white
                hover:shadow-lg hover:shadow-cyan-500/20
                cursor-pointer"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
