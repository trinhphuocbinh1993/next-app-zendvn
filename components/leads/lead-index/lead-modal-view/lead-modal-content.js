import LeadModalBody from "./lead-modal-body";
import LeadModalHead from "./lead-modal-head";

function LeadModalContent(props) {
  const { data, showLeadModal, setShowLeadModal } = props;

  return (
    <div>
      <LeadModalHead
        data={data}
        showLeadModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
      />
      <hr />
      <LeadModalBody data={data} />
    </div>
  );
}

export default LeadModalContent;
