---
title: "Elasticsearch活用パターン"
metaTitle: "Elasticsearchプロダクトサービス活用パターンについて"
metaDescription: "Alibaba Cloud のElasticsearchプロダクトサービス活用パターンについてを説明します"
date: "2021-08-22"
author: "Hironobu Ohara"
---

import Titlelist from '../src/Titlelist.js';


<!-- 
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/usecase-Elasticsearch/"}}
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

## Alibab Cloud Elasticsearchプロダクトサービス活用パターンについて

この記事では Alibaba Cloud Elasticsearchによる活用パターンをいくつか紹介いたします。

# Alibab Cloud Elasticsearchによる構成例


<Titlelist 
    metaTitle="ElasticSearchでテキスト分類理論編"
    metaDescription="ElasticSearchでのテキスト分類（理論編）"
    url="https://sbcloud.github.io/help/usecase-Elasticsearch/ELASTICSEARCH_001_Text Classification_Theory"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-Elasticsearch/Elasticsearch_images_26006613645848000/20201028113351.png"
    date="2020/10/29"
    author="magic929"
/>

<Titlelist 
    metaTitle="ElasticSearchでテキスト分類実践編"
    metaDescription="ElasticSearchのテキスト分類実装編"
    url="https://sbcloud.github.io/help/usecase-Elasticsearch/ELASTICSEARCH_002_Text_Classification_Implementation"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-Elasticsearch/Elasticsearch_images_26006613646127600/20201028134827.png"
    date="2020/11/27"
    author="magic929"
/>



