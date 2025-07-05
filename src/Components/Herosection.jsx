import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const Herosection = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json", // ✅ Smooth dev-themed gradient animation
    });

    return () => anim.destroy();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[5rem] pb-[3rem] px-4 overflow-hidden">
      {/* Gradient Animation Background */}
      <div
        ref={animationContainer}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ pointerEvents: "none", opacity: 0.85 }}
      />

      {/* Hero Content */}
      <div className="z-10 relative text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl">
          Hi I'm Simran
        </h1>

        <h4 className="my-6 text-[1.8rem] md:text-[2rem] text-white drop-shadow-lg">
          Give Your Innovative Project a Kickstart with Us
        </h4>

        <button className="px-6 py-2 text-base font-medium bg-amber-50 rounded-md hover:bg-amber-100 transition-all duration-300">
          Hire Me
        </button>
      </div>
    </section>
  );
};
