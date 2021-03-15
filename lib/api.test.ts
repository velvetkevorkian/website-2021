/* eslint-env jest */
import process from 'process'
import fs from 'fs'
import {
  getPostsSubfolder,
  getPostSlugs,
  markdownToHtml,
  getPostBySlug,
  postPath,
} from './api'
import { PostType, PostStatus } from '../types'

const fakePost =
`---
title: 'Post Title'
abstract: "Some text that's got an apostrophe"
slug: post-slug
type: blog
status: publish
published: 2010-10-04 00:00:00 UTC
tags: video
image:
position:
---

This is some markdown content
`

describe('getPostsSubfolder', () => {
  it('returns the right value for each post type', () => {
    jest.spyOn(process, 'cwd')
      .mockReturnValue('cwd')

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
    jest.spyOn(process, 'cwd')
      .mockReturnValue('cwd')

      const result = postPath('some-slug', PostType.Blog)
    expect(result).toEqual('cwd/posts/blog/some-slug.md')
  })
})

describe('getPostBySlug', () => {
  it('parses frontmatter and content and returns a post object', () => {
    jest.spyOn(fs, 'readFileSync')
      .mockReturnValue(fakePost)

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
