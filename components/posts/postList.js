// import PostItem from "./postItem";

// function PostList(props) {
//     console.log(props)
//   const { productList } = props;
//   return (
//     <ul>
//       {/* {productList.map((x) => {
//         return <PostItem key={x._id} item={x} />;
//       })} */}
//     </ul>
//   );
// }

// export async function getPosts() {
//     const res = await fetch(`https://binh-node-pg.herokuapp.com/todos`);
    
//     const data = await res.json();
//     console.log("data =>> ", data)
//   return data;
// }

// export async function getStaticProps() {
//   const data = await getPosts();
// console.log(data)
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       productList: data,
//     }, // will be passed to the page component as props
//     revalidate: 600,
//   };
// }

// export default PostList;
