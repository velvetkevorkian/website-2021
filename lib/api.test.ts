/* eslint-env jest */
import { getPostsSubfolder } from './api'
import process from 'process'
import { PostType } from '../types'


describe('getPostsSubfolder', () => {
  it('returns the right value for each post type', () => {
    const cwdSpy = jest.spyOn(process, 'cwd')
    cwdSpy.mockReturnValue('cwd')
    expect(getPostsSubfolder(PostType.Blog)).toEqual('cwd/posts/blog')
    expect(getPostsSubfolder(PostType.Lab)).toEqual('cwd/posts/labs')
    expect(getPostsSubfolder(PostType.Project)).toEqual('cwd/posts/projects')
  })
})
