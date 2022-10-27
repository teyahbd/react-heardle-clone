const InfoBox = ({ hideModal, isShowing, type }) => {
  const showHideClassName = isShowing
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {type === "info" ? <h2>About</h2> : <h2>How to Play</h2>}
        <button type="button" onClick={hideModal} id="close-button">
          X
        </button>

        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          sollicitudin id metus ac euismod. Quisque magna massa, sollicitudin
          quis augue eu, tristique euismod nibh. Nulla venenatis libero eu
          ultrices semper.
        </p>
      </section>
    </div>
  );
};

export default InfoBox;
