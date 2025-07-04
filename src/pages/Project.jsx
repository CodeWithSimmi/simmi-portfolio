import SkilsFacts from "../API/projectdetails.json";

export const Project = () => {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        {/* Headings */}
        <h3 className="text-[1.1rem] uppercase text-[#aaa6c3] font-[Cagliostro,sans-serif] mb-2">
          My Work
        </h3>
        <h2 className="text-[40px] sm:text-[60px] font-extrabold font-[Cagliostro,sans-serif] mb-6">
          Projects
        </h2>

        {/* Description */}
        <p className="text-[1.1rem] sm:text-[1.3rem] font-[Cagliostro,sans-serif] text-[#aaa6c3] leading-8 max-w-4xl mx-auto mb-20">
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project includes brief details, technologies used,
          and reflects my ability to solve complex problems with clean, scalable solutions.
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {SkilsFacts.map(({ id, ProjectName, image, Projectdetails, Skillsname }) => (
            <div
              key={id}
              className="rounded-[40px] p-[2px] bg-gradient-to-tr from-[#1f1c22] via-[#151030] to-[#1f1c22] hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="bg-[#151030] rounded-[40px] p-5 flex flex-col h-full text-start shadow-lg">
                <img
                  src={image}
                  alt={ProjectName}
                  className="w-full h-[12rem] object-contain mb-4 rounded-xl mx-auto"
                />
                <h3 className="text-[1.3rem] font-semibold text-white mb-2">{ProjectName}</h3>
                <p className="text-[1rem] text-[#aaa6c3] mb-3">{Projectdetails}</p>
                <p className="text-[0.9rem] text-[#ec008c] font-medium">{Skillsname}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
