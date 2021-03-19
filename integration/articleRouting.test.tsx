import { getPage } from 'next-page-tester'
import { mount } from 'enzyme'

describe('blog listing', () => {
  it('renders page 1 at the root', async () => {
    const { page } = await getPage({
      route: '/blog/page/1'
    })
    const wrapper = mount(page)
    expect(wrapper.find('h1').text()).toBe('blog')
  })
})
