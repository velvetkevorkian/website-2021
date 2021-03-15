import { pagePathsForType, postsForPage } from '../../../lib/api'
import ArticleListingPage from '../../../components/ArticleListingPage'
import { PostType, ArticleListingStaticProps } from '../../../types'

export default ArticleListingPage

export async function getStaticProps({ params }: { params: { page: string, postType: PostType }}): Promise<ArticleListingStaticProps> {
  const { postType, page } = params
  const pageNumber = parseInt(page)
  const { posts, totalPages } = postsForPage(pageNumber, postType)
  return {
    props: {
      posts,
      postType,
      page: pageNumber,
      totalPages
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
