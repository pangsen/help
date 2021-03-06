---
title: "中国サイバーセキュリティ対策 Part2"
metaTitle: "中国の「密码法(暗号法)」と中国サイバーセキュリティ法における暗号化対策"
metaDescription: "中国の「密码法(暗号法)」と中国サイバーセキュリティ法における暗号化対策"
date: "2020-01-10"
author: "sbc_yoshimura"
---

import CommunityAuthor from '../../src/CommunityAuthor.js';

## 中国の「密码法(暗号法)」と中国サイバーセキュリティ法における暗号化対策

# はじめに

今回は中国における暗号化に関する法律について書きます。      
前半は密码法(暗号法)について、後半はサイバーセキュリティ法の暗号化要件と対策について説明します。      

※ソフトバンクが提供する「中国サイバーセキュリティ法対応支援ソリューション」はこちらをご覧ください。     
> https://www.softbank.jp/biz/services/platform/alibabacloud/solution/china/cybersecurity/



--- 

# 中国の「密码法(暗号法)」について
2020年1月1日に施行された中国の法律です。   
一部では中国怖いという形で受け取られていますが、私が調べた範囲では決してそのようなことはないため、誤解を解くような内容で書きたいと思います。   
なお、法律名の英語表記は  "Cryptography Law of the People’s Republic of China" です。    

結論を先に述べると、 一般的な日系企業が影響をうける法律ではなく、国家の安全保障関連法、また Alibaba Cloud のようなテクノロジー事業者向けの法律、のようです。    
むしろ、一般的な日系企業であれば、暗号法よりもサイバーセキュリティ法において暗号化対策が求められるデータの取り扱いの方が影響をうけると考えられます。      

※ 詳しくは後述

--- 

# 法律の全文

全部で44項目が記載されており、大枠は5つの章に分かれています。    

```
第一章 総則
第二章 中核暗号、一般暗号
第三章 商業用暗号
第四章 法律責任
第五章 附則
```

日本語訳がインプレスのサイトに公開されています。   

> https://crypto.watch.impress.co.jp/docs/news/1215987.html
  

また、オリジナルの全文はこちらで公開されています。   

* 中华人民共和国密码法    
> http://www.npc.gov.cn/npc/c30834/201910/6f7be7dd5ae5459a8de8baf36296bc74.shtml 

        
        

--- 

## 法律のポイント
様々な解説記事がネット上にありますが、私が気になった点をいくつかご紹介します。     

✅ サイバーセキュリティ法の関連法である。      
　  (第三章 商業用暗号・第二十六条, 第二十七条,  第四章 法律責任・第三十二条)    

✅ 暗号化対策を怠った重要インフラ企業には罰則がある。     
  　 (第四章 法律責任・第三十七条)    

✅ 外資企業の暗号化技術の知財を保護すること、技術移転を強要しないことが明記されている。     
　  (第三章 商業用暗号・第二十一条)      
  ※この部分は2020年1月1日に施行された外商投資法における外資企業の知的財産権の保護強化と整合性があります。     

✅ インターネット(サイバー空間)における暗号技術の重要性を認識した中国政府が、暗号技術を実社会で利用していくために立法化したような印象。      

✅ 法律の全文を通して、 具体的な暗号化対策は書かれていない。     
  
✅ WEBサービス・アプリにおいてユーザーのパスワードが政府に管理されるといったネットで話題になった文言はない。    
　　  
--- 

# 中国サイバーセキュリティ法における暗号化の要件
冒頭の説明の通り、暗号法は一般的な日系企業に影響があるものではなさそうです。     
暗号法の影響を受けるのはネットワーク製品やPC,スマホ,ストレージ製品メーカーまたはIT関連サービス事業者などが考えられます。     

それでは、一般的な日系企業が留意すべき暗号化対策はなにか？    
中国サイバーセキュリティ法では、データの暗号化を求める項目があり、以下のケースが挙げられます。    

✅  個人機微情報の保管     
> 「個人情報安全規範」においては、個人機微情報の範囲が定められており、個人の身分証番号、生物識別情報、銀行口座番号、通信記録および内容、財産情報、信用調査情報、行動追跡情報、宿泊情報、健康生理情報、取引情報等は、いずれも個人機微情報に該当する。かかる個人機微情報については、収集の際に、情報の主体の明示の同意を得なければならず、保管の際に、暗号化措置を講じなければならない。     
  
  
✅  児童個人情報の保管と使用    
> 2019 年 8 月 22 日に、国家ネットワークおよび情報化弁公室は「児童個人情報ネットワーク保護規定」を公布し、14 歳未満の未成年者の個人情報の保護に対して規制を設けている。当該規定によると、ネットワーク運営者は以下の点に注意すべきとされている。      
 (中略)       
  
> 児童個人情報の保管と使用上において、ネットワーク運営者は暗号化等の措置を講じて児童個人情報を保管すべきとなる。児童個人情報を第三者へ譲渡するときは、自らまたは第三者機構へ委託して安全評価を行うべきとなる。     
  
    
✅  金融業が扱うデータの送信と保管      
> 「個人情報安全規範」に基づき、金融業に属する企業が収集する、銀行口座番号、クレジット情報、信用調査情報等の個人財産に関する情報は、個人機敏情報に該当するので、収集の際に、情報の主体の明示の同意を取得し、かつ、送信または保管の際に情報を暗号化する等の安全措置を講じなければならない。     



参考URL : [JETRO 中国におけるサイバーセキュリティー法規制にかかわる対策マニュアル](https://www.jetro.go.jp/world/reports/2018/02/155b6354c9acea0c.html)       


--- 

# 暗号化実装のポイント
上記のようなケースで、中国国内でデータ保存・通信を暗号化が想定される箇所は、    

> * ローカルPC(スマホ)などのワークステーションのディスク     
> * クラウドのデータ保存先ディスク、ストレージ     
> * ローカルPC(スマホ)とクラウド間の通信     
> * クラウドプロダクト間の通信    

があります。    
  
ローカル環境は割愛して、Alibaba Cloud プロダクトのみで考えると、    

> データ保管    
* ECS (データディスク)  
* NAS  
* RDS  
* OSS  

> データ通信     
* 各エンドポイントへの通信    
* VPN 通信    
* HTTPS 通信   

などの暗号化対策が必要になります。　　  

それでは、１つずつチェックしていきます。     


--- 
# Alibaba Cloud プロダクトの暗号化設定

# ECS (データディスク)の暗号化
ECS(データディスク)の暗号化について、こちらのブログで詳細が書かれていましたので是非ご紹介させていただきます。     

> https://bigriver.jp/?p=5514

一方で、システムディスクは何も対策をしなくてよいか？  と言うわけではありません。     
OSはサイバーセキュリティ法において、サイバーセキュリティ等級保護の対象になります。    


--- 

## NAS の暗号化
中国リージョンでNASの暗号化を利用する場合には、暗号化機能があるリージョンと暗号化機能がまだリリースされていないリージョンがあるので、ご注意ください。      

|  リージョン  |  NASの暗号化機能  |
| ---- | ---- |
|  中国北部（青島）, cn-qingdao  |  なし  |
|  中国北部（北京）, cn-beijing  |  なし  |
|  中国北部（張家口）, cn-zhangjiakou  |  あり  |
|  中国北部（フフホト）, cn-huhehaote  | あり  |
|  中国東部（杭州）, cn-hangzhou  |  なし  |
|  中国東部（上海）, cn-shanghai  |  なし  |
|  中国南部（深セン）, cn-shenzhen  |  なし  |
|  中国西南部（成都）, cn-chengdu   |  あり  |
  
※2020年1月10日現在
  
おそらく近いうちに中国のすべてのリージョンで暗号化ができるようになると思います。     
  

実際の暗号化のやり方はとても簡単です。     
ファイルシステム作成時に暗号化を選択するだけです。     

![img](https://raw.githubusercontent.com/sbcloud/help/master/content/ICP/ICP_images_26006613495698700/20200110142528.png "img")    


--- 

# RDS の暗号化
Alibaba Cloud が提供するRDSの暗号化機能は2種類あります。      

* SSL暗号化  (アプリーDB間の暗号化通信と中間者攻撃の回避)     
* TDE暗号化  (暗号化するデータベースまたはテーブルを指定可能)     

> https://www.alibabacloud.com/help/doc-detail/53620.htm

注意すべき点は、MySQL と SQL Server のみが暗号化機能の提供があるため、それ以外のデータベースを利用する場合には、ユーザー自身での暗号化設定が必要になります。   

--- 

# OSS の暗号化
OSSは、サーバー側の暗号化とクライアント側の暗号化をサポートしています。     

* サーバー側の暗号化    
　(OSS 側で自動的にデータセンターに保存するデータを暗号化し、ダウンロードするデータを復号化)     
> https://www.alibabacloud.com/help/doc-detail/31871.htm

* クライアント側の暗号化     
　(クライアント側暗号化 SDK (「OSS 暗号化 SDK」) を使用し、データをローカルで暗号化してから、OSS にアップロード)      
> https://www.alibabacloud.com/help/doc-detail/73332.htm


        
        

--- 

# データ通信の暗号化
各プロダクトのエンドポイント一覧はこちらをご覧ください。    
多くのプロダクトがHTTPSに対応していることが分かります。     
> https://developer.aliyun.com/endpoints


VPN 通信 については、多くのプロダクトがあります。    
詳細についてはこちらのページが参考になります。     

> https://www.alibabacloud.com/china-gateway/networking


--- 

# まとめ
中国の「密码法(暗号法)」が話題から Alibaba Cloud のプロダクトの暗号化設定まで話が及びましたが、重要なことは中国ビジネスにおけるデータの取り扱いになります。     
中国ビジネスで暗号化すべきデータがあれば、 Alibaba Cloud を活用したデータの保護対策をご検討ください。     
クラウドサービスを利用することでコスト削減、工数削減だけでなく、セキュリティコンプライアンスの遵守が可能になります。     


<CommunityAuthor 
    author="吉村 真輝"
    self_introduction = "Alibaba Cloud プロフェッショナルエンジニア。中国ｘクラウドが得意。趣味は日本語ラップのDJ。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/yoshimura_pic.jpeg"
    githubUrl="https://github.com/masaki-coba"
/>




