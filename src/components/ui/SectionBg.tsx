import Image from "next/image";

interface SectionBgProps {
  src: string;
  alt: string;
  opacity?: number; // overlay opacity 0-100, default 82
}

export function SectionBg({ src, alt, opacity = 82 }: SectionBgProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        quality={75}
        className="object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(9, 9, 11, ${opacity / 100})` }}
      />
    </div>
  );
}
