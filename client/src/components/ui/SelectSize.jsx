import { useState } from "react";
import "../../css/selectsize.css";

const defaultValues = [1, 2, 3, 4, 5, 6];

function SelectSize({
  title,
  values = defaultValues,
  setFieldValue,
  fieldValue,
}) {
  const [selectedOption, setSelectedOption] = useState("");

  if (values == null) {
    values = defaultValues;
  }

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    setFieldValue(fieldValue, option);
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