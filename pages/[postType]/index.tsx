import { getAllPosts } from '../../lib/api'
import { PostType, Post } from '../../types'
import ArticleListing from '../../components/ArticleListing'

type ArticleListingParams = {
  params : {
    postType: PostType
  }
}

type ArticleListingProps = {
  postType: PostType,
  posts: Array<Post>
}

type ArticleListingStaticProps = {
  props: ArticleListingProps
}

export default function ArticleListingPage(props: ArticleListingProps): JSX.Element {
  const { postType, posts } = props
  return (
    <>
      <h1>{postType}</h1>
      <ArticleListing posts={posts} postType={postType} />
    </>
  )
}

export async function getStaticProps({ params }: ArticleListingParams): Promise<ArticleListingStaticProps> {
  const { postType } = params
  const posts = getAllPosts(postType)
  return {
    props: {
      postType,
      posts,
    }
  }
}

type StaticPath = {
  params: {
    postType: string
  }
}
type StaticPaths = {
  paths: Array<StaticPath>,
  fallback: boolean
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = [PostType.Blog, PostType.Lab, PostType.Project].map(p => ({
    params: {
      postType: p,
    }
  }))

  return {
    paths,
    fallback: false,
  }
}
