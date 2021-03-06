export enum PostType {
  Blog = 'blog',
  Lab = 'lab',
  Project = 'project',
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
