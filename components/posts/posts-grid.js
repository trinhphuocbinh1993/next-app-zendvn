import PostItem from './post-item';
import classes from './post-item.module.css'

function PostsGrid(props) {
    const { posts } = props;
    return (
        <ul className={classes.grid}>
            {posts.map(post => {
                return (
                    <PostItem key={post.slug} post={post}/>
                )
            })}
        </ul>
    )
}

export default PostsGrid;