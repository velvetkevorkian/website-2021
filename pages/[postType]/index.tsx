import { postsForPage } from '../../lib/api'
import { PostType, ArticleListingStaticProps } from '../../types'
import ArticleListingPage from '../../components/ArticleListingPage'

type ArticleListingParams = {
  params : {
    postType: PostType
  }
}

export default ArticleListingPage

export async function getStaticProps({ params }: ArticleListingParams): Promise<ArticleListingStaticProps> {
  const { postType } = params
  const { posts, totalPages } = postsForPage(1, postType)
  return {
    props: {
      postType,
      posts,
      page: 1,
      totalPages
    }
  }
}

type StaticPaths = {
  paths: Array<{
    params: {
      postType: string
    }
  }>,
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
