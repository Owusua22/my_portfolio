"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const DEFAULT_IMAGE = "/sarah.jpeg";

export default function ProfilePicture() {
  const [imageSrc, setImageSrc] = useState<string>(DEFAULT_IMAGE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-full rounded-full overflow-hidden
                 cursor-pointer bg-muted"
    >
      <Image
        src={imageSrc}
        alt="Sarah Nkansah - Full-Stack Developer & UI/UX Designer"
        fill
        sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
        className="object-cover transition-transform duration-700
                   hover:scale-110"
        priority
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t
                   from-indigo-900/25 via-transparent to-transparent
                   opacity-0 hover:opacity-100
                   transition-opacity duration-500
                   flex items-end justify-center pb-6"
      >
        <span className="text-white/70 text-[11px] font-medium tracking-wide uppercase">
          Change Photo
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
}