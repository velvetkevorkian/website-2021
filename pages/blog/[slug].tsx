import { getPostBySlug } from '../../lib/api'
import { markdownToHtml } from '../../lib/api'

export default function ({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
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
  return {
    paths: [{
      params: {
        slug: 'test-blog',
      },
    }],
    fallback: false,
  }
}
