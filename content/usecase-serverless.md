---
title: "サーバレス構築方法"
metaTitle: "Alibab Cloudによるサーバレス活用・構築パターン"
metaDescription: "Alibab Cloudによるサーバレス活用・構築パターンを説明します"
date: "2021-06-20"
author: "Hironobu Ohara"
---

import Titlelist from '../src/Titlelist.js';


<!-- 
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/usecase-Serverless/"}}
    sort: {fields: fileAbsolutePath, order: ASC}
  ) {
    nodes {
      frontmatter {
        title
        metaTitle
        metaDescription
        date(formatString: "yyyy/MM/DD")
        author       
      }
      fileAbsolutePath
    }
  }
}
-->

## Alibab Cloudによるサーバレス活用・構築パターン

この記事では Alibaba Cloud によるサーバレス活用パターンをいくつか紹介いたします。

# Alibab Cloudによるサーバレス活用・構築パターン例


<Titlelist 
    metaTitle="KNativeによるサーバーレスK8S"
    metaDescription="Alibab Cloudによるサーバレス活用・構築パターンを説明します"
    url="https://sbcloud.github.io/help/usecase-serverless/SERVERLESS_003_serverless_k8s_deployment"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-serverless/images/00_Use_Knative_In_ASK_Cluster.png"
    date="2021/06/09"
    author="Bob"
/>




