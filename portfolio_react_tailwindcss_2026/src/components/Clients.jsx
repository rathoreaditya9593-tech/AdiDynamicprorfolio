import { GraduationCap, Laptop, Trophy, Quote } from "lucide-react";

const Clients = () => {
  const facts = [
    {
      icon: <GraduationCap className="w-8 h-8 text-teal-400" />,
      title: "Studying Computer Science",
      description: "Technocrats Institute of Technology, Bhopal (4th Year)"
    },
    {
      icon: <Laptop className="w-8 h-8 text-teal-400" />,
      title: "Solved 500+ DSA Problems",
      description: "Maintaining a 100+ day coding streak"
    },
    {
      icon: <Trophy className="w-8 h-8 text-teal-400" />,
      title: "Oracle Certified",
      description: "Oracle Cloud Professional Certification"
    },
    {
      icon: <Quote className="w-8 h-8 text-teal-400" />,
      title: "Favorite Quote",
      description: <i>"Code is like humor. When you have to explain it, it's bad." – Cory House</i>
    }
  ];

  return (
    <section id="funfacts" className="w-full py-20 bg-white scroll-m-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
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
              Fun Facts About Me
            </h2>

            <p
              className="text-gray-600 mt-2 text-left"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              A little glimpse into my life beyond the code editor
            </p>
          </div>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg 
              transition-shadow hover:border-gray-300 group"
              data-aos="flip-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="mb-4">{fact.icon}</div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {fact.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;