import PostItem from './postItem'

function PostList(props) {
    const { list } = props
    console.log("list ==>", list)
    return (
        <ul>
            {list.map((x) => {
                return (
                    <PostItem key={x._id} item={x}/>
                )
            })}
        </ul>
    )
}

export default PostList