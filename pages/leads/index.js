import { useContext, useEffect } from "react";
import AllLeads from "../../components/leads/lead-index/all-leads";
import CreateLeadButton from "../../components/leads/lead-index/create-lead-button";
import { LeadsContext } from "../../context/leads-provider";
import { getAll } from "../../lib/common-fetch";

function LeadsPage(props) {
  const { allLeads, allLeadStatus } = props;

  const { leads, setLeads, leadStatus, setLeadStatus } =
    useContext(LeadsContext);
  useEffect(() => {
    setLeads(allLeads);
    setLeadStatus(allLeadStatus);
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CreateLeadButton />
        <AllLeads leads={leads} allLeadStatus={leadStatus} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await getAll("/leads");
  const allLeads = response.data;
  const allLeadStatus = await getAll("/pipeline/lead-pipeline");
  return {
    props: { allLeads, allLeadStatus }, // will be passed to the page component as props
    revalidate: 600,
  };
}

export default LeadsPage;
