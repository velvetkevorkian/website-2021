import { ArticleListingProps } from 'types'
import ArticleListing from 'components/ArticleListing'
import Pagination from 'components/Pagination'

export default function ArticleListingPage({ posts, postType, page, totalPages }: ArticleListingProps): JSX.Element {
  return (
    <>
      <h1>{postType}</h1>
      <ArticleListing posts={posts} postType={postType} />
      { totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} postType={postType} />
      )}
    </>
  )
}
