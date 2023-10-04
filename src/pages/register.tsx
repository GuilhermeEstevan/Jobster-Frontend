import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";
import FormRow from "../components/Form/FormRow";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/User/UserContext";

const Register = () => {
  const [isMember, setIsMember] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { registerUser, isLoading, loginUser, user } = useUserContext();

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const toggleMember = () => {
    setIsMember(!isMember);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !password || (!isMember && !name)) {
      console.log("Por favor preencha todos os campos");
      return;
    }

    if (isMember) {
      loginUser({ email, password });
      return;
    }

    registerUser({ email, name, password });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isMember ? "login" : "Registrar"}</h3>
        {/* NAME FIELD */}
        {!isMember && (
          <FormRow
            type="text"
            name="nome"
            value={name}
            handleChange={handleName}
          />
        )}
        {/* EMAIL FIELD */}
        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={handleEmail}
        />
        {/* PASSWORD FIELD */}
        <FormRow
          type="password"
          name="senha"
          value={password}
          handleChange={handlePassword}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Enviar"}
        </button>
        <p>
          {isMember ? "Não tem cadastro ainda?" : "Já tem cadastro?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? "Registrar-se" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
