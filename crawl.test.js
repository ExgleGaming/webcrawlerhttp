import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";



test('normalizeURL', () => {
    const input = ''
    const actual = normalizeURL(input)
    const expected = ''
    expect(actual).toEqual(expected)
})

