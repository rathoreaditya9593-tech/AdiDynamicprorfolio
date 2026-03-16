import about from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Image */}
          <div 
            className="md:w-1/2 md:left-52 relative z-40"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={about}
              alt="About"
              className="w-155 h-130 object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className="relative z-20 text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="border-2 border-gray-700 bg-gray-200 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                About Me 
              </h2> 

              <p 
                className="text-gray-600 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                I'm a passionate developer who enjoys building modern web
                applications using React and clean UI design. I focus on writing
                simple, efficient code and creating user-friendly experiences.
              </p>
              
              <a 
                href="#" 
                className="px-6 py-3 border-2 border-gray-500 text-gray-900 font-medium rounded-lg
                 bg-white hover:text-white transition"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;