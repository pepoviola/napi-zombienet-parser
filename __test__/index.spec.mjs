import test from 'ava';
import { parse } from '../index.js';

test('test parse', t => {
  const unparsed = `
Network: ./a.toml
Creds: config
alice: log line matches glob \"*rted #1*\" within 10 seconds
`;

  const parsed = parse(unparsed);
  console.log(parsed);
  t.is(0,0);
});