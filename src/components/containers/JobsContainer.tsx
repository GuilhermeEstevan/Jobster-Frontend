import { useEffect } from "react";
import Wrapper from "../../assets/wrappers/JobsContainer";
import { useJobSearchContext } from "../../Context/Job/jobSearchContext";
import { TJobsFound } from "../../interface/jobSearch";
import Job from "../jobs/job";
import Loading from "../Loading";
import PageBtn from "./PageBtn";

const JobsContainer = () => {
  const { jobsFilters, getAllJobs, isLoading } = useJobSearchContext();
  const { page, search, searchJobType, searchStatus, sort, numOfPages } =
    jobsFilters;
  const { jobs } = jobsFilters;
  // console.log(jobs);

  useEffect(() => {
    getAllJobs();
  }, [page, search, searchJobType, searchStatus, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>no Jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job: TJobsFound) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtn />}
    </Wrapper>
  );
};
export default JobsContainer;
