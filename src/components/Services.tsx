
import { Palette, Code, Smartphone, Zap, Globe, Layers, Terminal, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Posters, social media kits, and visual content that captures attention and communicates effectively.",
      color: "text-blue-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Layers,
      title: "Branding",
      description: "Complete brand identity solutions including logos, visual systems, and brand guidelines.",
      color: "text-purple-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Smartphone,
      title: "UI/UX & Web Concepts",
      description: "User-centered design for digital experiences, wireframes, and interactive prototypes.",
      color: "text-cyan-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications using React, Node.js, Python, and modern frameworks with clean, scalable code.",
      color: "text-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Terminal,
      title: "Software Solutions",
      description: "Custom software development, automation tools, and desktop applications tailored to your needs.",
      color: "text-orange-600",
      bgGradient: "from-orange-50 to-yellow-50"
    },
    {
      icon: Database,
      title: "Tech Integration Projects",
      description: "Database design, API development, and tech solutions that bridge design and functionality.",
      color: "text-indigo-600",
      bgGradient: "from-indigo-50 to-purple-50"
    }
  ];

  const techStackItems = [
    {
      name: 'React',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop&crop=center',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Node.js',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=150&fit=crop&crop=center',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Python',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=150&fit=crop&crop=center',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop&crop=center',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=150&fit=crop&crop=center',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Figma',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=150&fit=crop&crop=center',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering smart, beautiful, and functional solutions that bridge design, technology, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
               key={index} 
               className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-blue-300 overflow-hidden group"
                >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <CardHeader className="relative z-10">
                  <div className={`${service.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Tech stack with 3D images */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tech Stack & Tools</h3>
          
          {/* Featured tech stack with images */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {techStackItems.map((tech, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20`}></div>
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-bold">{tech.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Additional tools as tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Adobe CC', 'Git', 'SQL', 'MongoDB', 'VS Code', 'Docker'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
