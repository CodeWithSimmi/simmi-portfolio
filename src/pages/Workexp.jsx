import React from "react";

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
    animation: "animate-slide-in-left",
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
    animation: "animate-slide-in-right",
  },
];

 export const Workexp = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <p className="text-center text-gray-400 text-lg animate-fade-in">
        WHAT I HAVE DONE SO FAR
      </p>
      <h2 className=" text-white text-center text-4xl md:text-5xl font-bold mt-2 mb-12 animate-fade-in delay-200">
        Work Experience
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`bg-[#1d1836] text-white p-6 rounded-xl w-full max-w-md shadow-md ${exp.animation}`}
          >
            <h3 className="text-xl font-semibold mb-4">{exp.title}</h3>
            <ul className="list-disc space-y-2 text-gray-400 pl-5 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

