import { useState } from "react";
import { CheckIcon } from "./Icons";
import "../../css/selectcolor.css";

const defaultValues = [
  {
      name: "red",
      color: "#f00" // hex
  },
  {
    name: "green",
    color: "#0f0"
  },
  {
      name: "blue",
      color: "#00f"
  }
];


function SelectColor({ title, values = defaultValues }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <label className="pallette__title">{title}</label>
      <div className="pallette__box">
        {values.map((item, index) => (
          <button type="button"
            className="pallette__outline"
            key={index}
            style={{
              border:
                selectedOption === item.name
                  ? `1px solid ${item.color}`
                  : "none",
            }}
            onClick={() => handleSelectedOption(item.name)}
          >
            <span
              style={{ backgroundColor: item.color }}
              className="pallette__item"
              key={index}
            >
              {selectedOption === item.name && <CheckIcon/>}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

export default SelectColor;