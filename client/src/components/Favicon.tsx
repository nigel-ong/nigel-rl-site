import { useEffect, useState } from "react";

interface FaviconProps {
  domain: string; // e.g. "bcit.ca" or "stratfordhall.ca"
  alt: string;
  className?: string;
  fallbackUrl?: string; // optional direct URL to use if Google fails
}

const Favicon: React.FC<FaviconProps> = ({ domain, alt, className, fallbackUrl }) => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavicon = async () => {
      try {
        const googleFavicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

        // Optionally test if the image loads properly
        const img = new Image();
        img.onload = () => setFaviconUrl(googleFavicon);
        img.onerror = () => {
          if (fallbackUrl) {
            setFaviconUrl(fallbackUrl);
          } else {
            setFaviconUrl(null);
          }
        };
        img.src = googleFavicon;
      } catch (error) {
        console.error("Error loading favicon:", error);
        setFaviconUrl(fallbackUrl || null);
      }
    };

    fetchFavicon();
  }, [domain, fallbackUrl]);

  if (!faviconUrl) return null;

  return (
    <img 
      src={faviconUrl} 
      alt={alt} 
      className={className || "w-4 h-4 object-contain"} 
    />
  );
};

export default Favicon;
