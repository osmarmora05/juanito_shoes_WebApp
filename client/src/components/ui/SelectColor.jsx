import { useState } from "react";
import { CheckIcon } from "./Icons";
import "../../css/selectcolor.css";

function SelectColor({ title, values }) {
  // const values = [
  //     {
  //         name: "red",
  //         color: "#f00" -- hex
  //     }
  // ]

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <label className="pallette__title">{title}</label>
      <div className="pallette__box">
        {values.map((item, index) => (
          <button
            className="pallette__outline"
            key={index}
            style={{
              border:
                selectedOption === item.name
                  ? `1px solid ${item.color}`
                  : "none",
                // backgroundColor: item.color
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