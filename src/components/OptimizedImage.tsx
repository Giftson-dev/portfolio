import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

/**
 * OptimizedImage component with built-in performance optimizations
 * - Lazy loading with native support
 * - Responsive image sizing
 * - WebP format support with fallbacks
 * - Proper width/height for CLS prevention
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  placeholder,
  className = '',
  ...props
}) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={className}
        style={{
          backgroundColor: placeholder,
          ...props.style,
        }}
        {...props}
      />
    </picture>
  );
};

/**
 * Image utility functions
 */
export const imageUtils = {
  /**
   * Generate srcSet for responsive images
   * @param baseUrl - The base image URL (should support query parameters for sizing)
   * @param sizes - Array of widths to generate
   * @returns srcSet string
   */
  generateSrcSet: (baseUrl: string, sizes: number[] = [320, 640, 960, 1280]) => {
    return sizes
      .map((size) => `${baseUrl}?w=${size} ${size}w`)
      .join(', ');
  },

  /**
   * Get optimized image URL from CDN
   * @param url - Original image URL
   * @param width - Desired width
   * @param quality - Quality (1-100)
   * @returns Optimized URL
   */
  optimizeUrl: (url: string, width?: number, quality: number = 80) => {
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    params.append('q', quality.toString());
    return `${url}?${params.toString()}`;
  },

  /**
   * Get aspect ratio for proper image sizing
   * @param width - Image width
   * @param height - Image height
   * @returns Aspect ratio as percentage (for padding-bottom technique)
   */
  getAspectRatioPadding: (width: number, height: number): string => {
    return ((height / width) * 100).toFixed(2) + '%';
  },
};

export default OptimizedImage;
