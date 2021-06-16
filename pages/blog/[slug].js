import PostContent from "../../components/posts/post-detail/post-content";
import DUMMY_DATA from "../../dummy_data.json";

function PostDetailPage(props) {
  const { post } = props;
  if (post) {
    return <PostContent post={post} />;
  }
  else {
    return <p>Loading</p>;
  }
}

export async function getStaticPaths() {
  const allData = DUMMY_DATA;
  const slugs = allData.map((post) => post.slug);
  const params = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    //paths: [{ params: { slug: "dog-1" } }, { params: { slug: "dog-2" } }],
    //paths: [],
     paths: params,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const allData = DUMMY_DATA;
  const post = allData.find((post) => post.slug === slug);
  return {
    props: { post }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export default PostDetailPage;
