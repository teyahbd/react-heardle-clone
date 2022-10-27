import InfoButton from "./InfoButton";

const Header = () => {
  return (
    <div id="header">
      <InfoButton type="info" />
      <h1>Heardle</h1>
      <InfoButton type="help" />
    </div>
  );
};

export default Header;
