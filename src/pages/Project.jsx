import SkilsFacts from "../API/projectdetails.json";

export const Project = () => {
  return (
    <section className="px-4">
      <h3 className="text-[2rem] text-[#aaa6c3]">MY WORK</h3>
      <h2 className="text-[60px] m-[12px_5px] font-extrabold font-[Cagliostro,sans-serif] text-white">
        Projects
      </h2>
      <p className="text-[1.3rem] font-[Cagliostro,sans-serif] text-[#aaa6c3]">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively. I approach each project with a blend of creativity and
        functionality, ensuring that the user experience is not only visually
        engaging but also intuitive and seamless. My dedication to clean code
        and best practices reflects in the efficiency and maintainability of my
        projects.
      </p>

      <div className="project-cards flex flex-wrap justify-center gap-6 my-[7rem] mx-[9px]">
        {SkilsFacts.map((currentskils) => {
          const { id, ProjectName, image, Projectdetails, Skillsname } =
            currentskils;

          return (
            <div className="card w-full sm:w-1/2 lg:w-1/3 p-2" key={id}>
              <div className="relative border-2 border-transparent bg-[#151030] [background-clip:padding-box] rounded-[45px] p-[20px] flex flex-col h-full">
                <img
                  className="w-full h-[13rem] object-contain mb-2"
                  src={image}
                  alt=""
                />
                <p className="text-[1.3rem] font-semibold text-white ml-[10px] mb-[5px] text-start">
                  {ProjectName}
                </p>
                <p className="text-[13px] text-[#aaa6c3] mx-[12px] my-[11px] text-start">
                  {Projectdetails}
                </p>
                <p className="mx-[12px] text-[0.9rem] text-[#ec008c] text-start">
                  {Skillsname}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
