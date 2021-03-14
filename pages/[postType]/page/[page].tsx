import { getAllPosts } from '../../../lib/api'
import ArticleListing from '../../../components/ArticleListing'
import { PostType, Post } from '../../../types'

const perPage = 8

type ArticleListingProps = {
  posts: Array<Post>,
  postType: PostType
}

type ArticleListingStaticProps = {
  props: ArticleListingProps
}

export default function PaginatedListing({ posts, postType }: ArticleListingProps): JSX.Element {
  return  (
    <>
      <h1>Projects</h1>
      <ArticleListing posts={posts} postType={postType} />
    </>
  )
}

export async function getStaticProps({ params }: { params: { page: string, postType: PostType }}): Promise<ArticleListingStaticProps> {
  const page = parseInt(params.page)
  const { postType } = params
  const start = (page - 1) * perPage
  const end = start + perPage
  const posts = getAllPosts(postType).slice(start, end)
  return {
    props: {
      posts,
      postType
    }
  }
}

type StaticPath = {
  params: {
    page: string,
    postType: PostType
  }
}
type StaticPaths = {
  paths: Array<StaticPath>,
  fallback: boolean
}
function pathsForType(postType: PostType): Array<StaticPath> {
  const length = Math.floor(getAllPosts(postType).length / perPage)
  const pages = Array.from({ length }, (_, i) => i)
  return pages.map(p => ({
    params: {
      page: `${p + 1}`,
      postType
    }
  }))
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = [
    ...pathsForType(PostType.Blog),
    ...pathsForType(PostType.Lab),
    ...pathsForType(PostType.Project)
  ]

  return {
    paths,
    fallback: false,
  }
}
