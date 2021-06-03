import DUMMY_DATA from '../dummy_data.json'

export async function getPostData(slug) {
    const allPost = await DUMMY_DATA;
    const postBySlug = await allPost.find(post => { post.slug === slug });
    return postBySlug;
}

export async function getAllPostData() {
    const allPost = await DUMMY_DATA;
    return allPost;
}