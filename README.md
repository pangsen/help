# SoftBankによる Alibaba Cloud Technical site
このテクニカルサイトは、SoftBankによるAlibaba Cloudのベストプラクティスなどをまとめたリポジトリです。

## 🔗 サイト

Here's [https://pangsen.github.io/help/](https://pangsen.github.io/help/)

## 概要
Alibaba Cloudの初心者から、開発者向けに照らしつつ、Alibaba Cloudをどのように使用するか、プロダクトサービスの説明、シナリオに応じた構築方法を技術的に理解するためのサイトです。
Alibaba Cloud初心者向けにアカウントの契約、プロダクトサービスのセットアップ、およびAlibaba Cloudを使ったアプリケーションを開発するのに役に立ちます。

### よくある質問
Alibaba Cloudを使った構築でよくある不明点について回答します。
ここには載っていない・足りないものがあればSoftBankのTSSサポートセンターへ問い合わせると良いです。

## 🔧 メンテナンス
このテクニカルサイトでの作業・質疑などサポートが必要な場合は、SoftBankの問い合わせフォームから相談してみてください。


## 🚀 編集

基本は content フォルダ配下にてmdファイルを格納するだけです。画像データも同じく。

注意として、
**ファイル名は半角英数字、数値から始めないでください。またファイル名の中にスペースは入れないでください。mdファイルからjsファイルへの変換処理に失敗します**


mdファイル格納後、、

以下、コマンドを実行してください（node、npm、yarnがインストールされていることが前提）

```
$ git clone https://github.com/sbcloud/help.git
$ npm install -g gatsby-cli
$ npm cache clean --force
$ yarn install
$ yarn add gatsby-plugin-feed
$ gatsby clean
$ gatsby develop
```


そのあと、URL `http://localhost:8000/` を開くとサイトが見れます。

また、上記は初期段階でのdevelop方法ですが、途中からの編集展開時は以下コマンドです(Windowsの場合)

```
$ rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd ./docs/ -Recurse; mkdir docs
$ rd yarn.lock
$ npm cache clean --force
$ yarn install
$ gatsby clean
$ gatsby develop
```


何かトラブルが起きた場合は以下コマンドを参考に対処します。
[参考: npm ERR! Error: EPERM: operation not permitted, rename](https://stackoverflow.com/questions/39293636/npm-err-error-eperm-operation-not-permitted-rename/43987591)

折り返し、上記コマンドにも含まれていますが、このリソースを初めてビルドする場合は、初期設定として以下プラグインが必要です。
```
yarn add gatsby-plugin-feed
yarn add gatsby-plugin-google-gtag
```

### 注意事項
Markdownとして編集出来ますが、いくつかの注意が必要です。

* ` <br> `改行は非対応です。
* H1（見出し）となるもので、空白、もしくはURLを付与することはできません。
* ファイル名は半角英字のみとなります。数字から始まるファイル名はビルド時、正規表現の関連で失敗します:|
* 画像の拡大はできないので、画像サイズには注意が必要です。


## 🤖 SEO 対策

Markdownファイルごとにtitleやdescriptionなどのmetaタグを設定することができます。

```markdown
---
title: "タイトル名"
metaTitle: "metaタイトル名"
metaDescription: "meta詳細"
date: "作成日"
author: "作成者"
---
```
## ☁️ Deploy

Just push to Github :)


## プルリクエスト
管理者、owner以外は、`content`配下のファイルのみコミットすることが出来ます。
それ以外のファイル、`src`や`docs`はコミットすることはできません。
なお、Publicへのmdファイル以外の箇所、機能としての反映は管理者のみ反映することが出来ます。

---
## ライセンス
このテクニカルサイトはすべての人が閲覧できるように公開されています。
ライセンスはなく、プルリクエストの承認者はSoftBankのメイン管理者・貢献者によって判断されます。

