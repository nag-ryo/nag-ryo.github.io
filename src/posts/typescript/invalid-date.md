---
title: "Invalid Dateを判定すること"
date: "2025-01-20"
description: "This is my first blog post written in Markdown."
category: "typescript"
---

`new Date()`の引数に不正なものを渡した場合、作成された[[インスタンス]]がInvalid Dateになってしまうため、使用する際はInvalid Dateのチェックをしておきたい。

しかし、基本的には比較して検証する方法はない。
```js
const d = new Date('aaa');

typeof d === 'object'; // true
d instanceof Date; // true
```

```js
const INVALID_DATE = new Date('invalid date');

INVALID_DATE; // Invalid Date
new Date('aaa') === INVALID_DATE; // false
```

そこで、`getTime()`メソッドを使用する。
Invalid Dateなインスタンスで使用した場合は`NaN`が返ってくるので、それを使って判定する。

```js
const d = new Date('aaa').getTime(); // NaN

if (Number.isNaN(d)) {
	console.error('Invalid Date!');
}
```

チェックする時、Number.isNaN() と isNaN() の差に注意すること。

## 参考
- [JavaScript で Invalid Date を判定する](https://zenn.dev/lollipop_onl/articles/eoz-judge-js-invalid-date)