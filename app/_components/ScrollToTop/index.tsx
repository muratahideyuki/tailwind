"use client"; // これを追加

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5  ">
          <Image
            src="/top.png" // 画像ファイルのパス
            alt="Scroll to top"
            width={70} // 画像の幅
            height={70} // 画像の高さ
          />
        </button>
      )}
    </>
  );
}
