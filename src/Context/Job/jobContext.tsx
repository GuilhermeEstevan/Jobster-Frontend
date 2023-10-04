import { createContext, useContext, useState } from "react";
import {
  TJob,
  TJobContext,
  TJobContextProps,
  TJobEdit,
} from "../../interface/jobContext";
import { useUserContext } from "../User/UserContext";
import customFetch from "../../Utils/axios";
import { toast } from "react-toastify";
import { TJobsFound } from "../../interface/jobSearch";

const JobContext = createContext({} as TJobContext);

export const JobProvider = ({ children }: TJobContextProps) => {
  const [job, setJob] = useState<TJob>({
    company: "",
    position: "",
    jobLocation: "",
    status: "pendente",
    jobType: "integral",
    jobOptions: ["integral", "remoto", "meio período", "estágio"],
    statusOptions: ["pendente", "entrevista", "recusado"],
    editJobId: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, checkForUnauthorizedResponde } = useUserContext();

  const createJob = async (job: TJob) => {
    try {
      setIsLoading(true);
      const token = user?.token;
      await customFetch.post("/jobs", job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Emprego Criado!");
      clearJob();
      setIsLoading(false);
    } catch (error: any) {
      if (error.response.status === 401) {
        checkForUnauthorizedResponde(error);
      }
      toast.error(error.response.data);
      setIsLoading(false);
    }
  };

  const setEditJob = (jobInfo: TJobsFound) => {
    setIsEditing(true);
    const { _id, position, company, jobLocation, jobType, status } = jobInfo;
    setJob({
      ...job,
      editJobId: _id,
      position: position,
      company: company,
      jobLocation: jobLocation,
      jobType: jobType,
      status: status,
    });
  };

  const editJob = async (job: TJobEdit) => {
    const { editJobId } = job;
    try {
      const token = user?.token;
      await customFetch.patch(`/jobs/${editJobId}`, job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      clearJob();
    } catch (error) {
      console.log(error);
    }
  };

  

  const clearJob = () => {
    setJob({
      company: "",
      position: "",
      jobLocation: "",
      status: "pendente",
      jobType: "integral",
      jobOptions: ["integral", "remoto", "meio período", "estágio"],
      statusOptions: ["pendente", "entrevista", "recusado"],
      editJobId: "",
    });
    setIsEditing(false);
  };

  return (
    <JobContext.Provider
      value={{
        job,
        setJob,
        isEditing,
        setIsEditing,
        isLoading,
        createJob,
        setEditJob,
        editJob,
        clearJob
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  return useContext(JobContext);
};
