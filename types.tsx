export enum PostType {
  Blog = 'blog',
  Project = 'projects',
}

export enum PostStatus {
  Published = 'publish',
  Draft = 'draft',
  Private = 'private'
}

export interface Post {
  abstract?: string
  content: string
  contentHtml?: string
  image?: string
  position?: number
  published: string
  slug: string
  status: string
  tags?: string
  title: string
  postType: PostType
}

export type ArticleListingProps = {
  postType: PostType,
  posts: Array<Post>,
  page: number,
  totalPages: number,
}

export interface ArticleListingStaticProps {
  props: ArticleListingProps
}
