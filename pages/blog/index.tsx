import { getAllPosts } from '../../lib/api'
import { PostType } from '../../constants'

export default function BlogListing({ posts }) {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}`}>
              {p.data.title}
            </a>
          </li>
        ))}
      </ul>
    </>)
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts(PostType.Blog)
  return {
    props: {
      posts,
    }
  }
}
