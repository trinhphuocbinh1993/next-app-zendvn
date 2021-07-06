import LeadDetail from "../../../components/leads/lead-index/lead-detail/lead-detail-body";
import { getAll, getById } from "../../../lib/common-fetch";

function EditPage(props) {
  return <LeadDetail data={props} />;
}

export async function getStaticPaths() {
  const res = await getAll("/leads");
  const leads = res.data;
  const paths = leads.map((lead) => ({
    params: { id: lead.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await getById("/leads/", params.id);
  const lead = res.data;
  const allCustomers = await getAll("/customers");
  const allCounty = await getAll("/county");
  const allCountry = await getAll("/country");
  const allLeadType = await getAll("/lead-info/lead-type");
  const allLeadSource = await getAll("/lead-info/lead-source");
  const allLeadSubSource = await getAll("/lead-info/lead-sub-source");
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
      lead,
      allCustomers,
      allCounty,
      allCountry,
      allLeadType,
      allLeadSource,
      allLeadSubSource,
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

export default EditPage;
