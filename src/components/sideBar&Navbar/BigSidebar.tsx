import { Logo } from "..";
import Wrapper from "../../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import { useUserContext } from "../../Context/User/UserContext";

const BigSidebar = () => {
  const { isSidebarOpen } = useUserContext();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
