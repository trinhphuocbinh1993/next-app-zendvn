import { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/Async";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// installAddress={installAddress}
// getInstallAddress={(event) => setInstallAddress(event)}

function RsCounty(props) {
  const { data, id, value, onChange } = props;

  const dataFilter = data.map((x) => ({
    value: x.id,
    label: x.name,
  }));

  // function inputHandleChange(selectedOption) {
  //   console.log(`inputHandleChange:`, selectedOption);
  // }
  function handleChange(selectedOption) {
    onChange(selectedOption);
  }

  return (
    <div>
      <label
        htmlFor="installCountry"
        className="block text-sm font-medium text-gray-700"
      >
        Install Country
      </label>
      <Select
        instanceId={id}
        options={dataFilter}
        onChange={handleChange}
        // onInputChange={inputHandleChange}
        value={dataFilter.filter((x) => x.value === value.value)}
      />
    </div>
  );
}
export default RsCounty;
