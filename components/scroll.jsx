// ScrollLink.js
"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

const ScrollLink = ({ href, className, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts or pathname changes
    if (window.location.hash) {
      setTimeout(() => {
        scrollToElement(window.location.hash.slice(1));
      }, 0);
    }
  }, [pathname]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.slice(1);

    if (pathname !== "/") {
      // If not on home page, navigate to home page with the hash
      router.push(`/${href}`);
    } else {
      // If already on home page, just scroll
      scrollToElement(targetId);
    }
  };

  const scrollToElement = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 60;
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
