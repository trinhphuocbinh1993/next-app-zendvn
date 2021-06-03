import PostHeader from './post-header';
import classes from './post-content.module.css';


function PostContent(props) {
    const { slug, title, image, excerpt, date } = props.post;
    const imagePath = `/images/posts/${slug}/${image}`
    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            {date}
            {excerpt}
        </article>
    )
}

export default PostContent;