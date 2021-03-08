import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { PostType, Post, PostStatus } from '../types'

function getPostsSubfolder(postType: PostType): string {
  return join(process.cwd(), 'posts', postType)
}

export function getPostSlugs(postType: PostType): Array<string> {
  return fs.readdirSync(getPostsSubfolder(postType))
    .map(slug => slug.replace(/\.md$/, ''))
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getPostBySlug(slug: string, postType: PostType): Post {
  const fullPath = join(getPostsSubfolder(postType), `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  const { title, abstract, status, published, tags, image, position } = data
  return {
    abstract,
    content,
    image,
    position,
    published,
    slug,
    status,
    tags,
    title,
  }
}

export function getAllPosts(postType: PostType): Array<Post> {
  const slugs = getPostSlugs(postType)
  const posts = slugs
    .map(slug => getPostBySlug(slug, postType))
    .filter(post => post.status === PostStatus.Published)
    .filter(post => Boolean(post.published))
    .sort((a, b) => {
      // reverse chronological order
      const test =
        Date.parse(a.published.replace(' UTC', '')) <
        Date.parse(b.published.replace(' UTC', ''))
      return test ? 1 : -1
    })
  return posts
}
