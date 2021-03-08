import { getAllPosts } from '../../lib/api'
import { PostType, Post, ArticleListingProps } from '../../types'
import ArticleListing from '../../components/ArticleListing'

type ListingProps = {
  posts: Array<Post>
}
export default function BlogListing({ posts }: ListingProps): React.ReactNode {
  return (
    <>
      <h1>Projects</h1>
      <ArticleListing posts={posts} postType={PostType.Project} />
    </>
  )
}

export async function getStaticProps(): Promise<ArticleListingProps> {
  const posts = getAllPosts(PostType.Project)
  return {
    props: {
      posts,
    }
  }
}
