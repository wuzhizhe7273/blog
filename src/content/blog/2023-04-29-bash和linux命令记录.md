---
title: bash和linux命令记录
description: ""
pubDate: 2023-04-29T08:43:00.479Z
updatedDate: 2023-05-10T09:15:20.172Z
preview: /image/gwdezi8t.bmp
draft: false
tags: []
categories: []
uniqueId: 29864439-7f56-41ba-9c23-b6941f1223d7
heroImage: /image/6709aedbf58fe61c2079ac1ec048ab84ccdac831.jpg@942w_614h_progressive.webp
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
* `git reset --hard xxxxxx` 回滚
*  git config --global --unset http.proxy 取消http代理
*  git config --global --unset https.proxy 取消https代理

## conda

~~~bash
conda config --set auto_activate_base false #关闭自动激活
~~~