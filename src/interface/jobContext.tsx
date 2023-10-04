import { TJobsFound } from "./jobSearch";

export type TJob = {
  position: string;
  company: string;
  jobLocation: string;
  status: string;
  statusOptions: string[];
  jobType: string;
  jobOptions: string[];
  editJobId: string;
};

export type TJobEdit = {
  position: string;
  company: string;
  jobLocation: string;
  status: string;
  jobType: string;
  editJobId: string;
};

export type TJobContext = {
  job: TJob;
  setJob: React.Dispatch<React.SetStateAction<TJob>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  createJob: (job: TJob) => void;
  setEditJob: (jobInfo: TJobsFound) => void;
  editJob: (job: TJobEdit) => void;
  clearJob: () => void;
};

export type TJobContextProps = {
  children: React.ReactNode;
};
