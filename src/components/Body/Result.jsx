const Result = ({ trackData }) => {
  return (
    <div>
      <img src={trackData[2]} width="100px" alt="album cover" />
      <h3>{trackData[0]}</h3>
      <h3>{trackData[1]}</h3>
    </div>
  );
};

export default Result;
