import { useJobSearchContext } from "../../Context/Job/jobSearchContext";
import ChartsContainer from "../../components/containers/ChartsContainer";
import StatsContainer from "../../components/containers/StatsContainer";
import { useEffect } from "react";

const Stats = () => {
  const { isLoading, jobStatus, showStats } = useJobSearchContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <StatsContainer />
      {jobStatus.monthlyApplications.length > 0 ? <ChartsContainer /> : null}
    </>
  );
};
export default Stats;
