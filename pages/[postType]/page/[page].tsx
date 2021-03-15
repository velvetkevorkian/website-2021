import { getAllPosts, pagePathsForType } from '../../../lib/api'
import ArticleListingPage from '../../../components/ArticleListingPage'
import { PostType, ArticleListingStaticProps } from '../../../types'
import { postsPerPage } from '../../../constants'

export default ArticleListingPage

export async function getStaticProps({ params }: { params: { page: string, postType: PostType }}): Promise<ArticleListingStaticProps> {
  const page = parseInt(params.page)
  const { postType } = params
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage
  const posts = getAllPosts(postType).slice(start, end)
  return {
    props: {
      posts,
      postType
    }
  }
}

type StaticPaths = {
  paths: Array<{
    params: {
      page: string,
      postType: PostType
    }
  }>,
  fallback: boolean
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = [
    ...pagePathsForType(PostType.Blog),
    ...pagePathsForType(PostType.Lab),
    ...pagePathsForType(PostType.Project)
  ]

  return {
    paths,
    fallback: false,
  }
}
