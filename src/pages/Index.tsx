
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
    title: "Giftson-Dev",
    description: "Discover The Giftson portfolio - Professional gift selection, curation, and personalized services. Find unique, thoughtful gifts for every occasion.",
    keywords: "gifts, curation, portfolio, professional services, personalized gifts, gift selection",
    ogTitle: "Giftson-Dev",
    ogDescription: "Professional gift selection, curation, and personalized services for every occasion.",
    ogImage: "https://thegiftson.com/favicon.png",
    ogUrl: "https://thegiftson.com",
    ogType: "website",
    twitterCard: "summary_large_image",
    author: "The Giftson",
    canonical: "https://thegiftson.com"
  });

  useEffect(() => {
    // Set structured data for Organization schema
    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Giftson",
      "url": "https://thegiftson.com",
      "logo": "https://thegiftson.com/favicon.png",
      "description": "Professional gift selection, curation, and personalized services",
      "sameAs": [
        "https://www.facebook.com/thegiftson",
        "https://www.twitter.com/thegiftson",
        "https://www.instagram.com/thegiftson",
        "https://www.linkedin.com/company/thegiftson"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
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
