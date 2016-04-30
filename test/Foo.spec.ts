import * as assert from 'power-assert'

import Foo from '../src/Foo'

describe('Test1', () => {
  it('true is true', () => {
    let foo = new Foo("ken")
    assert.equal(foo.say(), 'Hello!')
  })
})

describe('Test2', () => {
  it('true is false', () => {
    const HOGE = 'hoge'
    assert.equal('Now', HOGE)
  })
})
