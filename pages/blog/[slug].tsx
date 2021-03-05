import { getPostBySlug, getAllPosts } from '../../lib/api'
import { markdownToHtml } from '../../lib/api'
import { PostType } from '../../constants'

export default function ({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, PostType.Blog)
  const { title } = post.data
  const html = await markdownToHtml(post.content)
  return {
    props: {
      post: {
        title: post.data.title,
        html,
      },
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(PostType.Blog)
  const paths = posts.map(p => {
    return {
      params: {
        slug: p.slug
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
