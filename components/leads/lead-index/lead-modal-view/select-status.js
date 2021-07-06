import { useContext, useState } from "react";
import { LeadsContext } from "../../../../context/leads-provider";
import NotificationContext from "../../../../context/notification-provider";
import { updateOne } from "../../../../lib/common-fetch";

export default function SelectStatus(props) {
  const { id, status, showLeadModal, setShowLeadModal } = props;
  const [valueSelect, setValueSelect] = useState(status ? status : "");

  const { leads, setLeads, leadStatus, setLeadStatus } =
    useContext(LeadsContext);
  const notificationCtx = useContext(NotificationContext);

  function onChangeHandler(newValue) {
    notificationCtx.showNotification({
      title: "Please wait a sec...",
      message: "Changing lead status !",
      status: "pending",
    });

    if (newValue) {
      const body = {
        newValue: newValue,
      };
      updateOne(`/leads/edit/status/`, body, id).then((res) => {
        if (res.success) {
          setValueSelect(newValue);
          setLeads((prevLeads) => {
            const existingLeads = [...prevLeads];
            const existingLead = existingLeads.find((x) => x.id === id);
            const newStatusName = leadStatus.find((x) => {
              return x.id === parseInt(newValue);
            });
            existingLead.status = newStatusName.name;
            return existingLeads;
          });
          setShowLeadModal(false);
          notificationCtx.showNotification({
            title: "Success!",
            message: "Lead Status Changed!",
            status: "success",
          });
        } else {
          notificationCtx.showNotification({
            title: "Error!",
            message: "Something went wrong!",
            status: "error",
          });
        }
      });
    }
  }

  return (
    <select
      id="location"
      name="location"
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      onChange={(e) => onChangeHandler(e.target.value)}
      value={valueSelect}
    >
      {leadStatus.map((x) => {
        return (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        );
      })}
    </select>
  );
}
