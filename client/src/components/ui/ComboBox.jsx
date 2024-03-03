import { useState } from "react";
import "../../css/combobox.css";

function ComboBox({ title, values }) {
  // values = [
  //     {
  //         text: "hola",
  //         value: "saludo"
  //     }
  // ]

  const [value, setValues] = useState("");

  return (
    <>
      <label className="combobox__title">{title}</label>

      <select
        className="combobox__select"
        value={value}
        onChange={(e) => setValues(e.target.value)}
      >
        <option value="" disabled>
          Seleccione una opción
        </option>
        {values.map((item, index) => (
          <option className="combobox__option" value={item.value} key={index}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default ComboBox;
