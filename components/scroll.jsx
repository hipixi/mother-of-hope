"use client";
import Link from "next/link";

const ScrollLink = ({ href, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const headerOffset = 60; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
