// import { asset } from "../assets/asset";
import SkilsFacts from "../API/SkilsData.json";

export const About = () => {
  return (
    <section className="text-white">
      <h3 className="text-[18px] uppercase text-[#aaa6c3] font-[Cagliostro,sans-serif]">
        Introduction
      </h3>
      <h2 className="text-[60px] m-[12px_5px] font-extrabold font-[Cagliostro,sans-serif]">
        Overview
      </h2>
      <p className="text-[1.3rem] font-[Cagliostro,sans-serif] text-[#aaa6c3] ">
        I am a passionate and detail-oriented front-end developer with a strong
        foundation in web technologies. My journey in the world of web
        development has been marked by hands-on experience, creativity, and a
        commitment to delivering visually appealing and intuitive user
        interfaces. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div className="grid grid-cols-3 gap-4 my-[7rem] mx-[0.2rem] items-center justify-center ">
        {SkilsFacts.map((currentskils) => {
          const { id, SkilsName, image } = currentskils;

          return (
            <div className="border-0" key={id}>
              <div
                class="relative border-2 border-transparent rounded-[45px] py-[30px] px-0 [background:linear-gradient(71deg,#080509,#1a171c,#080509)] [background-clip:padding-box]
  bg-blue-box"
              >
                <div className=" flex flex-col items-center justify-center text-center">
                  <img
                    className="w-[13rem] h-[8rem] object-contain"
                    src={image}
                    alt
                  ></img>
                  <p className="text-[1.3rem]">{SkilsName}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
