import service from "../assets/service.png";
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="w-full px-6 md:px-16 py-12 scroll-m-24 overflow-hidden">
      <div 
        className="relative rounded-3xl overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="100"
      > 
        {/* Image */}
        <img
          src={service}
          alt="Service"
          className="w-full h-75 md:md:h-105 object-cover"
          data-aos="fade-in"
          data-aos-delay="200"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-16 max-w-xl text-gray-900">
            <h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Let's grow your <br /> brand together!
            </h2>

            <p 
              className="mt-4 text-sm md:text-base text-gray-700"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              We help businesses build strong digital presence through modern
              design, clean code, and smart solutions.
            </p>

            <button 
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white 
              px-6 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              My Services
              <ArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;