import Wrapper from "../../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { TJobsFound } from "../../interface/jobSearch";
import JobInfo from "./jobInfo";
import { Link } from "react-router-dom";
import moment from "moment";
import { useJobContext } from "../../Context/Job/jobContext";
import { useJobSearchContext } from "../../Context/Job/jobSearchContext";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}: TJobsFound) => {
  const date = moment(createdAt).format("DD/MM/YYYY");
  const jobInfo = {
    _id,
    position,
    company,
    jobLocation,
    jobType,
    createdAt,
    status,
  };
  const { setEditJob } = useJobContext();
  const { deleteJob } = useJobSearchContext();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{position.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer className="actions">
          <Link
            to="/addJob"
            className="btn edit-btn"
            onClick={() => {
              setEditJob(jobInfo);
            }}
          >
            editar
          </Link>
          <button
            type="button"
            className="btn delete-btn"
            onClick={() => {
              deleteJob(_id);
            }}
          >
            excluir
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
