import { useState } from "react";
import "../../css/selectsize.css";

function SelectSize({ title, values }) {
  // values = [1,2,3,4,5,6]

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <label className="size-range__label">{title}</label>
      <div className="size-range">
        {values.map((item, index) => (
          <div
            className={`size-range__item ${
              selectedOption === item ? "size-range__item--selected" : ""
            }`}
            key={index}
            onClick={() => {
              handleSelectedOption(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectSize;
