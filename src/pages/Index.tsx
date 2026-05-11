
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSEO, setStructuredData } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Giftson Ekesa - Portfolio",
    description: "Discover Giftson Ekesa's portfolio - Professional designer, developer, and tech innovator. Creating beautiful, functional digital experiences.",
    keywords: "gifts, design, development, portfolio, professional services, digital experiences, Giftson Ekesa",
    ogTitle: "Giftson Ekesa - Portfolio",
    ogDescription: "Professional designer and developer creating innovative digital solutions.",
    ogImage: "https://thegiftson.com/profile-picture.jpg",
    ogUrl: "https://thegiftson.com",
    ogType: "website",
    twitterCard: "summary_large_image",
    author: "Giftson Ekesa",
    canonical: "https://thegiftson.com"
  });

  useEffect(() => {
    // Set structured data for Person schema
    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Giftson Ekesa",
      "url": "https://thegiftson.com",
      "image": "https://thegiftson.com/profile-picture.jpg",
      "description": "Professional designer, developer, and tech innovator",
      "sameAs": [
        "https://www.facebook.com/thegiftson",
        "https://www.twitter.com/thegiftson",
        "https://www.instagram.com/thegiftson",
        "https://www.linkedin.com/in/giftson-ekesa"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Professional",
        "email": "contact@thegiftson.com"
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
