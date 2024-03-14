import { useState } from "react";
import "../../css/combobox.css";

function ComboBox({ title, values = null, value, setFieldValue, fieldValue }) {
  // values = [
  //     {
  //         text: "hola",
  //         value: "saludo"
  //     }
  // ]

  const handleSelectCategoria = (e) => {
    setFieldValue(fieldValue, e.target.value);
  };

  return (
    <>
      <label className="combobox__title">{title}</label>

      <select
        className="combobox__select"
        value={value}
        onChange={(e) => handleSelectCategoria(e)}
      >
        {values === null || values.length === 0 ? (
          <option value="" disabled>
            Vaya! Parace que no hay un producto
          </option>
        ) : (
          <>
            <option value="" disabled>
              Seleccione una opción
            </option>
            {(values.length != 0 || values != null) &&
              values.map((item, index) => (
                <option
                  className="combobox__option"
                  value={item.value}
                  key={index}
                  onClick={() => {
                    handleSelectCategoria(item.value);
                  }}
                >
                  {item.text}
                </option>
              ))}
          </>
        )}
      </select>
    </>
  );
}

export default ComboBox;