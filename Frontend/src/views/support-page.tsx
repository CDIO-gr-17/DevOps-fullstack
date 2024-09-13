import React, { useRef, useEffect, useState } from "react";

export default function SupportPage() {
  const imageRef = useRef(null);
  const [opacity, setOpacity] = useState(1); // To control the opacity of the background image

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;

        // Zoom effect: Scale the image as the user scrolls
        const scale = 1 + (scrollPosition / maxScroll) * 2; // Adjust the multiplier for zoom speed
        imageRef.current.style.transform = `scale(${scale})`;

        // Opacity effect: Fade out image at 70% of max scroll
        const fadeStart = 0.7 * maxScroll;
        const fadeEnd = maxScroll;

        if (scrollPosition > fadeStart) {
          const fadeFactor =
            (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
          setOpacity(1 - fadeFactor); // Smoothly decrease the opacity
        } else {
          setOpacity(1); // Reset opacity before fadeStart
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden">
      <img
        ref={imageRef}
        src="./src/assets/support_banner.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover opacity-50 transition-transform duration-100"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="py-20">
          <h1>Support Page</h1>
          <p>How can we help you?</p>
        </div>
        <div className="py-40">
          <h1>FAQ</h1>
          <p>Here are some frequently asked questions.</p>
        </div>
        <div className="py-40">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us for any support.</p>
        </div>
      </div>
    </div>
  );
}
