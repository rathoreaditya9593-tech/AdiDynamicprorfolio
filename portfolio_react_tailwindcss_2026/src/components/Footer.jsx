import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {

  const [liked, setLiked] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-10">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Smile_Adi❤️<span className="text-gray-400">.Dev</span>
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Frontend Developer specialized in building modern, responsive,
              and user-friendly web applications.
            </p>

            {/* Like Button */}
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2 mt-5 text-sm text-gray-300 hover:text-white transition"
            >
              <FaHeart
                className={`transition ${
                  liked ? "text-red-500 scale-110" : "text-gray-400"
                }`}
              />
              {liked ? "Liked ❤️" : "Like this portfolio"}
            </button>

          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Me
            </h4>

            <div className="flex gap-4 text-xl mb-4">
              <a
                href="https://github.com/rathoreaditya9593-tech"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-rathore-7546472bb"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/AdityaRath19621"
                className="hover:text-white transition"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Tag */}
            <p className="text-gray-400 text-sm flex items-center gap-2">
              @Smile_adi <FaHeart className="text-red-500" />
            </p>

          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aditya. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;