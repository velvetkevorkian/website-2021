import { getAllPosts } from '../../lib/api'
import { PostType, Post } from '../../types'

export default function BlogListing(props: { posts: Array<Post> }) {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {props.posts.map(p => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}`}>
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </>)
}

export async function getStaticProps() {
  const posts = getAllPosts(PostType.Blog)
  return {
    props: {
      posts,
    }
  }
}
