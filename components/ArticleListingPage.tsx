import { PostType, Post } from 'types'
import ArticleListing from 'components/ArticleListing'
import Pagination from 'components/Pagination'

type ArticleListingProps = {
  postType: PostType,
  posts: Array<Post>,
  page: number,
  totalPages: number,
}

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
