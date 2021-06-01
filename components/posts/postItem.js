import Link from "next/link";

function PostItem(props) {
  return (
    <Link href="/">
      <a>
        <div>
          <h1>{props.item.title}</h1>
        </div>
      </a>
    </Link>
  );
}

export default PostItem;
