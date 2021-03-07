import { getPostBySlug, getAllPosts } from '../../lib/api'
import { markdownToHtml } from '../../lib/api'
import { PostType, Post } from '../../types'

export default function BlogDetail(props: { post: Post }): React.ReactNode {
  const { post } = props
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.contentHtml }} />
    </>
  )
}

type StaticProps = {
  props: {
    post: Post
  }
}
type Params = {
  params: {
    slug: string
  }
}
export async function getStaticProps({ params }: Params): Promise<StaticProps> {
  const post = getPostBySlug(params.slug, PostType.Blog)
  const { content } = post
  post.contentHtml = await markdownToHtml(content)
  return {
    props: {
      post
    }
  }
}

type StaticPath = {
  params: {
    slug: string
  }
}
type StaticPaths = {
  paths: Array<StaticPath>,
  fallback: boolean
}

export async function getStaticPaths(): Promise<StaticPaths> {
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
