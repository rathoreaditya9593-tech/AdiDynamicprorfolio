import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import { ArrowRight } from 'lucide-react';

const Works = () => {

  const projects = [
    {
      title: "Sigma-GPT",
      description: "Modern web application with responsive design and smooth user experience.",
      image: work1,
      category: "Web Development",
      link: "https://sigma-gpt-frontend-silk.vercel.app/"
    },
    {
      title: "Dynamic AI Portfolio",
      description: "Use AI tools for improving my knowledge, Ai tools for Design.",
      image: work2,
      category: "Web App",
      link: "https://adismiles.lovable.app/"
    },
    {
      title: "Notes Reminder",
      description: "It is An web App for remember our notes and improve our consistency.",
      image: work3,
      category: "Dashboard",
      link: "https://notes-reminder-ecru.vercel.app/"
    }
  ];

  return (
    <section id='works' className="w-full py-16 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >

          <div className="mb-6 md:mb-0">
            <h2
              className="text-3xl font-bold text-gray-900 text-left"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              My Work
            </h2>

            <p
              className="text-gray-600 mt-2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Explore my latest projects and creations
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center text-gray-700 hover:text-black font-medium group"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            See all
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all group"
              data-aos="zoom-in"
              data-aos-delay={200 + (index * 150)}
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-black my-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* View Details Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-black transition flex items-center justify-center group/btn"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Works;