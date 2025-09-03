import React from "react";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

interface DatabaseImageProps {
  type: "category" | "featured" | "outdoor" | "indoor" | "technology" | "offer";
  id: string;
  thumbnail?: boolean;
  alt?: string;
  className?: string;
  fallback?: React.ReactNode;
  isAdmin?: boolean; // New prop to determine if this is admin context
}

const DatabaseImage: React.FC<DatabaseImageProps> = ({
  type,
  id,
  thumbnail = false,
  alt = "",
  className = "",
  fallback = null,
  isAdmin = false,
}) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        const thumbnailParam = thumbnail ? "?thumbnail=true" : "";
        const endpoint = isAdmin
          ? `${API_URL}/api/admin/products/image/${type}/${id}${thumbnailParam}`
          : `${API_URL}/api/products/image/${type}/${id}${thumbnailParam}`;

        const headers: Record<string, string> = {};

        // Only add auth header for admin context
        if (isAdmin) {
          const token = Cookies.get("adminToken");
          console.log(
            "Database image token:",
            token ? "Token found" : "No token found"
          );
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
        }

        const response = await fetch(endpoint, {
          headers,
          credentials: "include", // Include cookies in request
        });

        if (!response.ok) {
          throw new Error("Failed to load image");
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
        setError(false);
      } catch (err) {
        console.error("Error loading image:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadImage();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [type, id, thumbnail, isAdmin]);

  // Cleanup effect for object URL
  React.useEffect(() => {
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageSrc]);

  if (loading) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`}>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  if (error || !imageSrc) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className={`bg-gray-100 border border-gray-300 ${className}`}>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          No Image
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default DatabaseImage;
