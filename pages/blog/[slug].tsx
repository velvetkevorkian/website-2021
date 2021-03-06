import { getPostBySlug, getAllPosts } from '../../lib/api'
import { markdownToHtml } from '../../lib/api'
import { PostType, Post } from '../../types'

export default function BlogDetail(props: { post: Post }) {
  const { post } = props
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.contentHtml }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, PostType.Blog)
  const { title, content } = post
  post.contentHtml = await markdownToHtml(content)
  return {
    props: {
      post
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
