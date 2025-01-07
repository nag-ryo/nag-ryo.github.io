---
title: "filterの頭にawaitを置いても同期はしない"
date: "2025-01-06"
description: "This is my first blog post written in Markdown."
category: "typescript"
---

TypeScriptのfilterではawaitは同期されない。

以下のコードブロックではfilterメソッドではasync/awaitを使ってみたが、やはり同期されなかった。

```ts
(async () => {
  async function sleep(milliseconds: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
  }

  const arr = [1,2,3,4,5]; 
  const filArr = await arr.filter(async (num) => { // ここにawaitを置いても同期しない
    await sleep(1000);
    if (num % 2 === 0) {
      console.log('偶数です');
      return true;
    }
    console.log('奇数です');
    return false;
  });
  console.log(filArr);
})()

// [1,2,3,4,5]
// 奇数です
// 偶数です
// 奇数です
// 偶数です
// 奇数です
```

Promise.allを置いても結果は同じ
```ts
(async () => {

  async function sleep(milliseconds: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
  }


  const arr = [1,2,3,4,5]; 
  const filArr = await Promise.all(arr.filter(async (num) => { // ここにPromise.allとawaitを置いても同期しない
    await sleep(1000);
    if (num % 2 === 0) {
      console.log('偶数です');
      return true;
    }
    console.log('奇数です');
    return false;
  }));

  console.log(filArr);
})()
// [1,2,3,4,5]
// 奇数です
// 偶数です
// 奇数です
// 偶数です
// 奇数です
```

mapの場合、Promise.allで問題ない
```ts
(async () => {
  async function sleep(milliseconds: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
  }

  const arr = [1,2,3,4,5]; 
  const filArr = await Promise.all(arr.filter(async (num) => { // mapの場合は同期される
    await sleep(1000);
    if (num % 2 === 0) {
      console.log('偶数です');
      return num;
    }
    console.log('奇数です');
    return 0;
  }));
  console.log(filArr);
})()
// 奇数です
// 偶数です
// 奇数です
// 偶数です
// 奇数です
// [0,2,0,4,0]
```
