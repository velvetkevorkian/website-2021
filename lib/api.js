import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const blogDir = join(process.cwd(), 'posts', 'blog')
export function getBlogSlugs() {
  return fs.readdirSync(blogDir)
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getPostBySlug(slug) {
  const realSlug = slug.match(/\.md$/) ? slug : slug + '.md'
  const fullPath = join(blogDir, realSlug)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  return {
    slug: realSlug,
    data,
    content,
  }
}

export function getAllPosts() {
  const slugs = getBlogSlugs()
  const posts = slugs.map(getPostBySlug)
  return posts
}
