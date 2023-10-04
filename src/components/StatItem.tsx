import Wrapper from "../assets/wrappers/StatItem";

export type TStatItem = {
  count: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  bcg: string;
};

const StatItem = ({ count, title, icon, color, bcg }: TStatItem) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
export default StatItem;
