import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useState } from "react";
import { useUserContext } from "../../Context/User/UserContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, isLoading, updateUser } = useUserContext();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    local: user?.local || "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { name, lastName, local, email } = userData;

    if (!name || !email || !lastName || !local) {
      toast.error("Preencha todos os campos");
      return;
    }
    updateUser({ name, lastName, local, email });
  };

  return (
    <Wrapper>
      <h3>Perfil</h3>
      <div className="form-center">
        <FormRow
          type="text"
          name="name"
          value={userData.name}
          handleChange={handleChange}
          labelText="Nome"
        />
        <FormRow
          type="text"
          name="email"
          value={userData.email}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="lastName"
          value={userData.lastName}
          handleChange={handleChange}
          labelText="Sobrenome"
        />
        <FormRow
          type="text"
          name="local"
          value={userData.local}
          handleChange={handleChange}
          labelText="Localidade"
        />
        <button
          type="submit"
          className="btn btn-block"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </Wrapper>
  );
};
export default Profile;
