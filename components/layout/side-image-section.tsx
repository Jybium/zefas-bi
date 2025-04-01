import React from "react";
import Image from "next/image";

interface SideImageSectionProps {
  imageSrc: string;
  imageAlt: string;
  pageTitle: string;
  pageText: string | React.ReactNode;
}

export const SideImageSection = ({
  imageSrc,
  imageAlt,
  pageTitle,
  pageText,
}: SideImageSectionProps) => {
  return (
    <div className="hidden lg:block lg:w-1/2 relative space-y-5">
      <div className="space-y-3">
        <h2 className="text-black font-semibold text-6xl leading-[100%]">
          {pageTitle}
        </h2>
        <p className="text-grey-900 text-xl leading-[160%]">{pageText}</p>
      </div>

      <div className="relative h-[732px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          //   width={600}
          //   height={732}
          style={{ objectFit: "cover" }}
          priority
          className="rounded"
          fill
        />
      </div>
    </div>
  );
};
