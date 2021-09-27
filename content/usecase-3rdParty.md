---
title: "外部3rdサービス連携パターン"
metaTitle: "Alibaba Cloudと外部3rdサービスとの連携について"
metaDescription: "Alibaba Cloudと外部3rdサービスとの連携についてを説明します"
date: "2021-09-07"
author: "Hironobu Ohara"
---

import Titlelist from '../src/Titlelist.js';


<!-- 
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/usecase-3rdParty/"}}
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


## Alibaba Cloudと外部3rdサービスとの連携について

この記事では Alibaba Cloudと外部3rdサービスとの連携による活用パターンをいくつか紹介いたします。


<Titlelist 
    metaTitle="JP1・AJS3導入検証"
    metaDescription="AlibabaCloudでのミドルウェア導入検証【JP1/AJS3編①】～実装内容の検討～"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_001_jp1test_1"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613446336000/20191007201046.png"
    date="2019/10/08"
    author="SBC engineer blog"
/>



<Titlelist 
    metaTitle="JP1・AJS3動作検証"
    metaDescription="AlibabaCloudでのミドルウェア導入検証【JP1/AJS3編②】～動作検証～"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_002_jp1test_2"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613447461200/20191010203124.png"
    date="2019/10/24"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="draw.ioでアーキテクチャ図"
    metaDescription="draw.ioでAlibaba Cloudアーキテクチャ図を描こう"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_003_draw-alibaba-architecture"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613480590800/20191211193559.png"
    date="2021/09/17"
    author="bob"
/>

<Titlelist 
    metaTitle="初めてのNextcloud"
    metaDescription="NextcloudをAlibaba Cloud上で利用する"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_004_nextcloud"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613585743300/20200616101517.png"
    date="2020/06/25"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="複数人でNextcloud"
    metaDescription="NextcloudをAlibaba Cloud上で利用する(複数人利用)"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_005_nextcloud2"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613586559700/20200625102446.png"
    date="2020/06/30"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="Zabbix導入連携"
    metaDescription="Alibaba Cloud環境でZabbix導入およびCloud Monitor連携してみた"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_006_alicloud-zabbix-cloudmonitor"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613592205800/20200707124157.jpg"
    date="2020/07/09"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="Datadog導入連携"
    metaDescription="DatadogでのAlibaba Cloud連携について"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_007_alicloud-datadog01"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613599370900/20200722143931.png"
    date="2020/08/07"
    author="SBC engineer blog"
/>



<Titlelist 
    metaTitle="CloudflareでゼロトラストNW"
    metaDescription="クライアントVPN不要!  Cloudflareを使ってWebサーバへゼロトラストアクセスを実現"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_008_argotunnel"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613704024700/20210316182815.png"
    date="2021/03/17"
    author="sbc_saito"
/>



<Titlelist 
    metaTitle="CloudflareでWEBフィルタリング"
    metaDescription="Cloudflare GatewayでWebフィルタリングをやってみた"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_009_gateway"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613705046400/20210319153337.png"
    date="2021/03/25"
    author="sbc_saito"
/>



<Titlelist 
    metaTitle="Cloudflareで次世代VPN"
    metaDescription="Cloudflare WARPで次世代VPNを体験しよう"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_010_WARP"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613715939400/20210416105911.png"
    date="2021/04/19"
    author="sbc_saito"
/>

<Titlelist 
    metaTitle="日中間のゼロトラストNW"
    metaDescription="Alibaba Cloud活用で日中間のゼロトラストネットワークを実現"
    url="https://sbcloud.github.io/help/usecase-3rdParty/3RDPARTY_011_ZTNA"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-3rdParty/3rdParty_images_26006613766108400/20210524201658.png"
    date="2021/05/24"
    author="sbc_saito"
/>


