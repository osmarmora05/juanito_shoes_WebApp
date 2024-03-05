import { useState } from "react";
import { CheckIcon } from "./Icons";
import "../../css/selectcolor.css";

const defaultValues = [
  {
    name: "red",
    color: "#f00", // hex
  },
  {
    name: "green",
    color: "#0f0",
  },
  {
    name: "blue",
    color: "#00f",
  },
];

function SelectColor({
  title,
  values = defaultValues,
  setFieldValue,
  fieldValue,
}) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
    setFieldValue(fieldValue, color);
  };

  if (values == null) {
    values = defaultValues;
  }

  return (
    <>
      <label className="pallette__title">{title}</label>
      <div className="pallette__box">
        {values.map((item, index) => (
          <button
            type="button"
            className="pallette__outline"
            key={index}
            style={{
              border:
                selectedColor === item.name
                  ? `1px solid ${item.color}`
                  : "none",
            }}
            onClick={() => handleSelectedColor(item.name)}
          >
            <span
              style={{ backgroundColor: item.color }}
              className="pallette__item"
              key={index}
            >
              {selectedColor === item.name && <CheckIcon />}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

export default SelectColor;