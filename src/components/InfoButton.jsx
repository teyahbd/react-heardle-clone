import InfoBox from "./InfoBox";
import { useState } from "react";

const InfoButton = ({ type }) => {
  let icon = "?";

  if (type === "info") {
    icon = "i";
  }
  const [isShowing, setIsShowing] = useState(false);

  function showModal() {
    setIsShowing(true);
  }

  function hideModal() {
    setIsShowing(false);
  }
  return (
    <>
      <InfoBox
        isShowing={isShowing}
        hideModal={hideModal}
        type={type}
      ></InfoBox>
      <button className="info-button" id={`${type}-button`} onClick={showModal}>
        {icon}
      </button>
    </>
  );
};

export default InfoButton;
