// import { asset } from "../assets/asset";
import SkilsFacts from "../API/SkilsData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h3>Introduction</h3>
      <h2 className="container-tittle">Overview</h2>
      <p className="about-me">
        I am a passionate and detail-oriented front-end developer with a strong
        foundation in web technologies. My journey in the world of web
        development has been marked by hands-on experience, creativity, and a
        commitment to delivering visually appealing and intuitive user
        interfaces. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div className="gredient-cards  ">
        {SkilsFacts.map((currentskils) => {
          const { id, SkilsName, image } = currentskils;

          return (
            <div className="card " key={id}>
              <div className="container-card  bg-blue-box">
                <div className="card-description ">
                  <img src={image} alt></img>
                  <p className="card-title">{SkilsName}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
