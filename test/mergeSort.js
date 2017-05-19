import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort(array)', () => {
  it('is a function', () => {
    expect(mergeSort).to.be.a('function')
  })
  it('sorts an array with the merge sort algorithm', () => {
    const numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    console.log('before: ', numbers)
    mergeSort(numbers)
    console.log('after: ', numbers)
    expect(numbers).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('sorts an array with the merge sort algorithm', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    mergeSort(numbers)
    expect(numbers).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('returns an error if input is invalid', () => {
    const numbers = [1, 2, 'poop', 4, 5, 6, 7, 8, 9, 10]
    expect(mergeSort(numbers)).to.eql('invalid input')
  })
})
