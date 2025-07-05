import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import for navigation

export const Herosection = () => {
  const animationContainer = useRef(null);
  const navigate = useNavigate(); // ✅ setup navigation

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json",
    });

    return () => anim.destroy();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient Background */}
      <div
        ref={animationContainer}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ pointerEvents: "none", opacity: 1 }}
      />

      {/* Animated Hero Content */}
      <motion.div
        className="z-10 relative text-center max-w-3xl mx-auto p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#E0F2FF] drop-shadow-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi I'm Simran
        </motion.h1>

        <motion.h4
          className="my-6 text-[1.8rem] md:text-[2rem] text-[#D1BBFF] drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Give Your Innovative Project a Kickstart with Us
        </motion.h4>

        <motion.button
          onClick={() => navigate("/packages")} // ✅ navigate to Packages.jsx
          className="relative px-8 py-3 font-semibold text-sm text-black bg-amber-50 rounded-md overflow-hidden group hover:bg-amber-100 transition-all duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-in-out bg-yellow-300 opacity-20 group-hover:w-full skew-x-[-20deg]"></span>
          <span className="relative z-10">Hire Me</span>
        </motion.button>
      </motion.div>
    </section>
  );
};
