import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort(array)', () => {
  it('is a function', () => {
    expect(bubbleSort).to.be.a('function')
  })
  it('sorts an array of numbers', () => {
    let numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    bubbleSort(numbers)
    expect(numbers).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('sorts an array of numbers', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    bubbleSort(numbers)
    expect(numbers).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
