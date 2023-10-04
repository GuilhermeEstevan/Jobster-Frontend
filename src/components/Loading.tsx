export type TLoading = {
  center: boolean;
};

const Loading = ({ center }: TLoading) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};
export default Loading;
