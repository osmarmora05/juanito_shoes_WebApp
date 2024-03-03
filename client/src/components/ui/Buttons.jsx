import "../../css/buttons.css";
import { CloseIcon } from "./Icons";

export function PrimaryButton({ text, handleOnClick }) {
  return (
    <button className="primary-btn" onClick={() => handleOnClick}>
      {text}
    </button>
  );
}

export function SecondaryButton({ text, handleOnClick }) {
  return (
    <button
      className="secondary-btn"
      onClick={() => {
        handleOnClick;
      }}
    >
      {text}
    </button>
  );
}

export function CloseButton({ handleOnClick, className }) {
  return (
    <button className={"close-btn" + " " + className} onClick={handleOnClick}>
      <CloseIcon />
    </button>
  );
}