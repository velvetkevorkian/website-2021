import { getAllPosts } from '../../lib/api'

export default function({ posts }) {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li>
            <a href={`/blog/${p.slug.replace(/\.md$/, '')}`}>
              {p.data.title}
            </a>
          </li>
        ))}
      </ul>
    </>)
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    }
  }
}
