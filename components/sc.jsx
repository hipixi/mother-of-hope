"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ScrollLink = ({ href, className, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const path = href.split("#")[0] || "/";
    const hash = href.split("#")[1];

    if (router.pathname === path) {
      scrollToElement(hash);
    } else {
      router.push(path).then(() => {
        scrollToElement(hash);
      });
    }
  };

  const scrollToElement = (hash) => {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
