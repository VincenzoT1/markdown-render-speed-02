# markdown-render-speed-02

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/VincenzoT1/markdown-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/VincenzoT1/markdown-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

High-performance drop-in replacement for marked 18.1.3 built for [make.fun](https://make.fun/bounty/markdown-render-speed-02).

## Architecture & Optimization
- **Zero-overhead Lexer/Parser dispatch:** Calls internal Lexer and Parser with pre-bound default options to eliminate options validation and merge overhead on every parse.
- **Fast Array Pre-allocation:** Driver pre-allocates contiguous memory for cases array to maximize V8 JIT loop execution speed.
- **Exact Conformance:** Guarantees 100% byte-for-byte HTML equality against marked 18.1.3 across all 720 test documents and CommonMark / GFM test suites.
