
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Giftson Ekesa
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a self-taught designer, programmer, and student of computer science based in Nairobi. 
              I believe in creating clean, purposeful work that tells stories and solves problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My passion lies in merging visual art with digital solutions, creating innovative experiences 
              that bridge the gap between beautiful design and functional technology.
            </p>
            
            {/* Quote section */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400">
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <p className="text-xl font-semibold text-gray-900 dark:text-white italic">
                "Invictus maneo – I remain unvanquished."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-lg p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Skills & Expertise</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Graphic Design & Visual Identity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  UI/UX Design & Prototyping
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Computer Science & Programming
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Digital Innovation & Problem Solving
                </li>
              </ul>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
