import { NavLink } from "react-router-dom";

export const Headers = () => {
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/project", label: "Project" },
    { path: "/workexp", label: "Work experience" },
    { path: "/contact ", label: "Contact" },
  ];

  return (
    <header className=" w-full ">
      <div className="items-center flex justify-between py-4 px-6 mt-1">
        {/* logo area  */}
        <div>
          <NavLink to="/">
            <h1 className="hover:text-[#2e86c1] text-[1.3rem] font-cagliostro text-[#fff] ">
              DesignWithSimmi
            </h1>
          </NavLink>
        </div>

        {/* navitems */}
        <nav>
          <ul className="flex justify-end gap-8 text-white text-base ">
            {navLinks.map((link, index) => (
              <li className="list-none text-lg" key={index}>
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
