import "../../css/inputs.css";

export function TextBox({ title, name, placeHolder, handleOnchange }) {
  return (
    <>
      <label className="textbox__label">{title}</label>
      <input
        className="textbox__input"
        type="text"
        name={name}
        placeholder={placeHolder}
        onChange={handleOnchange}
      />
    </>
  );
}

export function TextArea({ title, name, placeHolder, handleOnchange }) {
  return (
    <>
      <label className="textarea__label">{title}</label>
      <textarea
        rows={5}
        className="textarea__input"
        name={name}
        placeholder={placeHolder}
        onChange={handleOnchange}
      />
    </>
  );
}