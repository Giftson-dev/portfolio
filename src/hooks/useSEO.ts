import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  author?: string;
  canonical?: string;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Set title
    document.title = config.title;

    // Update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Standard meta tags
    setMetaTag('description', config.description);
    if (config.keywords) setMetaTag('keywords', config.keywords);
    if (config.author) setMetaTag('author', config.author);

    // Open Graph tags
    setMetaTag('og:title', config.ogTitle || config.title, true);
    setMetaTag('og:description', config.ogDescription || config.description, true);
    if (config.ogImage) setMetaTag('og:image', config.ogImage, true);
    if (config.ogUrl) setMetaTag('og:url', config.ogUrl, true);
    setMetaTag('og:type', config.ogType || 'website', true);

    // Twitter Card tags
    if (config.twitterCard) setMetaTag('twitter:card', config.twitterCard);
    setMetaTag('twitter:title', config.ogTitle || config.title);
    setMetaTag('twitter:description', config.ogDescription || config.description);
    if (config.ogImage) setMetaTag('twitter:image', config.ogImage);
    if (config.twitterCreator) setMetaTag('twitter:creator', config.twitterCreator);

    // Canonical URL
    if (config.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = config.canonical;
    }

    return () => {
      // Cleanup is optional as meta tags persist across navigation in SPAs
    };
  }, [config]);
};

export const setStructuredData = (data: Record<string, any>) => {
  let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};
