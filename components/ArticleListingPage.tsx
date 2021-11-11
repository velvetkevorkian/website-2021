import ArticleListing from 'components/ArticleListing'
import Pagination from 'components/Pagination'
import Center from 'components/Center'

export default function ArticleListingPage({ posts, postType, page, totalPages }) {
  return (
    <Center>
      <h1>{postType}</h1>
      <ArticleListing posts={posts} postType={postType} />
      { totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} postType={postType} />
      )}
    </Center>
  )
}
