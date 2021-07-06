import { createContext, useState } from "react";
import { getAll } from "../lib/common-fetch";

export const LeadsContext = createContext();

function LeadsProvider(props) {
  const [leads, setLeads] = useState([]);
  const [leadStatus, setLeadStatus] = useState([]);
  return (
    <LeadsContext.Provider
      value={{
        leads,
        setLeads,
        leadStatus,
        setLeadStatus,
      }}
    >
      {props.children}
    </LeadsContext.Provider>
  );
}

export default LeadsProvider;
