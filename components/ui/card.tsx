// components/ui/Card.tsx
import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
  className?: string;
  bordered?: boolean;
  raised?: boolean;
}

const Card = ({
  title,
  description,
  icon,
  image,
  link,
  className = "",
  bordered = false,
  raised = false,
}: CardProps) => {
  const cardClasses = `
    bg-white rounded-lg overflow-hidden
    ${bordered ? "border border-grey-200" : ""}
    ${raised ? "shadow-lg" : "shadow-sm"}
    ${className}
  `;

  const cardContent = (
    <>
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-grey-700">{description}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <Link href={link} className={`block ${cardClasses}`}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
};

export default Card;
