---
title: "Alibaba Cloudの使いどころ"
metaTitle: "Alibaba Cloudの使いどころについて"
metaDescription: "Alibaba Cloudの使いどころについてを説明します"
date: "2021-06-02"
author: "Hironobu Ohara"
---

# Alibaba Cloudの使いどころ

Alibaba Cloudは他の世界規模の大手クラウドサービス（AWS、GCP、Azureなど）に比べると、後発のクラウドサービスになります。そのため、プロダクトサービスやサポート対応などは他のクラウドサービスよりも遅れている部分があります。そこは日進月歩で進化中です。その点を除き、Alibaba Cloudはほとんどのシナリオに適することができます。
中でも、Alibab Cloudが得意とし、最もメリットが大きいのは、「独身の日」を支えるデータ処理基盤や、世界各地からのECサイトへのアクセスを支えるグローバル展開、堅牢なセキュリティ、そしてビジネスを継続するための機械学習などの分野と思います。

[Regions and zones](https://www.alibabacloud.com/help/doc-detail/40654.htm)

||Alibaba Cloud|AWS|Azure| GCP|
|---|---|---|---|---|
|リージョン数|24リージョン展開|24リージョン展開|54リージョン展開|23リージョン展開|
|リージョンエリア|アジアリージョン多数|欧米リージョン多数|世界全域|欧米リージョン多数|
|ECS障害時のリカバリ|◯標準提供|△オプション提供|||
|冗長構成（DB）|◯標準提供|△オプション提供|◯標準提供|△オプション提供|
|SLA（IaaS）|◯1インスタンス毎に保証|△マルチAZ構成が前提|△同じ可用性セットに2 つ以上のインスタンス|△マルチAZ構成が前提|
|サポート|△無償サポートのみ|○サポートメニュー多数|○サポートメニュー多数|○サポートメニュー多数|
|請求費用|全リージョン日本円決済|日本円決済|日本円決済|日本円決済|
|請求支払い方法|請求書払い可能|クレジットカード払い|クレジットカード払い|クレジットカード払い|


それぞれ個別に、なぜAlibaba Cloudが優れているかを解説します。

# フルマネージド型サービス

Alibaba Cloudは中国発で海外に多く広まっているクラウドサービスです。その理由は、`フルマネージド型サービスによる運用負荷からの解放` があるためです。
例えば、オンプレミスの環境のもと「サーバーを10台導入」となれば、データセンターおよびHW調達、HWら物理操作、OSインストール、ソフトウェア導入、運用、、と工数と労力が発生していまいます。それもサーバー10台となると、その分だけ手間がかかります。しかし、クラウドサービスによるフルマネージド型サービスであれば、Web上でのコンソールだけでボタンを数か所クリックするだけで、数分以内にサーバーを10台導入することができます。ユーザーはHW調達やOSインストール作業は不要です。

![フルマネージド型サービス](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/introduction/images/5.1.1.png "フルマネージド")

この概念のもと、Alibaba Cloudはクラウドをフルに生かした様々なフルマネージド型サービスを展開しています。
例えば、データベースではユーザーのワークロードに応じてノードを自動でスケーリングするPolarDB、SQLクエリ投与時、処理リソースだけノードを瞬時に分散し並列処理するMaxCompute、使った分だけ課金するので、オンプレミスより安いリモートデスクトップ、などがあります。Alibaba Cloudが選ばれる理由の１つとして、「エンジニアの労力からの解放」が挙げられます。例えば大規模Webシステムやリアルタイム分析基盤を構築する場合でも、Alibaba Cloudによるフルマネージド型サービスを使うことで、1日、長くて1週間以内に完成することも可能です。



# クラウドコンピューティング

Alibaba Cloudの立ち上げ段階で、AlibabaのWang Jian博士は、独自に開発されたコンピューティングを素早く展開する

Alibaba CloudのECS（Elastic Compute Service）は、物理サーバーよりシンプルかつ効率的に管理することができる仮想コンピューティングです。
ECSを立ち上げるために事前の準備や予約作業は不要です。インスタンス起動も、Webコンソールから数回クリックするだけで、100台のコンピューティングを30秒程度で立ち上げることができます。30秒という数値は、他クラウドサービスからみたら非常に高速です。

お客様のワークロードに応じてスケーリングするServer Load Balancer（SLB）やAuto Scalingといったプロダクトサービスもあるので、事前に予測の難しいバーストトラフィックでも、ロードパランサーは問題なく対応できることや、オートスケールによるインスタンスを即時に起動することも出来ます。そのため、コンピューティングで予測できないスケーラビリティの問題から完全に解放することが出来るのが、Alibaba Cloudのクラウドコンピューティングの特徴と言えます。

また、AlibabaはIntel社とパートナーのため、Intel XeonなどのGPU/GPUをより安く利用することができます。それだけでなく、ESSD（Enhanced SSD）という、Alibaba Cloud が独自開発した次世代の分散ブロックストレージアーキテクチャ、25 GE ネットワーク、および RDMA (Remote Direct Memory Access) 技術に基づいたストレージを提供しています。ディスク 1 台あたり最大 100 万 のランダム IOPS と、低レイテンシを実現します。これにより通常のSSDの15倍パフォーマンスを持ちながら、通常のSSDより10%安いことも特徴です。

|概要|Alibaba Cloud|AWS|Azure| GCP|
|---|---|---|---|---|
|仮想サーバーサービス|ECS|EC2|Virtual Machine|Compute Engine|
|バックエンドコンピューティングサービス|Function Compute|Lambda|Functions|Functions|

実際、SBCがクラウドコンピューティングに対するベンチマークをとったところ、クラウドサービスでNo.1のコスト・パフォーマンスを出しています。

![ECS](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/introduction/images/5.2.1.PNG "ECS")

![ECS](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/introduction/images/5.2.2.PNG "ECS")

![ECS](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/introduction/images/5.2.3.PNG "ECS")

![ECS](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/introduction/images/5.2.4.PNG "ECS")

![ECS](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/introduction/images/5.2.5.PNG "ECS")



# クラウドネイティブデータベース

Alibabaは最初はOracleやMySQLなどのベンダーに依存していました。
しかし、ユーザーのワークロードに応じたスケーリングが出来ない課題や、運用負荷、容量の上限とコスト問題といった課題に悩まされました。
そのため、Alibabaはクラウドをベースとした、クラウドネイティブデータベースを次々とリリースしています。
クラウドネイティブデータベースは、クラウド環境でよりユーザーのワークロードに応じながら適切にアプリケーションを提供することです。

例えば、
> * ユーザーのワークロードに応じた垂直・水平スケーリング機能
> *
> *


|概要|Alibaba Cloud|AWS|Azure| GCP|
|---|---|---|---|---|
|リレーショナルデータベースサービス|ApsaraDB for RDS|RDS|Database|SQL|
|NoSQLサービス|Table Store|DynamoDB|CosmosDB|Datastore|



# ビッグデータ



# ネットワーク

Alibaba Cloudは、中国でAlibaba社によって生まれ培ったクラウドサービスです。Alibaba では、基本的にネットワークからデータセンター、サーバーまでを自前で設計・開発・展開・運用を自前で行っています。Alibabaは、Alibaba.comや支付宝（Alipay）などの様々なサービスを全世界向けに提供するために、中国から日本を含めたアジアン全域、EU、アメリカなど世界規模のクローズドネットワークを持ちます。そのため、例えば日本から中国へのAlibaba Cloudによるネットワークアクセスはどの事業者よりも非常に高速で快適です。

|概要|Alibaba Cloud|AWS|Azure| GCP|
|---|---|---|---|---|
|ドメインネームサービス（DNS）|Cloud DNS|Route 53|DNS|DNS|
|コンテンツ配信ネットワーク（CDN）|CDN|CloudFront|CDN|CDN|
|ロードバランシングサービス|SLB (ServerLoadBalancer)|ELB|Load Balancer |Load Balancing |



# セキュリティ
|概要|Alibaba Cloud|AWS|Azure| GCP|
|---|---|---|---|---|
|アカウント権限管理サービス|RAM|IAM|Active Directory |IAM|
|DDoS保護サービス|Anti DDoS|AWS Shield|DDoS Protection|Armor (Beta)|
|暗号化キー管理・連携サービス|KMS|KMS|Key Vault|KMS|
|WEBアプリケーションファイアウォール|WAF|WAF|WAF|-|


# ストレージ
|概要|Alibaba Cloud|AWS|Azure| GCP|
|---|---|---|---|---|
|オブジェクトストレージサービス|OSS (ObjectStorageService)|S3|Blob Storage|Storage|
|低コストデータ格納ストレージサービス|Archive Storage|Glacier|Archive Storage|Archival Storage|
|ファイルストレージサービス|NAS |EFS|File Storage|File Store|


# 機械学習


# まとめ

