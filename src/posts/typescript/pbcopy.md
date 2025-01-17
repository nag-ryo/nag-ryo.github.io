---
title: "Node.jsでpbcopy"
date: "2025-01-17"
description: "This is my first blog post written in Markdown."
category: "typescript"
---

モック用の値を取得したい場合に気軽に取得できる。
```js
const { spawn } = require("child_process")

/** @param text {string} */
async function copyToPasteboard(text) {
  const proc = spawn("pbcopy")
  proc.stdin.write(text, "utf8")
  await new Promise(r => proc.stdin.end(r))
}

copyToPasteboard("hello 世界")
```

## 参考文献
- [Node.jsでpbcopyしたい](https://zenn.dev/k_u_0615/articles/9573ea7f03332f)
- [Node.js | シェルコマンドを実行する方法(child\_process) - わくわくBank](https://www.wakuwakubank.com/posts/728-nodejs-child-process/)
## 関連
- [[child_process]]