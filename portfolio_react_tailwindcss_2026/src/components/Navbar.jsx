import { Code2, Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/rathoreaditya9593-tech',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/aditya-rathore-7546472bb',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:rathoreaditya9617@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm overflow-hidden bg-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Code2 className="h-6 w-6 text-gray-800" />
            <span className="ml-2 text-lg font-semibold text-gray-900">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social + Resume */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1ON9KuAhkZjlgTd3qjp89r5MsU6OtylnK/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 text-white px-4 py-1.5 rounded-md text-sm hover:bg-gray-700 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white py-4">
            <div className="flex flex-col space-y-4">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 text-base font-medium px-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Resume button mobile */}
              <a
                href="https://drive.google.com/file/d/1ON9KuAhkZjlgTd3qjp89r5MsU6OtylnK/view?usp=drivesdk"
                className="mx-3 bg-gray-900 text-white text-center py-2 rounded-md"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>

              {/* Social icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;