import Logo from "../components/Logo";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            O Jobster é uma plataforma intuitiva e eficiente para o
            gerenciamento de trabalhos. A aplicação permite aos usuários
            registrar detalhes relevantes sobre oportunidades de emprego,
            incluindo informações sobre a empresa, a posição e o status.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Registrar
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
