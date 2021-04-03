import { getPostBySlug, getAllPosts, markdownToHtml } from 'lib/api'
import { PostType, Post } from 'types'
import { LabsDetail, DefaultDetail } from 'components/ArticleDetail'

export default function ArticleDetail({ post }: { post: Post}): React.ReactNode {
  switch (post.postType) {
  case PostType.Lab:
    return <LabsDetail post={post} />
    break

  default:
    return <DefaultDetail post={post} />
    break
  }
}

type StaticProps = {
  props: {
    postType: PostType,
    post: Post
  }
}
type Params = {
  params: {
    postType: PostType,
    slug: string
  }
}
export async function getStaticProps({ params }: Params): Promise<StaticProps> {
  const { slug, postType } = params
  const post = getPostBySlug(slug, postType)
  const { content } = post
  post.contentHtml = await markdownToHtml(content)
  return {
    props: {
      post,
      postType
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
  const posts = [
    ...getAllPosts(PostType.Blog),
    ...getAllPosts(PostType.Project),
    ...getAllPosts(PostType.Lab),
  ]
  const paths = posts.map(p => {
    return {
      params: {
        slug: p.slug,
        postType: p.postType,
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
