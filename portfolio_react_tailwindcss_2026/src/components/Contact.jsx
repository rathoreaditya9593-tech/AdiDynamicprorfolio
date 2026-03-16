import contactImage from '../assets/contact.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {


  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [reload, setReload] = useState(0); // reload whole section

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        'service_sxx1thu',
        'template_tuf4mjo',
        form.current,
        'pWHy204NPE1CHD6QH'
      )
      .then(() => {

        setShowPopup(true);
        setIsSending(false);

        // reset form
        form.current.reset();

        // reload section (form + boy + background)
        setTimeout(() => {
          setReload(prev => prev + 1);
        }, 500);

        // hide popup
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);

      })
      .catch((error) => {
        console.log(error.text);
        setIsSending(false);
      });
  };

  return (
    <section key={reload} id='contact' className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Popup */}
        {showPopup && (
          <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
            ✅ Message Sent Successfully!
          </div>
        )}

        {/* Heading */}
        <div className="mb-10 text-center" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-gray-900 mb-3" data-aos="fade-up">
            Contact Us
          </h2>

          <p className="text-gray-600" data-aos="fade-up">
            Send us a message and we'll get back to you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Form */}
          <div
            className="bg-gray-100 p-8 rounded-xl shadow-sm"
            data-aos="fade-right"
          >

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
              ></textarea>
<button
  type="submit"
  disabled={isSending}
  className="w-full bg-gray-900 text-white p-3 rounded-lg font-medium 
  shadow-md hover:bg-black transition-all duration-700 ease-in-out"
>
  <span
    className={`inline-block transition-all duration-700 ${
      isSending ? "opacity-60 scale-95" : "opacity-100 scale-100"
    }`}
  >
    {isSending ? "Sending..." : "Send Message"}
  </span>
</button>
            </form>
          </div>

          {/* Boy Image */}
          <div
            className="relative flex justify-center items-center"
            data-aos="fade-left"
          >

            <div
              className="absolute w-80 h-80 md:w-120 md:h-120 bg-gray-300 
              rounded-[75%_25%_15%_85%/55%_25%_75%_45%] z-0"
              data-aos="zoom-in"
            ></div>

            <img
              src={contactImage}
              alt="Contact"
              className="w-full max-w-lg h-auto z-10"
              data-aos="fade-in"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
