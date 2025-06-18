
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0">
            <img 
              src="/gift-uploads/gift.svg" 
              alt="TheGiftson Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-blue-600 font-semibold">innovate. elevate. dominate.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-8 mb-8 md:mb-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={(e) => {
                  if (link.href.startsWith("#") && link.href !== "#") {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 TheGiftson. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
