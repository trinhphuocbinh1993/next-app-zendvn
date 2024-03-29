import { getAll } from "../../lib/common-fetch";
import LeadForm from "../../components/leads/lead-form";

function LeadCreatePage(props) {
  return <LeadForm data={props} />;
}

export async function getStaticProps() {
  const allCustomers = await getAll("/customers");
  const allCounty = await getAll("/county");
  const allCountry = await getAll("/country");
  const allLeadType = await getAll("/lead-info/lead-type");
  const allLeadSource = await getAll("/lead-info/lead-source");
  const allSalesArea = await getAll("/lead-info/sales-area");
  const allProductType = await getAll("/lead-info/product-type");
  const allMainInterest = await getAll("/lead-info/main-interest");
  const allUsers = await getAll("/lead-info/users");
  const allSalesPerson = await getAll("/lead-info/sales-person");
  const allSurveyors = await getAll("/lead-info/surveyors");
  const allTemperature = await getAll("/lead-info/temperature");
  const allPipeline = await getAll("/pipeline");
  const leadPipeline = allPipeline.find(
    (x) => x.name === "Standard Lead Pipeline"
  );
  return {
    props: {
      allCustomers,
      allCounty,
      allCountry,
      allLeadType,
      allLeadSource,
      allSalesArea,
      allProductType,
      allMainInterest,
      allUsers,
      allSalesPerson,
      allSurveyors,
      allTemperature,
      leadPipeline,
    },
    revalidate: 600,
  };
}

export default LeadCreatePage;
