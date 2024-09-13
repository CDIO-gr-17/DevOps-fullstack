import { useRef, useEffect, useState } from "react";

export default function SupportPage() {
  const imageRef = useRef(null);
  const [opacity, setOpacity] = useState(0.7); // To control the opacity of the background image

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scale = 1 + (scrollPosition / maxScroll) * 1; // Adjust the multiplier to control the zoom speed
        imageRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <img
        ref={imageRef}
        src="./src/assets/support_banner.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-dvh object-cover transition-transform duration-300"
        style={{ opacity }} // Bind the opacity state to the image
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="py-20 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Support Page</h1>
          <p className="mt-4 text-lg">How can we help you?</p>
        </div>
        <div className="py-20 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">FAQ</h1>
          <p className="mt-4 text-lg">
            Here are some frequently asked questions.
          </p>
        </div>
        <div className="py-20 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Feel free to reach out to us for any support.
          </p>
        </div>
      </div>
    </>
  );
}
