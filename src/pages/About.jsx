import SkilsFacts from "../API/SkilsData.json";

export const About = () => {
  return (
    <section className="text-white pt-24 px-4 md:px-10">
      {/* Heading */}
      <h3 className="text-[18px] uppercase text-[#aaa6c3] font-[Cagliostro,sans-serif] mb-2">
        Introduction
      </h3>
      <h2 className="text-[40px] sm:text-[60px] mb-6 font-extrabold font-[Cagliostro,sans-serif]">
        Overview
      </h2>

      {/* Description */}
      <p className="text-[1.2rem] leading-8 font-[Cagliostro,sans-serif] text-[#aaa6c3] max-w-4xl mb-16">
        I am a passionate and detail-oriented front-end developer with a strong
        foundation in web technologies. My journey in the world of web
        development has been marked by hands-on experience, creativity, and a
        commitment to delivering visually appealing and intuitive user
        interfaces. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
        {SkilsFacts.map(({ id, SkilsName, image }) => (
          <div key={id} className="rounded-[45px] p-[2px] bg-gradient-to-tr from-[#1f1c22] via-[#080509] to-[#1f1c22] hover:scale-[1.03] transition-transform duration-300">
            <div className="bg-[#0e0c11] rounded-[40px] py-8 px-4 flex flex-col items-center justify-center shadow-lg">
              <img
                className="w-[10rem] h-[7rem] object-contain mb-4"
                src={image}
                alt={SkilsName}
              />
              <p className="text-[1.2rem] text-[#ccc] font-medium">{SkilsName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
