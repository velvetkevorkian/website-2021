/* eslint-env jest */
import isActive from '.'

describe('isActive()', () => {
  it("returns true if we're on the homepage and the href is /", () => {
    expect(isActive('/', '/')).toBe(true)
  })

  it('returns false for any other path if the href is /', () => {
    expect(isActive('/blog', '/')).toBe(false)
  })

  it('returns true for an exact match', () => {
    expect(isActive('/blog', '/blog')).toBe(true)
  })

  it('returns true if the first segment matches', () => {
    expect(isActive('/blog/foo/bar/biz', '/blog')).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(isActive('/blog', '/project')).toBe(false)
  })
})
