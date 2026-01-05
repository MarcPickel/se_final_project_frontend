import "./JoinButton.css";

function JoinButton({ onSignUpClick }) {
  return (
    <>
      <button className="join__button" type="button" onClick={onSignUpClick}>
        JOIN TODAY
      </button>
    </>
  );
}

export default JoinButton;
