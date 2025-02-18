# 名大の授業

## 概要

- NUOCW が公開している"名大の授業" のリポジトリ
  - [日本語版](https://ocw.nagoya-u.jp/)
  - [英語版](https://ocw.nagoya-u.jp/en/)
  - [旧日本語版](https://ocw.ilas.nagoya-u.ac.jp/)

## ブランチ構成

Git-flow というブランチモデルに基づいて運用を行っています。

- master : 公開用のソースコードを管理するブランチ
- development : 開発作業用のブランチ
- 作業ブランチ : issue ごとに作業を行うブランチ.
  - (issue 番号)-(issue の内容)という規則で作っています.

## 使用技術

- [Gatsbyjs](https://www.gatsbyjs.org/) (Static site generator using React)
  - [React](https://reactjs.org/) (Javascript flamework)
  - [Markdown](https://www.markdown.jp/what-is-markdown/) (text data)
- [Bulma](https://bulma.io/) (CSS template)
- [Styled-components](https://www.styled-components.com/) (CSS in JS)

## リポジトリの役割

### ※デザイン作業は nuocw-release で行い, 講義の追加・編集は nuocw-preview の内容を変更します. (以下参照)

- nuocw-release : 一般公開／機能追加
- nuocw-preview : 講義情報の追加・変更・確認

## 大まかなルール

- デザイン班の機能追加は、基本的に development からブランチを作成して改変=> remote に push => pull request =>development にマージしていく形で作業を進めていく
  - development へのマージは各個人の判断で行って良い. ただし操作や変更内容に不安がある場合は慣れたものに確認を求めること.
  - staging, master へのマージは班長が行う. 機能が公開できる状態になれば班長にマージを依頼する
  - 直接 development, staging, master を更新することは避ける
  - [Github の issue](https://github.com/NUOCW-Project/issues) を参照
  - ブランチ名は基本的に **_1-easily-description_** のように頭にチケット番号をつけたスネークケースで作成する
  - コミットメッセージは文頭に#チケット番号をつけた上で変更の内容をわかりやすく記載する. (例) **_#1 (変更内容)_**
- 文字サイズの変更は極力しない
  - 絶対値指定により、レスポンシブデザインが崩れるのを防ぎたい
  - 変更する場合は[Bulma の文字サイズ変更 helper](https://bulma.io/documentation/modifiers/typography-helpers/)を使用
- 色の変更は適宜 Styled-components を使用

  - bulma の指定が優先されるため、同時に使う場合には注意、解決策（？）は以下の 3 種
    1. [all.sass](/src/components/all.sass)で既存の bulma テンプレートを上書き改変
    - 他で使っている場合、予期せぬレイアウト変更を引き起こす恐れあり、慎重に対応
    2. [all.sass](/src/components/all.sass)で新たに css のテーマを作成
    - all.sass が肥大化する恐れ
    3. Styled-components のみを使用し、bulma テンプレートを使用しない
    - あらかじめ使用したかった bulma の css を踏襲して作成する必要あり
    - おすすめは 3、次いで 2
    - 1 は最終手段

- pdf ファイルは別のフォルダに 1 か所に格納
  - Markdown から参照する形で紐づけ
- コード成型には **Prettiter** を使用
  - **`npm run format` で prettier によるコード成型が可能なので、プルリクエストを送る前に prettier を各自走らせること**
  - prettier で整形してほしくないコードが発生した場合、`// prettier-ignore`をコードの前につけることで回避できる
    ```
    // prettier-ignore
    matrix(
      ^  ^
      123
      ABC
      :)
      .-.-.-.-.-.
    )
    ```

## 各種ページの構成素材

Branch 17-department

- 一通り全ての学部／研究科について作成しました。動作確認のため、各学部／研究科には最低 1 つのコースまたは最終講義も入れてあります。
  - 国際教育交流センターと国際言語センターは、上位組織となる「国際機構」にまとめました。
- 学部／研究科の Frontmatter は以下のとおり。
  - tags をどうしましょうか？取り急ぎ、学部／研究科を入れてあります。
    - 小さなことだけど、「学部／研究科」と「学部／研究科」が混在していました。名大 HP では「／」で統一されてましたので、「／」にしています。
- デモは以下で公開しています。
  - [Branch 17-department](http://ocw.ilas.nagoya-u.ac.jp/)
- Pull request かけておきますので、よろしく＞高市くん

Branch 17-department Ver.2

- Sidebar menu は断念しました（😂）
- 替わりに部局長インタビューありと無しのリンク（html）を生成し、学部／研究科のページで選択できるようにしてあります。
  - 部局長インタビュー無しのマークダウンファイル名は XXX 研究科.md
    - template/department.js にて<PostContent content={content} />をコメントアウト
    - マークダウンファイルも content の部分を削除していますが、frontmatter は同じです。ここは変更してもよいかもしれません。
  - 部局長インタビューありのマークダウンファイル名は XXX 研究科のご紹介.md
    - template/department-introduction.js は元の template/department.js です。
    - frontmatter: templateKey: "department-introduction" です。
- /src/pages/department/index.js にて各学部／研究科をリストアップしてあります。
- 各マークダウンファイルは #38 に対応して、nuvideo を https へ変更しました。
- これで　 Pull request かけておきますので、よろしく＞高市くん

```
---
templateKey: 'department'
Department: '理学部／理学研究科'
title: '理学部／理学研究科'
Director: '理学部／理学研究科長　阿波賀邦夫 教授'
departmentOrder: '010'
date: 2016-12-18T00:00:00.000Z
featuredimage: /img/header_eng02.jpg
featuredpost: true
description: >-
  名古屋大学理学部は、数理学科、物理学科、化学科、生命理学科、地球惑星科学科の５つの学科から構成されています。1年次には各学科への分属はせず、主に基礎科目、教養科目を受講し、自然科学、人文科学、語学などについて幅広い教養を身につけます。この教育プログラムは、理学部教育の大きな特徴です。2年次からは各学科に分属して専門教育が始まり、4年次では自らの発想を駆使して課題に挑み、研究を展開することになります。

  理学とは、「宇宙はどのように成り立っているのか」、「物質の根源は何か」、「生命とは何か」など、自然界を貫く真理を追求する学問です。 私たちは、さまざまな自然の謎・疑問と出会い、それらを解明し、真理を自然から学んできました。解明された一つの「知」は、次なる「未知」 を生み出し、この自然の「 理(ことわり)の解明は永遠に続きます。皆さんもぜひ、私たちと自然の謎や疑問の解明に、一緒にチャレンジしてみませんか。
tags:
  - 理学部／理学研究科
---
```

- 以下、雑感
  - これも細かいことだけど、コース、最終講義のいずれもフォーマットが揃っていないです。編集システムで Markdown を作るときに問題になるかも。
  - あと、できれば表はやめたいです。
  - Markdown の書式の制限があります（たとえば、表の行・列をまとめることができない）。Markdown でできることのみとするのが良いと思うけど、そのような箇所は抜き出して方針を決める必要がありますね。

### キーワード検索 (old)

- src/pages/search/index.js

### キーワード検索 (new)

- src/pages/search/index.js
- src/components/SearchContainer.js
"# auto-news-test" 
