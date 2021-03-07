import { getAllPosts } from '../../lib/api'
import { PostType, Post } from '../../types'

export default function BlogListing(props: { posts: Array<Post> }): React.ReactNode {
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
    </>
  )
}

type StaticProps = {
  props: {
    posts: Array<Post>
  }
}

export async function getStaticProps(): Promise<StaticProps> {
  const posts = getAllPosts(PostType.Blog)
  return {
    props: {
      posts,
    }
  }
}
