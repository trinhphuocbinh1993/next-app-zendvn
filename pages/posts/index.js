import Head from 'next/head';
import { Fragment } from "react";
import DUMMY_DATA from '../../dummy_data.json'
import AllPosts from '../../components/posts/all-posts'

function AllPostPage() {
  return (
    <Fragment>
      <Head>
        <title>Post Page</title>
        <meta name="description" content="This page for contain list of post" />
      </Head>
      <AllPosts posts={DUMMY_DATA}/>
    </Fragment>
  );
}

export default AllPostPage;
