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

## 关于git
    * `git checkout -b <name>` 可创建新的分支
    * `git checkout <branch-name>` 切换分支
    * `git push -u <remote-hub> <branch-name>` 提交分支
    * `ssh-keygen -t -rsa -C "email@xx.xxx"` 生成ssh密钥
    * `git config --global user.name "xxxxxxx"` 设置用户名(使用远程需要)
    * `git config --global user.email "xxxxxxxx"` 设置邮箱(使用远程需要)