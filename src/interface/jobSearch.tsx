export type TJobSearchContext = {
  getAllJobs: () => void;
  jobsFilters: TJobSearchFilters;
  setJobsFilters: React.Dispatch<React.SetStateAction<TJobSearchFilters>>;
  initialFilterState: TJobInitialState;
  isLoading: boolean;
  deleteJob: (jobId: string) => void;
  jobStatus: TStats;
  showStats: () => void;
  changePage: (newPage: number) => void;
};

export type TJobSearchContextProps = {
  children: React.ReactNode;
};

export type TJobInitialState = {
  search: string;
  searchStatus: string;
  searchJobType: string;
  sort: string;
  sortOptions: string[];
  jobOptions: string[];
  statusOptions: string[];
};

export type TJobSearchFilters = {
  search: string;
  searchStatus: string;
  searchJobType: string;
  sort: string;
  sortOptions: string[];
  jobOptions: string[];
  statusOptions: string[];
  jobs: TJobsFound[];
  totalJobs: number;
  numOfPages: number;
  page: number;
};

export type TJobsFound = {
  position: string;
  company: string;
  jobLocation: string;
  status: string;
  jobType: string;
  createdAt: Date;
  _id: string;
};

export type TStats = {
  stats: TDefaultStats;
  monthlyApplications: TMonthlyApplications[];
};

export type TMonthlyApplications = {
  date: string;
  count: number;
};
export type TDefaultStats = {
  pendente: number;
  recusado: number;
  entrevista: number;
};
