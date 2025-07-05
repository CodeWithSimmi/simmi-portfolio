import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance Frontend Developer",
    points: [
      "Strong in HTML, CSS, JavaScript, React.js",
      "Built responsive and modern UI/UX",
      "Clean, efficient code for performance",
      "Integrated third-party APIs",
      "Debugging and troubleshooting experience",
    ],
  },
  {
    title: "Freelance Graphic Designer",
    points: [
      "Skilled in Photoshop, Canva, CorelDRAW",
      "Designed professional graphics",
      "Logos, banners, posters, social posts",
      "Maintained brand consistency",
      "Creative problem-solving in designs",
    ],
  },
];

export const Workexp = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto my-8">
      {/* Scroll Animated Heading */}
      <motion.p
        className="text-center text-gray-400 text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        WHAT I HAVE DONE SO FAR
      </motion.p>

      <motion.h2
        className="text-white text-center text-4xl md:text-5xl font-bold mt-2 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-[#1d1836] text-white p-6 rounded-xl w-full max-w-md shadow-md"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">{exp.title}</h3>
            <ul className="list-disc space-y-2 text-gray-400 pl-5 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
