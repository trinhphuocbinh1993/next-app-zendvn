import { PlusIcon as PlusIconSolid, TrashIcon } from "@heroicons/react/solid";
import { useContext, useEffect, useState } from "react";
import { LeadsContext } from "../../../../context/leads-provider";
import NotificationContext from "../../../../context/notification-provider";
import { deleteOne } from "../../../../lib/common-fetch";

function ButtonDeleteLead(props) {
  const { id } = props;
  const { leads, setLeads, leadStatus, setLeadStatus } =
    useContext(LeadsContext);
  const notificationCtx = useContext(NotificationContext);

  function deleteLeadHandler(event) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Please wait a sec...",
      message: "We're deleting!",
      status: "pending",
    });

    deleteOne("/leads/", id).then((x) => {
      if (x.success) {
        setLeads((prevLeads) => {
          return prevLeads.filter((lead) => lead.id !== id);
        });
        notificationCtx.showNotification({
          title: "Success!",
          message: "Lead Deleted!",
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
  return (
    <button
      type="button"
      className="inline-flex items-center p-1 m-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      onClick={deleteLeadHandler}
    >
      <TrashIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default ButtonDeleteLead;
