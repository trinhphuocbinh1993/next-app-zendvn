import LeadDetail from "../../components/leads/lead-index/lead-detail/lead-detail-body";
import { getAll, getById } from "../../lib/common-fetch";

function LeadDetailPage(props) {
  const { lead } = props;
  return <LeadDetail lead={lead} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await getById("/leads/", id);
  const lead = res ? res.data : "";

  return { props: { lead } };
}

// export async function getStaticPaths() {
//   const res = await getAll("/leads");
//   const leads = res ? res.data : "";
//   const paths = leads.map((lead) => ({
//     params: { id: lead.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const res = await getById("/leads/", params.id);
//   const lead = res ? res.data : "";
//   console.log(`Building slug: ${params.id}`);

//   return { props: { lead }, revalidate: 600 };
// }

export default LeadDetailPage;
