import { getAllPosts } from '../../lib/api'
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
  const posts = getAllPosts(postType)
  return {
    props: {
      postType,
      posts,
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
