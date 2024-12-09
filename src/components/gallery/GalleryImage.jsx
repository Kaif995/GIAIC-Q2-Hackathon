import Image from 'next/image';
export function GalleryImage({ src, alt, size, onClick, onKeyPress }) {
  const baseClasses =
    "object-contain w-full transition-transform cursor-pointer aspect-square duration-[0.3s] ease-[ease] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const sizeClasses =
    size === "large" ? "max-md:mt-6 max-md:max-w-full" : "max-md:mt-6";

  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className={`${baseClasses} ${sizeClasses}`}
      onClick={onClick}
      onKeyPress={onKeyPress}
      tabIndex="0"
      role="button"
      aria-label={`View ${alt}`}
    />
  );
}
