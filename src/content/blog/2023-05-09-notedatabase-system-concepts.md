---
uniqueId: c0ad66a7-c760-4318-a913-abcc2642548b
title: note:database-system-concepts
description: ""
pubDate: 2023-05-09T14:25:41.080Z
updatedDate: 2023-05-09T14:25:41.081Z
preview: /image/屏幕截图 2023-05-09 224010.png
heroImage: /image/屏幕截图 2023-05-09 224010.png
draft: false
tags: []
categories: []
---
# note: database system concepts

## preface
笔记

## intoduction

因为读的是英文版，大量的概念对我来说看着有点头疼，还是先空着吧

## Part 1: RELATIONAL LANGUAGES

* chapter2: 关系数据库的基本概念(包括关系代数)
* chapter3: sql语言
* chapter4: sql语言更多细节
* chapter5: sql的高级主题(编程语言,函数,过程,触发器等)

### chapter 2: Introduction to The Relational Model

#### Structures of Realational Databases
> * A relatonal database is a collection of tables, each of which is assigned a unique name
> *  a row in a table represents a relationship among a set of values. Since a table is a collection of such relationships, there is a close correspondence between the concept of table and the mathematical concept of relation, from which the relational data model takes its name.
> *  In mathematical terminology, a tuple is simply a sequence
(or list) of values. A relationship between n values is represented mathematically by an n-tuple of values, that is, a tuple with n values, which corresponds to a row in a table.

上面的是分析，所以在关系模型中有以下名词
|term|refered|
|---|---|
|relation|table|
|tuple|row|
|attribute|a colunm of a table|
* relation instance: a specific instance of a relation
* domain: a set of permitted values for each attribute of a relation
* atomic domain:the domain are considered to be indivisible units(就是一个域的值是不可分的，单个值或数字可以，集合不行，将一个字符串看作整体可以，看成字符的集合不行)
* null value: s a special value that signifies that the value is unknown or does not exist

#### Database Schema

这部分感觉没讲多少东西，但是有点混乱
* database schema: the logical design of a database
* database instance:  a snapshot of the data in the database at a given instant in time.

作者用了编程语言变量的类型和值的关系来与database schema和database instance 做比，另外举了个例子,特意提到同一attribute在不同relation中应有相同名字
* student (ID, name, dept_name, tot_cred)
* advisor (s_id, i_id)
* takes (ID, course_id, sec_id, semester, year, grade)
* classroom (building, room_number, capacity)
* time slot (time slot id, day, start_time, end_time)

#### keys

英文看时间长了头疼，这段自己概括一下得了。
* superkeys: a set of one or more attributes that, taken collectively, allow us to identify uniquely a tuple in the relation
* candidate keys: n superkeys for which no proper subset is a
superkey
* primary key: candidate key that is chosen by the
database designer as the principal means of identifying tuples within a relation(选择primary key时，其需是不会重复的并且不常改变的)
* primary key constraints
* foreign-key constraint
* foregin key
上面三个直接引用原文
>  attribute(s) A of relation $r_1$ to the primary-key B of
relation $r_2$ states that on any database instance, the value of A for each tuple in $r_1$ must also be the value of B for some tuple in $r_2$. Attribute set A is called a foreign key from $r_1$, referencing $r_2$. The relation $r_1$ is also called the referencing relation of the foreign-key constraint, and $r_2$ is called the referenced relation.
* referential integrity constraint: a referential integrity constraint requires that the values appearing in specified
attributes of any tuple in the referencing relation also appear in specified attributes of at least one tuple in the referenced relation.(对于外键来讲，其实就是referenced relation中要求的 primary-key变为了任意一个符合要求的attribute，算是放宽了条件吧)