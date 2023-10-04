import Wrapper from "../../assets/wrappers/JobInfo";

export type TJobInfo = {
  icon: React.ReactElement;
  text: string;
};

const JobInfo = ({ icon, text }: TJobInfo) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};
export default JobInfo;
