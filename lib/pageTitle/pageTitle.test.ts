/* eslint-env jest */
import pageTitle from '.'

describe('pageTitle()', () => {
  it('gets the right title for a numbered page', () => {
    const result = pageTitle({
      pageNumber: 1,
      pageTitle: 'foo',
    })
    expect(result).toEqual('foo | Page 1 | Kyle Macquarrie')
  })

  it('gets the right title for an unnumbered page', () => {
    const result = pageTitle({
      pageTitle: 'foo',
    })
    expect(result).toEqual('foo | Kyle Macquarrie')
  })

  it('falls back to the site name', () => {
    const result = pageTitle()
    expect(result).toEqual('Kyle Macquarrie')
  })
})
