import { ContactUsComponent } from "@/components/contact-us";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Contact } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function SupportPage() {
  const imageRef = useRef(null);
  const [opacity, setOpacity] = useState(0.5); // To control the opacity of the background image

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scale = 1 + (scrollPosition / maxScroll) * 1; // Adjust the multiplier to control the zoom speed
        setOpacity(1 - scrollPosition / maxScroll); // Adjust the opacity of the image
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
        src="support_banner.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-dvh object-cover transition-transform duration-300"
        style={{ opacity }} // Bind the opacity state to the image
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className=" py-20">
          <h1>Support Page</h1>
          <p>How can we help you?</p>
        </div>
        <div className=" py-40">
          <h1>FAQ</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do i pay for an item?</AccordionTrigger>
              <AccordionContent>
                You will recieve and email with a payment link. Alternatively
                you can log in to your account and pay from there.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it responsive?</AccordionTrigger>
              <AccordionContent>
                Yes. It is designed to work on all devices.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p>Here are some frequently asked questions.</p>
        </div>
        <div className=" py-40">
          <h1>Contact Us</h1>
          <ContactUsComponent />
          <div className=" flex w-screen">
            <img
              src="costumer_rep1.png"
              alt="Costumer support Representative 1"
              className="rounded-3xl"
            />
            <img
              src="costumer_rep2.png"
              alt="Costumer support Representative 2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
