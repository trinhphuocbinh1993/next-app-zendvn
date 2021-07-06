import {
  DocumentReportIcon,
  PencilAltIcon,
  PlusIcon as PlusIconSolid,
  TrashIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import LeadModalView from "./lead-modal-view/lead-modal-view";
import { useState } from "react";
import { getById } from "../../../lib/common-fetch";
import ButtonDeleteLead from "./lead-item/button-delete-lead";

function LeadItem(props) {
  const { leads, allLeadStatus } = props;

  const [showLeadModal, setShowLeadModal] = useState(false);
  const [dataLeadModal, setDataLeadModal] = useState("");
  function formattedDate(date) {
    const dateConvert = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return dateConvert;
  }

  function showLeadModalHandler(id) {
    getById("/leads/view/", id).then((x) => {
      if (x.data) {
        setDataLeadModal(x.data);
        setShowLeadModal(true);
      }
    });
  }
  return (
    <>
      {leads.map((x) => (
        <tr key={x.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {x.salutation} {x.first_name} {x.last_name}
            </div>
            <div className="text-sm text-gray-500">
              {x.email ? x.email : <i>null</i>}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {x.billing_address ? x.billing_address : <i>null</i>}
            </div>
            <div className="text-sm text-gray-500">
              Phone: {x.phone ? x.phone : <i>null</i>} (ext:{" "}
              {x.ext ? x.ext : <i>null</i>}) - Mobile:{" "}
              {x.mobile ? x.mobile : <i>null</i>}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              Created date: {formattedDate(x.created_date)}
            </div>
            <div className="text-sm text-gray-500">
              Updated date:{" "}
              {x.updated_date ? formattedDate(x.created_date) : <i>null</i>}
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center">
            <span className="px-2 inline-flex  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {x.status}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            {/* <Link href={`/leads/${x.id}`}> */}
            <button
              type="button"
              className="inline-flex items-center p-1 m-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => showLeadModalHandler(x.id)}
            >
              <DocumentReportIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* </Link> */}
            <Link href={`/leads/edit/${x.id}`}>
              <button
                type="button"
                className="inline-flex items-center p-1 m-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PencilAltIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            <ButtonDeleteLead id={x.id} />
          </td>
        </tr>
      ))}
      <LeadModalView
        allLeadStatus={allLeadStatus}
        dataLeadModal={dataLeadModal}
        showLeadModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        data={leads}
      />
    </>
  );
}

export default LeadItem;
