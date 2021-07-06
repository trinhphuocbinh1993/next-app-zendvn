
import Select from "react-select";

function RsCounty(props) {
  const { data, id, value, onChange } = props;

  const dataFilter = data.map((x) => ({
    value: x.id,
    label: x.name,
  }));

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
        value={dataFilter.filter((x) => x.value === value.value)}
      />
    </div>
  );
}
export default RsCounty;
