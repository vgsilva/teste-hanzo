import Link from "next/link";
import fetch from "isomorphic-unfetch";

const postsJson = `https://jsonplaceholder.typicode.com/posts`;
const usersJson = `https://jsonplaceholder.typicode.com/users`;

const Index = ({ posts, users }) => (
  <>
    <section>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <Link href={`/post/[postId]`} as={`/post/${post.id}`}>
              <a>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/user/[userId]`} as={`/user/${user.id}`}>
              <a>
                {user.name} ({user.username})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </>
);

Index.getInitialProps = async function() {
  const postsResponse = await fetch(postsJson);
  const posts = (await postsResponse.json()).slice(0, 5);

  const usersResponse = await fetch(usersJson);
  const users = (await usersResponse.json()).slice(0, 5);

  console.info(`users`, users);

  return { posts, users };
};

export default Index;
