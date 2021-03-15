import { PostType, Post } from '../types'
import ArticleListing from './ArticleListing'

type ArticleListingProps = {
  postType: PostType,
  posts: Array<Post>
}

export default function ArticleListingPage({ posts, postType }: ArticleListingProps): JSX.Element {
  return (
    <>
      <h1>{postType}</h1>
      <ArticleListing posts={posts} postType={postType} />
    </>
  )
}
