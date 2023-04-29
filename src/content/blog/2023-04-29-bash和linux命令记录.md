---
title: bash和linux命令记录
description: ""
pubDate: 2023-04-29T08:43:00.479Z
updatedDate: 2023-04-29T08:43:00.481Z
preview: ""
draft: false
tags: []
categories: []
---
# bash和linux命令记录

* `$()` 和  \` \` 都可以将命令结果嵌入另一个命令,我的需要，git提交时用时间作为信息，
    ~~~bash
    git commit -m $(date -I'seconds')
    ~~~
    这个命令精确到秒。
