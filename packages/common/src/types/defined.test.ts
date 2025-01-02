import { describe, expect, expectTypeOf, it } from 'vitest'
import { isDefined } from './defined'

describe('isDefined', () => {
  it('should return true for defined values', () => {
    expect(isDefined(0)).toBe(true)
    expect(isDefined('')).toBe(true)
    expect(isDefined(false)).toBe(true)
    expect(isDefined([])).toBe(true)
  })

  it('should return false for undefined values', () => {
    expect(isDefined(undefined)).toBe(false)
    expect(isDefined(null)).toBe(false)
  })

  it('should narrow types from string | undefined', () => {
    const value = createUndefinedValue()
    expectTypeOf(value).toEqualTypeOf<string | undefined>()
    if (isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<string>()
    }
    if (!isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<undefined>()
    }
  })

  it('should narrow types from string | null', () => {
    const value = createNullValue()
    expectTypeOf(value).toEqualTypeOf<string | null>()
    if (isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<string>()
    }
    if (!isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<null>()
    }
  })

  it('should narrow types from string | null | undefined', () => {
    const value: string | null | undefined = createNullUndefinedValue()
    expectTypeOf(value).toEqualTypeOf<string | null | undefined>()
    if (isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<string>()
    }
    if (!isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<null | undefined>()
    }
  })
})

function createUndefinedValue(): string | undefined {
  return 'value'
}

function createNullValue(): string | null {
  return 'value'
}

function createNullUndefinedValue(): string | null | undefined {
  return 'value'
}
