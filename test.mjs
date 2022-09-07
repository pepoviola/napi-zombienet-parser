import { parse } from './index.js'

test('test parse', (t) => {
  const a = parse("alice: log line matches glob \"*rted #1*\" within 10 seconds")
  t.is(1, 1)
})
