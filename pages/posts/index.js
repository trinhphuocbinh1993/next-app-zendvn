import classes from "./posts.module.css";
import Head from 'next/head';
import PostList from '../../components/posts/postList'

function PostPage(props) {
  const { data } = props
console.log("data ==>", data)
  return (
    <div>
      <Head>
        <title>Post Page</title>
        <meta name="description" content="This page for contain list of post" />
      </Head>
      <div className={classes.postList}>
        <h1>Post Page</h1>
        <PostList list={data}/>
        </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://binh-node-api.herokuapp.com/posts`)
  const data = await res.json()

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
    revalidate: 600
  }
}
export default PostPage;
