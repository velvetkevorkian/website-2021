/* eslint-env jest */
import capitalise from '.'

describe('capitalise()', () => {
  it('capitalises the input', () => {
    expect(capitalise('some string')).toEqual('Some string')
  })

  it("doesn't blow up on edge cases", () => {
    expect(capitalise(' leading space')).toEqual(' leading space')
    expect(capitalise('1leading number')).toEqual('1leading number')
  })
})
