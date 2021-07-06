import { useState } from "react";
import Select from "react-select";
import { getById } from "../../../lib/common-fetch";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// installAddress={installAddress}
// getInstallAddress={(event) => setInstallAddress(event)}

function ReactSelect(props) {
  const { value, onChange, data, id, setAddressPart, isDisabled } = props;

  const dataFilter = data.map((x) => ({
    value: x.id,
    label: x.first_name + " " + x.last_name,
  }));

  // const [selectedOption, setSelectedOption] = useState(null);

  function inputHandleChange(selectedOption) {
    //setSelectedOption(selectedOption);
  }
  function handleChange(selectedOption) {
    onChange(selectedOption);
    if (id === "customer") {
      getById("/customers/install-address/", selectedOption.value)
        .then((data) => {
          setAddressPart(data);
        })
        .catch((err) => {
          setAddressPart("");
        });
    }
  }

  return (
    <Select
      instanceId={props.id}
      value={value}
      options={dataFilter}
      onChange={handleChange}
      onInputChange={inputHandleChange}
      isDisabled={isDisabled}
    />
  );
}
export default ReactSelect;
