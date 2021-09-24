---
title: "LogService活用パターン"
metaTitle: "LogServiceプロダクトサービス活用パターンについて"
metaDescription: "Alibaba Cloud のLogServiceプロダクトサービス活用パターンについてを説明します"
date: "2021-08-25"
author: "Hironobu Ohara"
---

import Titlelist from '../src/Titlelist.js';

<!-- 
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/usecase-LogService/"}}
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


# Alibab Cloud LogService活用パターンについて

この記事では Alibaba Cloud LogServiceのによる活用パターンをいくつか紹介いたします。

# Alibab Cloud LogService とは

<Titlelist 
    metaTitle="LogServiceの紹介"
    metaDescription="オフラインデータを含めた、様々なデータソースをシームレスに収集するLogServiceのご紹介"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_001_what-is-logservice"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613653714800/20201221132239.png"
    date="2020/12/29"
    author="Hironobu Ohara/大原 陽宣"
/>


# Alibab Cloud LogService による構成例


<Titlelist 
    metaTitle="SDKでTwitterデータを収集"
    metaDescription="SDKでTwitterデータを収集するLogService"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_002_twitter-on-logservic"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613654233400/20201215140931.png"
    date="2020/12/29"
    author="Hironobu Ohara/大原 陽宣"
/>

<Titlelist 
    metaTitle="LogtailでCSVデータを収集"
    metaDescription="LogtailでCSVデータを収集するLogService"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_003_logtail-on-logservice"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613660740900/20201215135145.png"
    date="2020/12/29"
    author="Hironobu Ohara/大原 陽宣"
/>

<Titlelist 
    metaTitle="OSS、AWS S3からデータを収集"
    metaDescription="OSS、AWS S3からデータを収集するLogService"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_004_oss-s3-on-logservice"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613660740700/20201229131536.png"
    date="2020/12/29"
    author="Hironobu Ohara/大原 陽宣"
/>


<Titlelist 
    metaTitle="GASで株価を収集し監視する"
    metaDescription="Google Apps Script（GAS）で株価データを収集し、LogServiceの機械学習で株価予測・異常検知・監視をする"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_005_stock-on-logservice"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613670107200/20201226124040.png"
    date="2020/12/29"
    author="Hironobu Ohara/大原 陽宣"
/>


<Titlelist 
    metaTitle="SDKでExcelデータを収集"
    metaDescription="SDKでExcelデータを収集するLogService"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_006_excel-on-logservice"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613660741000/20201230152149.png"
    date="2020/12/30"
    author="Hironobu Ohara/大原 陽宣"
/>


<Titlelist 
    metaTitle="実運用を想定した構成 Part1"
    metaDescription="実運用を想定したAlibaba CloudのLogService構成を考えてみる～ログ検索編①～"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_007_Actual_Operation_part1"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613376466800/20190724155702.png"
    date="2019/07/26"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="実運用を想定した構成 Part2"
    metaDescription="実運用を想定したAlibaba CloudのLogService構成を考えてみる～ログ検索編②～"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_008_Actual_Operation_part2"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613403075200/20190823150645.png"
    date="2019/08/27"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="DataVデータソース登録方法"
    metaDescription="LogServiceをDataVのデータソースに登録する"
    url="https://sbcloud.github.io/help/usecase-LogService/LOGSERVICE_009_attach_DataV_data_source"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-LogService/LogService_images_26006613546225700/20200408175501.png"
    date="2020/04/09"
    author="SBC engineer blog"
/>




