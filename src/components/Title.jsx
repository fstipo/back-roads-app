const Title = (props) => {
  const { title, altTitle } = props;
  return (
    <div className="section-title">
      <h2>
        {title} <span>{altTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
