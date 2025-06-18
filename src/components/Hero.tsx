
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 relative overflow-hidden pt-16 transition-colors duration-300">
      {/* Cool Matrix-style background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop&crop=center")'
          }}
        ></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-40 w-36 h-36 bg-cyan-200 dark:bg-cyan-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code className="absolute top-32 left-16 h-8 w-8 text-blue-300 dark:text-blue-500 opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <Palette className="absolute top-64 right-32 h-6 w-6 text-purple-300 dark:text-purple-500 opacity-40 animate-pulse" style={{ animationDelay: '3s' }} />
        <Zap className="absolute bottom-48 left-32 h-7 w-7 text-cyan-300 dark:text-cyan-500 opacity-40 animate-pulse" style={{ animationDelay: '5s' }} />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo with cool background effect */}
        <div className="mb-8 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30 scale-150 animate-pulse"></div>
          <div className="relative backdrop-blur-sm rounded-full p-6 border border-white/20 dark:border-gray-600/20 shadow-2xl">
            <img 
              src="/gift-uploads/gift.svg" 
              alt="TheGiftson Logo" 
              className="mx-auto h-32 md:h-40 w-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          TheGiftson
        </h1>

        {/* Main tagline */}
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          innovate. elevate. dominate.
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Blending design, programming, and tech innovation to shape better digital experiences.
        </p>

        {/* Enhanced description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          From stunning visual designs to full-stack development, I create solutions that are both beautiful and functional.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            onClick={() => scrollToSection("services")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Discover My Work
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
