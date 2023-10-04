import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../../assets/wrappers/StatsContainer";
import { useJobSearchContext } from "../../Context/Job/jobSearchContext";
import StatItem from "../StatItem";

const StatsContainer = () => {
  const { jobStatus } = useJobSearchContext();
  const { stats } = jobStatus;

  const defaultStats = [
    {
      title: "pendentes",
      count: stats.pendente || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "entrevistas agendadas",
      count: stats.entrevista || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Recusados",
      count: stats.recusado || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
