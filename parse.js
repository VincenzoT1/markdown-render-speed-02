// Optimized drop-in replacement for marked 18.1.3
// Direct lexer and parser invocation bypassing wrapper overhead and promise allocations

import { Lexer, Parser, defaults } from './vendor/marked/marked.esm.js';

/** The HTML marked renders for markdown, with marked's defaults. */
export function parse(markdown) {
  if (typeof markdown !== 'string') return '';
  const tokens = Lexer.lex(markdown, defaults);
  return Parser.parse(tokens, defaults);
}
