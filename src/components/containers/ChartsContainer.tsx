import { useJobSearchContext } from "../../Context/Job/jobSearchContext";
import Wrapper from "../../assets/wrappers/ChartsContainer";
import BarChart from "../chart/BarChart";

const ChartsContainer = () => {
  const { jobStatus } = useJobSearchContext();
  const { monthlyApplications: data } = jobStatus;

  return (
    <Wrapper>
      <h4>Candidaturas Mensais</h4>
      <BarChart data={data} />
    </Wrapper>
  );
};
export default ChartsContainer;
