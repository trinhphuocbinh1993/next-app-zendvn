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
  const { data, id, value, onChange, editPage } = props;
  const engCounty = data
    .filter((x) => x.country === "England")
    .map((x) => ({
      value: x.id,
      label: x.name,
    }));

  const walesCounty = data
    .filter((x) => x.country === "Wales")
    .map((x) => ({
      value: x.id,
      label: x.name,
    }));

  const scotlandCounty = data
    .filter((x) => x.country === "Scotland")
    .map((x) => ({
      value: x.id,
      label: x.name,
    }));

  const irelandCounty = data
    .filter((x) => x.country === "Northern Ireland")
    .map((x) => ({
      value: x.id,
      label: x.name,
    }));

  const groupedOptions = [
    {
      label: "England",
      options: engCounty,
    },
    {
      label: "Wales",
      options: walesCounty,
    },
    {
      label: "Scotland",
      options: scotlandCounty,
    },
    {
      label: "Northern Ireland",
      options: irelandCounty,
    },
  ];

  //const [selectedOption, setSelectedOption] = useState(null);

  // function inputHandleChange(selectedOption) {}
  function handleChange(selectedOption) {
    onChange(selectedOption);
  }

  return (
    <div>
      <label
        htmlFor="installCounty"
        className="block text-sm font-medium text-gray-700"
      >
        Install County
      </label>
      <Select
        instanceId={id}
        options={groupedOptions}
        onChange={handleChange}
        // onInputChange={inputHandleChange}
        value={
          editPage
            ? data
                .filter((x) => x.id === value.value)
                .map((x) => ({
                  value: x.id,
                  label: x.name,
                }))
            : value
        }
      />
    </div>
  );
}
export default RsCounty;
