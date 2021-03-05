import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { PostType } from '../constants'

function getPostsSubfolder(postType: PostType): string {
  return join(process.cwd(), 'posts', postType)
}

export function getPostSlugs(postType: PostType): Array<string> {
  return fs.readdirSync(getPostsSubfolder(postType))
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getPostBySlug(slug: string, postType: PostType) {
  const realSlug = slug.match(/\.md$/) ? slug : slug + '.md'
  const fullPath = join(getPostsSubfolder(postType), realSlug)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  return {
    slug: slug.replace(/\.md$/, ''),
    data,
    content,
  }
}

export function getAllPosts(postType: PostType) {
  const slugs = getPostSlugs(postType)
  const posts = slugs.map(slug => getPostBySlug(slug, postType))
  return posts
}
