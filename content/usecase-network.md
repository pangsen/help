---
title: "ネットワーク活用パターン"
metaTitle: "Alibab Cloudによるネットワーク活用パターン"
metaDescription: "Alibab Cloudによるネットワーク活用パターンを説明します"
date: "2021-06-11"
author: "Hironobu Ohara"
---

## Alibab Cloudによるネットワーク活用パターン


import Titlelist from '../src/Titlelist.js';

## ApsaraDB for ClickHouseプロダクトサービス活用パターンについて

<!-- 
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/usecase-network/"}}
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

<Titlelist 
    metaTitle="VPC依存リソースを削除する方法"
    metaDescription="VPCの依存リソースがあって削除できない場合の対処法"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_001_how-to-delete-vpc"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613447694400/011.png"
    date="2018/06/13"
    author="SBC engineer blog"
/>

<Titlelist 
    metaTitle="SSL-VPNでPCからECSへ接続"
    metaDescription="SSL-VPNを使用してクライアントPCからECSへ接続してみた"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_002_sslvpn-verification"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613453327100/20191024172933.png"
    date="2019/10/28"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="CENで日中間メール設定方法 Part1"
    metaDescription="CENを利用した日中間メールプロキシについて Part1"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_003_cen-mail_part1"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613447694400/20191028152111.png"
    date="2019/10/30"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="CENで日中間メール設定方法 Part2"
    metaDescription="CENを利用した日中間メールプロキシについて Part2"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_004_cen-mail_part2"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613458959500/20191112144211.png"
    date="2019/11/14"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="CENで通話アプリ利用方法"
    metaDescription="通話アプリをCEN経由で使用してみる"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_005_calling_application_via_CEN"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613472212700/20191127155217.png"
    date="2019/12/05"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="VPN GatewayのIPSecを監視"
    metaDescription="VPN GatewayのIPsec接続をCloud Monitorで監視・通知する"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_006_Monitoring_VPN_Gateway_IPsec"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613628628000/20200916165522.png"
    date="2020/09/16"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="GAで安定な日中VPN環境を構築"
    metaDescription="Global Accelerator (GA) を使って安定な日中VPN環境を構築する"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_007_Using_GA_VPN_environment"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613628645100/20200916174343.png"
    date="2020/09/18"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="VBRの閉域接続を監視・通知する"
    metaDescription="VBRの閉域接続をCloud Monitorで監視・通知する"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_008_Monitoring_closed_connection_of_VBR"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613634958700/20201006112158.png"
    date="2020/10/06"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="Alibaba Cloud と AWS ネットワーク接続手順"
    metaDescription="Alibab Cloudによるネットワーク活用パターン・Alibaba CloudとAWSの間VPNGatewayでネットワーク接続手順を説明します"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_009_AlibabaCloud_AWS-VPNGatewayConnection"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/images01/00_overview.png"
    date="2021/06/09"
    author="Nancy"
/>

<Titlelist 
    metaTitle="Alibaba Cloud と Azure ネットワーク接続手順"
    metaDescription="Alibab Cloudによるネットワーク活用パターン・Alibaba CloudとAzureの間VPNGatewayでネットワーク接続手順を説明します"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_010_AlibabaCloud_Azure-VPNGatewayConnection"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/images02/00_overview.png"
    date="2021/06/09"
    author="Nancy"
/>


<Titlelist 
    metaTitle="ルーティングさせるNW構成"
    metaDescription="OpenVPNとVPC(RouteTable)の設定だけで特定ドメインのみAlibabaCloudにルーティングさせるNW構成を作る"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_011_openvpn"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613530415200/20210524172534.png"
    date="2020/03/05"
    author="sbc_tnoce"
/>


<Titlelist 
    metaTitle="CDNカスタムヘッダーを利用したキャッシング"
    metaDescription="【Albaba Cloud CDN】カスタムヘッダーを利用したキャッシングをやってみる"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_012_cdn-customheader"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613507013700/20200221010953.png"
    date="2020/02/21"
    author="sbc_fukuda"
/>


<Titlelist 
    metaTitle="VPN GatewayにIPsecで接続"
    metaDescription="VPN Gatewayに拠点ルータからIPsecで冗長接続してみる"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_013_ipsecredundant"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613628265000/20200916172346.png"
    date="2020/09/16"
    author="VPN Gatewayに拠点ルータからIPsecで冗長接続してみる"
/>


<Titlelist 
    metaTitle="CEN Transit RouterでQoS機能"
    metaDescription="CEN Transit RouterでQoS機能を使用してみた。"
    url="https://sbcloud.github.io/help/usecase-network/NETWORK_014_CEN_TransitRouter_QoS"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-network/Network_images_26006613796957300/20210813184155.png"
    date="2021/08/17"
    author="sbc_nishino"
/>


