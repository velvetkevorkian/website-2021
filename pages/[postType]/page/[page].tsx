import { getAllPosts } from '../../../lib/api'
import ArticleListing from '../../../components/ArticleListing'
import { PostType, ArticleListingProps } from '../../../types'

export default function PaginatedListing({ posts }): JSX.Element {
  return  (
    <>
      <h1>Projects</h1>
      <ArticleListing posts={posts} postType={PostType.Blog} />
    </>
  )
}

export async function getStaticProps({ params }): Promise<ArticleListingProps> {
  const page = parseInt(params.page)
  const perPage = 5
  const posts = getAllPosts(PostType.Blog).slice(page-1, page + 4)
  return {
    props: {
      posts,
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          page: '1',
          postType: PostType.Blog
        }
      },
      {
        params: {
          page: '2',
          postType: PostType.Blog
        }
      },
    ],
    fallback: false,
  }
}
