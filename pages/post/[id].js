import fetch from "isomorphic-unfetch";
import Link from "next/link";

const postsJson = `https://jsonplaceholder.typicode.com/posts`;
const usersJson = `https://jsonplaceholder.typicode.com/users`;
const getPostJson = id => `${postsJson}/${id}`;
const getUserJson = id => `${usersJson}/${id}`;

const Post = ({
  post: { id, title, body },
  user: { id: userId, name, username }
}) => (
  <div>
    <Link href="/">
      <a>Back to home</a>
    </Link>
    <h1>
      {title}
    </h1>
    <h2>
      <Link href={`/user/[userId]`} as={`/user/${userId}`}>
        <a>
          By {name} ({username})
        </a>
      </Link>
    </h2>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const postResponse = await fetch(getPostJson(id));
  const post = await postResponse.json();

  console.info(`post`, post);

  const userResponse = await fetch(getUserJson(post.userId));
  const user = await userResponse.json();

  return { post, user };
};

export default Post;
