"use client";
import Link from "next/link";

const ScrollLink = ({ href, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
