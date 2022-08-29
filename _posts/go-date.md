---
title: 'Date in Go'
excerpt: 'Go uses the reference date `20060102150405` which seems meaningless but actually has a reason'
coverImage: '/til/assets/posts/example/cover.png'
date: '2022-05-15T15:00:00+07:00'
author:
  username: hoangmirs
  name: Hoang
ogImage:
  url: '/til/assets/posts/example/cover.png'
tags: ['web', 'go']
---

Go uses the reference date `20060102150405` which seems meaningless but actually has a reason, as it's `1 2 3 4 5 6` in the Posix `date` command:

```
Mon Jan 2 15:04:05 -0700 MST 2006
0   1   2  3  4  5              6
```
