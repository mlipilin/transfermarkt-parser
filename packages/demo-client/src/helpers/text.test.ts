import { describe, expect, test } from 'vitest'

import { highlight } from './text'

describe('highlight', () => {
  test('no arguments -> undefined', () => {
    // @ts-ignore
    expect(highlight()).toBeUndefined()
  })
  test('str is undefined -> undefined', () => {
    // @ts-ignore
    expect(highlight(undefined)).toBeUndefined()
  })
  test('str is null -> null', () => {
    // @ts-ignore
    expect(highlight(null)).toBeNull()
  })
  test('str is boolean -> boolean', () => {
    // @ts-ignore
    expect(highlight(true)).toBe(true)
  })

  test('str is number -> number', () => {
    // @ts-ignore
    expect(highlight(123)).toBe(123)
  })
  test('str is object -> object', () => {
    // @ts-ignore
    expect(highlight({})).toEqual({})
  })
  test('str is string, query is undefined -> string', () => {
    // @ts-ignore
    expect(highlight('string', undefined)).toBe('string')
  })
  test('str is string, query is null -> string', () => {
    // @ts-ignore
    expect(highlight('string', null)).toBe('string')
  })
  test('str is string, query is boolean -> string', () => {
    // @ts-ignore
    expect(highlight('string', true)).toBe('string')
  })
  test('str is string, query is number -> string', () => {
    // @ts-ignore
    expect(highlight('string', 123)).toBe('string')
  })
  test('str is string, query is object -> string', () => {
    // @ts-ignore
    expect(highlight('string', {})).toBe('string')
  })
  test('str="string", query="aaa" -> string', () => {
    expect(highlight('string', 'aaa')).toBe('string')
  })
  test('str="string", query="rin" -> st<em>rin</em>g', () => {
    expect(highlight('string', 'rin')).toBe('st<em>rin</em>g')
  })
  test('str="long string", query="n" -> lo<em>n</em>g strin<em>n</em>g', () => {
    expect(highlight('long string', 'n')).toBe('lo<em>n</em>g stri<em>n</em>g')
  })
  test('str="long string", query="n", wrapTag="i" -> lo<i>n</i>g strin<i>n</i>g', () => {
    expect(highlight('long string', 'n', 'i')).toBe('lo<i>n</i>g stri<i>n</i>g')
  })
})
