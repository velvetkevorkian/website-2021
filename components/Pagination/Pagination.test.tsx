import Pagination from '.'
import { mount, ReactWrapper } from 'enzyme'
import { PostType } from '../../types'

describe('Pagination', () => {
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(<Pagination totalPages={5} currentPage={3} postType={PostType.Blog} />)
  })

  it('makes a list item for each page', async () => {
    const items = wrapper.find('li')
    expect(items.length).toBe(5)
    // NOTE: these are &nbsp; characters not plain spaces
    expect(items.map(i => i.text())).toEqual(['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'])
  })

  it('links to pages correctly', async () => {
    const links = wrapper.find('a')
    expect(links.length).toBe(4)
    expect(links.at(0).prop('href')).toBe('/blog/page/1')
  })

  it("doesn't link to the current page", () => {
    const current = wrapper.find('li').at(2)
    expect(current.childAt(0).is('span')).toBe(true)
  })
})
