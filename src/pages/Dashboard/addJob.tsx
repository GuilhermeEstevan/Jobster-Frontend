import { useEffect } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { useJobContext } from "../../Context/Job/jobContext";
import FormRowSelect from "../../components/Form/FormRowSelect";
import { useUserContext } from "../../Context/User/UserContext";

const AddJob = () => {
  const { job, setJob, isEditing, isLoading, createJob, editJob, clearJob } =
    useJobContext();
  const { user } = useUserContext();

  const {
    position,
    company,
    jobLocation,
    jobType,
    jobOptions,
    status,
    statusOptions,
    editJobId,
  } = job;

  const handleJobInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      console.log("preencha os campos");
    }

    if (isEditing) {
      editJob({ position, company, jobLocation, jobType, status, editJobId });
      return;
    }

    createJob(job);
  };

  useEffect(() => {
    if (!isEditing) {
      setJob((prevJob) => ({
        ...prevJob,
        jobLocation: user?.local || "",
      }));
    }
  }, [isEditing]);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "editar emprego" : "Criar emprego"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
            labelText="Cargo"
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
            labelText="Empresa"
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
            labelText="cidade"
          />
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobOptions}
            labelText="Modalidade"
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={clearJob}
            >
              Limpar
            </button>
            <button
              type="submit"
              className="btn btn-block submmit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isEditing ? "Editar" : "Criar"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
