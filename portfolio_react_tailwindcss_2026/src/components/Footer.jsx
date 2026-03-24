import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [liked, setLiked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");
  const [hearts, setHearts] = useState([]);

  const form = useRef();

  // ❤️ Heart Animation
  const createHearts = () => {
    let newHearts = [];

    for (let i = 0; i < 12; i++) {
      newHearts.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 1,
        size: Math.random() * 15 + 10,
      });
    }

    setHearts(newHearts);
    setTimeout(() => setHearts([]), 1000); // faster
  };

  const handleLike = () => {
    setShowInput(true);
    setMessage("");
  };

  const sendLike = (e) => {
    e.preventDefault();

    setMessage("Sending... ⏳");

    emailjs
      .sendForm(
        "service_sxx1thu",
        "template_tuf4mjo",
        form.current,
        "pWHy204NPE1CHD6QH"
      )
      .then((res) => {
        console.log("SUCCESS:", res);

        setLiked(true);
        setMessage("Thanks for liking ❤️");
        setShowInput(false);

        createHearts();

        form.current.reset();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setMessage("Failed ❌ Try again");
      });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-14 overflow-hidden">
      {/* ❤️ Heart Rain */}
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="absolute text-red-500 animate-fall"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-10">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Smile_Adi❤️<span className="text-gray-400">.Dev</span>
            </h3>

            <p className="text-sm text-gray-400">
              Frontend Developer specialized in building modern, responsive, and user-friendly web applications.
            </p>

            {/* Like Button */}
            {!showInput && (
              <button
                onClick={handleLike}
                className="flex items-center gap-2 mt-5 text-sm hover:text-white transition"
              >
                <FaHeart
                  className={`transition ${
                    liked ? "text-red-500 scale-125 rotate-12" : "text-gray-400"
                  }`}
                />
                {liked ? "Liked ❤️" : "Like this portfolio"}
              </button>
            )}

            {/* FORM */}
            {showInput && (
              <form
                ref={form}
                onSubmit={sendLike}
                className="mt-4 flex items-center gap-2"
              >
                <input
                  type="text"
                   name="from_name"
                  placeholder="Your name"
                  required
                  className="px-2 py-1 text-sm w-36 rounded bg-gray-800 text-white outline-none"
                />

                <input
                  type="hidden"
                  name="title"
                  value="Portfolio Like"
                />

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-2 py-1 text-sm rounded text-white"
                >
                  OK
                </button>
              </form>
            )}

            {/* Message */}
            {message && (
              <p className="text-sm text-green-400 mt-3">{message}</p>
            )}
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Me
            </h4>

            <div className="flex gap-4 text-xl mb-4">
              <FaGithub />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aditya
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(200px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall 1.5s linear forwards;
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
