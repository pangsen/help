---
title: "ストレージ活用パターン"
metaTitle: "Storage系プロダクトサービス活用パターンについて"
metaDescription: "Alibaba Cloud のStorageプロダクトサービス活用パターン についてを説明します"
date: "2021-08-22"
author: "Hironobu Ohara"
---

import Titlelist from '../src/Titlelist.js';

## Storage系プロダクトサービスの活用パターンについて

<!-- 
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/usecase-storage/"}}
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
    metaTitle="ArcserveによるOSSバックアップ"
    metaDescription="ArcserveBackupのクラウドストレージにOSSを使用してみた"
    url="https://sbcloud.github.io/help/usecase-storage/STORAGE_001_Using_OSS_for_cloud_storage_in_ArcserveBackup"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-storage/Storage_images_26006613465461000/20191126152821.png"
    date="2019/11/28"
    author="SBC engineer blog"
/>


<Titlelist 
    metaTitle="Cloud Storage Gatewayのご紹介"
    metaDescription="Alibaba Cloud の Cloud Storage Gateway を試してみた"
    url="https://sbcloud.github.io/help/usecase-storage/STORAGE_002_Cloud_Storage_Gateway"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-storage/Storage_images_26006613489252600/20191226165720.png"
    date="2019/12/27"
    author="SBC engineer blog"
/>

<Titlelist 
    metaTitle="FCで日中間のOSSファイル転送"
    metaDescription="FunctionComputeを利用して日本と中国リージョン間でOSSファイル転送を実現"
    url="https://sbcloud.github.io/help/usecase-storage/STORAGE_003_OSS_File_Transfer_between_Japan_and_China_Region_using_FunctionCompute"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-storage/Storage_images_26006613533484900/20200311160651.png"
    date="2020/03/18"
    author="SBC engineer blog"
/>

<Titlelist 
    metaTitle="Storage Capacity Unitsの紹介"
    metaDescription="東京リージョンでStorage Capacity Units (SCU) が利用可能になりました"
    url="https://sbcloud.github.io/help/usecase-storage/STORAGE_005_scu-tokyo-region-release"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-storage/Storage_images_26006613632265400/20200925163358.png"
    date="2020/09/25"
    author="sbc_yoshimura"
/>

<Titlelist 
    metaTitle="Synology(NAS)とOSS連携"
    metaDescription="Synology(NAS)のCloudSync機能でAlibaba Cloud OSS連携"
    url="https://sbcloud.github.io/help/usecase-storage/STORAGE_006_oss-synology-cloudsync"
    imageurl="https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-storage/Storage_images_26006613640530800/20201014120344.png"
    date="2020/10/14"
    author="sbc_yoshimura"
/>

