import { NavLink } from "react-router-dom";
import links from "../../Utils/links";
import { TLinks, TToggleSidebar } from "../../interface/links";

const NavLinks = ({ toggleSidebar }: TToggleSidebar) => {
  return (
    <div className="nav-links">
      {links.map((link: TLinks) => {
        const { text, path, icon, id } = link;

        return (
          <NavLink
            to={path}
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
