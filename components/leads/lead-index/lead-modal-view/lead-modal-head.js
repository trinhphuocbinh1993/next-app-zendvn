import { Dialog } from "@headlessui/react";
import SelectStatus from "./select-status";

function LeadModalHead(props) {
  const { data, showLeadModal, setShowLeadModal } = props;

  return (
    <div className="flex space-x-4 items-center justify-between py-4">
      <div className="flex-initial">
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-gray-900"
        >
          #{data.id}
        </Dialog.Title>
      </div>
      <div className="flex-initial">
        <SelectStatus
          id={data.id}
          status={data.status}
          showLeadModal={showLeadModal}
          setShowLeadModal={setShowLeadModal}
        />
      </div>
    </div>
  );
}

export default LeadModalHead;
