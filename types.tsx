export enum PostType {
  Blog = 'blog',
  Lab = 'lab',
  Project = 'project',
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
  title: string,
}

export interface ArticleListingProps {
  props: {
    posts: Array<Post>
  }
}
