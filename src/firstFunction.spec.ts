import { addNumbers } from "./firstFunction"

describe('Test Addition', () => {
  it('Testing Addition', () => {
    expect(addNumbers(10,20)).toBe(30);
  })
})
