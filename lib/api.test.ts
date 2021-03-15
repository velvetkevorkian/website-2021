/* eslint-env jest */
import process from 'process'
import fs from 'fs'
import {
  getPostsSubfolder,
  getPostSlugs,
  markdownToHtml,
  getPostBySlug,
  postPath,
  getAllPosts,
  pagePathsForType
} from './api'
import { PostType, PostStatus } from '../types'
import { fakePosts } from './fixtures'

beforeEach(() => {
  jest.spyOn(process, 'cwd')
    .mockReturnValue('cwd')
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('getPostsSubfolder', () => {
  it('returns the right value for each post type', () => {
    expect(getPostsSubfolder(PostType.Blog)).toEqual('cwd/posts/blog')
    expect(getPostsSubfolder(PostType.Lab)).toEqual('cwd/posts/labs')
    expect(getPostsSubfolder(PostType.Project)).toEqual('cwd/posts/projects')
  })
})

describe('getPostSlugs', () => {
  it('returns a list of slugs without extensions', () => {
    jest.spyOn(fs, 'readdirSync')
      // @ts-expect-error TODO: can this by typed correctly?
      .mockReturnValue(['slug-1.md', 'slug-2.md'])

    expect(getPostSlugs(PostType.Blog)).toEqual(['slug-1', 'slug-2'])
  })
})

describe('markdownToHtml', () => {
  it('converts markdown to html', async () => {
    const result = await markdownToHtml('this is some markdown')
    expect(result).toEqual(`<p>this is some markdown</p>\n`)
  })
})

describe('postPath', () => {
  it('returns the full path with extension', () => {
    const result = postPath('some-slug', PostType.Blog)
    expect(result).toEqual('cwd/posts/blog/some-slug.md')
  })
})

describe('getPostBySlug', () => {
  it('parses frontmatter and content and returns a post object', () => {
    jest.spyOn(fs, 'readFileSync')
      .mockReturnValue(fakePosts[0])

    const result = getPostBySlug('post-slug', PostType.Blog)
    expect(result).toEqual({
      abstract: `Some text that's got an apostrophe`,
      content: `\nThis is some markdown content\n`,
      image: null,
      position: null,
      postType: PostType.Blog,
      published: '2010-10-04 00:00:00 UTC',
      slug: 'post-slug',
      status: PostStatus.Published,
      tags: 'video',
      title: 'Post Title',
    })
  })
})

describe('getAllPosts', () => {
  it('gets the published posts in chronological order', () => {
    jest.spyOn(fs, 'readdirSync')
      // @ts-expect-error TODO: can this by typed correctly?
      .mockReturnValue(['post-slug.md', 'unpublished-post-slug.md', 'newer-post-slug'])
    jest.spyOn(fs, 'readFileSync')
      .mockImplementationOnce(() => fakePosts[0])
      .mockImplementationOnce(() => fakePosts[1])
      .mockImplementationOnce(() => fakePosts[2])
    const result = getAllPosts(PostType.Blog)
    expect(result.map(p => p.title)).toEqual(['Newer Post Title', 'Post Title'])
  })
})

describe('pagePathsForType', () => {
  it('returns an array of 1-indexed page params', () => {
    jest.spyOn(fs, 'readdirSync')
      // @ts-expect-error TODO: can this by typed correctly?
      .mockReturnValue(['post-slug.md', 'post-slug.md', 'post-slug.md'])
    jest.spyOn(fs, 'readFileSync')
      .mockImplementation(() => fakePosts[0])
    const result = pagePathsForType(PostType.Blog, 2)
    expect(result.length).toEqual(2)
    expect(result.map(i => i.params.page)).toEqual(['1', '2'])
  })
})
