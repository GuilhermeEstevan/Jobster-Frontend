import { createContext, useContext, useState } from "react";
import {
  TJobSearchContext,
  TJobSearchContextProps,
  TJobsFound,
  TStats,
} from "../../interface/jobSearch";
import customFetch from "../../Utils/axios";
import { useUserContext } from "../User/UserContext";
import { toast } from "react-toastify";

const JobSearchContext = createContext({} as TJobSearchContext);

export const JobSearchProvider = ({ children }: TJobSearchContextProps) => {
  const initialFilterState = {
    search: "",
    searchStatus: "todos",
    searchJobType: "todos",
    sort: "mais recente",
    sortOptions: ["mais recente", "mais antigo", "a-z", "z-a"],
    jobOptions: ["integral", "remoto", "meio período", "estágio"],
    statusOptions: ["pendente", "entrevista", "recusado"],
  };

  const initialState = {
    jobs: [] as TJobsFound[],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    ...initialFilterState,
  };

  const [jobsFilters, setJobsFilters] = useState(initialState);
  const { user, checkForUnauthorizedResponde } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [jobStatus, setJobsStatus] = useState<TStats>({
    monthlyApplications: [],
    stats: {
      pendente: 0,
      recusado: 0,
      entrevista: 0,
    },
  });
  const token = user?.token;

  const getAllJobs = async () => {
    const { search, page, searchStatus, searchJobType, sort } = jobsFilters;
    let url = `/jobs?status=${searchStatus}&jobType=${searchJobType}&sort=${sort}&page=${page}`;
    if (search) {
      url = `${url}&search=${search}`;
    }

    try {
      setIsLoading(true);
      const response = await customFetch.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobsFilters({
        ...jobsFilters,
        jobs: response.data.jobs,
        numOfPages: response.data.numOfPages,
        totalJobs: response.data.totalJobs,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deleteJob = async (jobId: string) => {
    try {
      setIsLoading(true);
      await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllJobs();
      toast.warn("Trabalho Deletado!");
      setIsLoading(false);
    } catch (error) {
      if (checkForUnauthorizedResponde(error)) {
        return;
      }
      console.log(error);
      setIsLoading(false);
    }
  };

  const showStats = async () => {
    getAllJobs();
    try {
      setIsLoading(true);
      const response = await customFetch.get("/jobs/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobsStatus({
        ...jobStatus,
        stats: response.data.defaultStats,
        monthlyApplications: response.data.monthlyApplications,
      });
      setIsLoading(false);
    } catch (error: any) {
      if (checkForUnauthorizedResponde(error)) {
        return;
      }
      toast.error(error.response.data);
      setIsLoading(false);
    }
  };

  const changePage = (newPage: number) => {
    setJobsFilters({
      ...jobsFilters,
      page: newPage,
    });
  };

  return (
    <JobSearchContext.Provider
      value={{
        getAllJobs,
        jobsFilters,
        initialFilterState,
        setJobsFilters,
        isLoading,
        deleteJob,
        jobStatus,
        showStats,
        changePage,
      }}
    >
      {children}
    </JobSearchContext.Provider>
  );
};

export const useJobSearchContext = () => {
  return useContext(JobSearchContext);
};
