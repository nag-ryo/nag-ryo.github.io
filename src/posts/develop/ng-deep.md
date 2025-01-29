---
title: "ng-deepの指定時は追加のclassも同時指定"
date: "2025-01-23"
description: ""
category: "develop"
---

検索用のコマンド

## オプション
- -E: 拡張正規表現をしようする
- -i 大文字と小文字を区別しない
## 例
### 現在のディレクトリでsandboxディレクトリが存在するか確認
`ls | grep sandbox`

Sandboxやsandboxの表記揺れ（大文字小文字）を考慮するなら
`ls | grep -i sandbox`

## TODO
-rの再起的検索や、-nの行番号表示もまとめる
関連するコマンド（find, sed)も加える