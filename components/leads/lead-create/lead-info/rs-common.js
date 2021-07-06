import Select from "react-select";
import { getById } from "../../../../lib/common-fetch";

function RsCommon(props) {
  const { title, data, id, onChange, value, setSubSourcePartToStates } = props;
  let dataFilter = null;

  if (data) {
    if (
      id === "leadTakenBy" ||
      id === "salesPerson" ||
      id === "surveyors" ||
      id === "taskFor"
    ) {
      const active = data
        .filter((x) => x.status === true)
        .map((x) => ({
          value: x.id,
          label: x.name,
        }));
      const app = data
        .filter((x) => x.status === false)
        .map((x) => ({
          value: x.id,
          label: x.name,
        }));
      let labelActive;
      let labelApp;
      if (id === "leadTakenBy" || id === "taskFor") {
        labelActive = "Active Users";
        labelApp = "App Users";
      }
      if (id === "salesPerson") {
        labelActive = "Active Sales People";
        labelApp = "App Only Sales People";
      }
      if (id === "surveyors") {
        labelActive = "Active Surveyors";
        labelApp = "App Surveyors";
      }
      dataFilter = [
        {
          label: labelActive,
          options: active,
        },
        {
          label: labelApp,
          options: app,
        },
      ];
    } else {
      dataFilter = data.map((x) => ({
        value: x.id,
        label: x.name,
      }));
    }
  }

  function handleChange(selectedOption) {
    onChange(selectedOption);
    if (id === "leadSource") {
      getById("/lead-info/lead-sub-source/", selectedOption.value)
        .then((x) => {
          console.log(x);
          setSubSourcePartToStates(x);
        })
        .catch((err) => {
          setSubSourcePartToStates(null);
        });
    }
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <Select
          value={
            id === "installCountry"
              ? dataFilter.filter((x) => x.value === value.value)
              : value
          }
          instanceId={id}
          options={dataFilter}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
export default RsCommon;
