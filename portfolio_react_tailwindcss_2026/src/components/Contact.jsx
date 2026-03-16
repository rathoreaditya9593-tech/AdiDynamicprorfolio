import contactImage from '../assets/contact.png';

const Contact = () => {
  return (
    <section id='contact' className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div 
          className="mb-10 text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 
            className="text-3xl font-bold text-gray-900 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us 
          </h2>
          <p 
            className="text-gray-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Send us a message and we'll get back to you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Form */}
          <div 
            className="bg-gray-100 p-8 rounded-xl shadow-sm"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h3 
              className="text-xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="500">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="550">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-gray-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                onClick="sendMail()"
                className="w-full bg-gray-900 text-white p-3 rounded-lg font-medium hover:bg-black 
                transition duration-300 shadow-md hover:shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="650"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
          <div 
            className="relative flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div 
              className="absolute w-80 h-80 md:w-120 md:h-120 bg-gray-300 
              rounded-[75%_25%_15%_85%/55%_25%_75%_45%] z-0"
              data-aos="zoom-in"
              data-aos-delay="500"
            ></div>
            <img
              src={contactImage}
              alt="Contact"
              className="w-full max-w-lg h-auto z-10"
              data-aos="fade-in"
              data-aos-delay="600"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;