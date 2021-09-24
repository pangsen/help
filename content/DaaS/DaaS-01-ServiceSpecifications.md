---
title: "Cloud Remote Desktop - サービス仕様"
metaTitle: "Cloud Remote Desktop Web Document - サービス仕様"
metaDescription: "本仕様書は、SBクラウド株式会社がお客様向けに提供するSB Cloud Remote Desktopソリューションサービスにおいて、サービスの概要や基本サービスやオプションサービスの内容、本ソリューションを利用する上での責任範囲、注意制限事項等の仕様を記載した文書です。"
date: "2021-09-07"
author: "Yoshihiro Matsuda"
---

## 1. 本仕様書について

## 1.1. 本仕様書の目的

本仕様書は、SBクラウド株式会社がお客様向けに提供するSB Cloud Remote Desktopソリューションサービスにおいて、サービスの概要や基本サービスやオプションサービスの内容、本ソリューションを利用する上での責任範囲、注意制限事項等の仕様を記載した文書です。

## 1.2. 用語の定義

本仕様書における用語の定義は以下の通りです。

| 用語 |説明|
|:--|:--|
| 利用者 |本サービスの仮想デスクトップを利用するエンドユーザ|
| 管理者 |本サービス利用にあたり、専用ポータルを使用して利用環境を管理する担当者|
| サービスプロバイダ |本サービスを提供する事業者。本仕様書ではSBクラウド株式会社を指す|
| VDI |Virtual Desktop Infrastructure の略称で、仮想デスクトップと同義|
| VPC |Virtual Private Cloud の略称。クラウド上に作成されるプライベート仮想ネットワーク空間|
| リージョン |データセンターを設置している独立したエリア|
| インスタンス |クラウド上で動作する仮想サーバ|
| スナップショット |ある時点のOSの状態をそのまま抜き出したもの。  バックアップで使用する|
| VPN |Virtual Private Networkの略称。 仮想の専用線で繋いで安全な通信を実現する仕組み。|
| IPsec |Security Architecture for Internet Protocolの略称。 暗号化によってパケットの完全性や機密性を実現する仕組み|
| WSUS |Windows Server Update Servicesの略称。 Microsoft社製ソフトウェアの更新プログラムを配信・適用する仕組み|

## 1.3. 本仕様書の改版

本サービスの提供内容変更に伴い、本仕様書も改版を実施します。

## 2. サービス概要

## 2.1. サービスの全体概要

「SBCloud Remote Desktopソリューション」は、SBクラウドがサービスプロバイダとして、クラウドプラットフォーム上で利用者に仮想デスクトップを提供するサービスです。  
サービスには以下の2種類があります。

- 基本サービス（詳細は3章参照）  
- オプションサービス（詳細は4章参照）  

以下の図は本サービスの利用例です。  
![2-1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_2-1.png)

仮想デスクトップを展開するクラウドプラットフォームのリージョンは、以下の参照先から選択いただけます。  

[Regions and zones](https://www.alibabacloud.com/help/doc-detail/40654.htm "Regions and zones")

## 2.2. サービスの範囲

本サービスの責任範囲については以下となります。  
`（凡例）　○：責任範囲　－：責任範囲外` 

| 項目 |お客様|サービスプロバイダ|
|:--|:--|:--|
| クラウド管理コンソール |－|○|
| 操作ポータル（管理者） |－|○|
| 操作ポータル（利用者） |－|○|
| セキュリティパッチ提供 |－|○|
| 仮想デスクトップ（OS） |－|○|
| 仮想デスクトップライセンス（OS） |－|○|
| RD接続ライセンス（オプション時） |－|○|
| Officeライセンス（オプション時） |－|○|
| 仮想デスクトップバックアップ（スナップショット）|－|○|
| 仮想デスクトップマスタ（初期） |－|○|
| 仮想デスクトップマスタ（提供後） |○|－|
| お客様導入ソフトウェア（ライセンス含む） |○|－|
| 利用者作成データ |○|－|
| 接続端末 |○|－|
| サービス接続用回線 |○|－|
| サービス接続用ネットワーク機器（設定含む） |○|－|
| NATゲートウェイ |－|○|
| VPNゲートウェイ |－|○|
| SSL-VPN（お客様環境） |○|－|
| Active Directoryサーバ（お客様環境） |○|－|
| 内部用DNSサーバ（お客様環境） |○|－|
| 外部参照用DNSサーバ（お客様環境） |○|－|
| 外部参照用DNSサーバ（クラウド提供） |－|○|
| NTPサーバ（お客様環境） |○|－|
| NTPサーバ（クラウド提供） |－|○|
| プロキシサーバ |○|－|
| KMSサーバ |○|－|
| サーバデプロイ（追加構築オプション） |－|○|

## 2.3. サービスの利用料金

仮想デスクトップが利用するクラウドプラットフォームの使用料がサービス利用料金となります。  
基本サービスの利用料として、原則以下の2種類のプランが選択可能です。  

- サブスクリプション  
- 従量課金  

サブスクリプションは月額または年額のお支払いの確認後にのみリソースを使用できる課金方法です。  
サブスクリプションを使用すると、リソースを事前に予約でき割引料金でコストを削減できます。  

従量課金は、実際に使用したリソース量に応じた料金が発生します。  
クラウドプラットフォームにおいて、従量課金は需要に応じてリソースを購入・リリースしたり、ビジネスの成長に合わせて拡張したりすることもできます。  
仮想デスクトップにおいては、お客様が夜間や休日には利用しない場合に従量課金が最適なプランとなります。  

操作ポータルやクラウド管理コンソールから仮想デスクトップを呈することで、仮想デスクトップが専有するディスク料金以外のリソースによる課金を停止することでコスト削減が可能です。  
詳細は以下をご参照ください。  

＜サブスクリプション＞  
https://www.alibabacloud.com/help/ja/doc-detail/56220.htm  

＜従量課金＞  
https://www.alibabacloud.com/help/ja/doc-detail/40653.htm  

また、追加の料金によりオプションサービスの利用も可能です。

## 2.4. 仮想デスクトップの配置について

本サービスでは契約されたお客様のアカウント内に設定された VPC(Virtual Private Cloud) 内に、仮想デスクトップを配置します。  
VPC はそれぞれ独立しており、VPC 間を跨いで通信が行われることはありません。  
VPC は1つの契約で複数持つことも可能です。  

![2-4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_2-4.png)

## 2.5. サービス利用イメージ

本サービスは利用者が保有しているPCから仮想デスクトップが設置されているクラウドプラットフォーム上のVPCに接続する事で利用できます。  
接続には以下の3つの方法があります。  

- Microsoft Remote Desktop（SSL-VPN接続）  
- Chrome Remote Desktop(Web RTC接続）  
- Remote Gateway（SSLによるブラウザ接続）  

既設のオンプレミス環境から接続する場合、お客様設備のルータまたはファイアウォールとの間をインターネットVPNで接続するIPsecもサポートします。  
サービス利用・接続のイメージは下図の通りです。  

![2-5-1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_2-5-1.png)

接続方式によるメディアへの対応は以下の通りです。  

![2-5-2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_2-5-2.png)

仮想デスクトップで対応するVPN方式一覧は以下の通りです。  

![2-5-3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_2-5-3.png)

## 2.6. セキュリティポリシー

本サービスはサービス提供業者が定めるセキュリティポリシーに則り、情報保護の観点でもご利用頂ける環境を提供します。  

詳細は以下のサイトを参照ください。  

[Alibaba Cloudセキュリティポリシーについて（セキュリティホワイトペーパー解説）](https://www.sbcloud.co.jp/service/about/alibabacloud/securitypolicy)

## 3. 基本サービス

## 3.1. 仮想デスクトップ仕様

本サービスで提供する仮想デスクトップは以下の仕様となっています。

| 項目 |仕様|
|:--|:--|
| OS | Windows Server 2019 Datacenter Edition |
| OS言語 | 日本語 |
| vCPU | 1,2,4,8,16 から選択可能|
| メモリ | vCPU との組み合わせで 2GB,4GB,8GB,16GB,32GB から選択可能|
| Cドライブ容量 | 40GB～|

詳細は「SB Cloud Remote Desktopソリューションシステム仕様」を参照ください。

## 3.2. クラウド管理コンソール

本サービスを契約するとクラウド管理コンソールが提供されます。  
クラウド管理コンソールでは管理範囲においてすべての操作が可能となります。

## 3.3. 操作ポータル（管理者）

本サービスを契約すると管理者用操作ポータルが提供されます。  
管理者用操作ポータルでは以下が可能です。  

- 仮想デスクトップ一覧表示（インスタンスID、インスタンス名、スペック、ステータス）  
- 仮想デスクトップの作成・削除  
- 仮想デスクトップの起動、再起動、停止  
- 仮想デスクトップの起動停止スケジュール設定  
- 仮想デスクトップのスペック変更  

![3-3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_3-3.png)

## 3.4. 操作ポータル（利用者）

本サービスを契約すると利用者用操作ポータルが提供されます。  
利用者用操作ポータルでは、仮想デスクトップやクラウド管理コンソールにログオンすることなく利用者にて自身の仮想テスクトップの停止・起動が可能です。  

![3-4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_3-4.png)

## 3.5. セキュリティパッチ

仮想デスクトップにはサービスプロバイダが管理する WSUS(WindowsServerUpdateServices) からセキュリティパッチを提供します。  
セキュリティパッチは重要な更新としてリリースされたものを順次配信します。  
また、仮想デスクトップの設定を変更することで利用者側が管理する WSUS からセキュリティパッチを受け取るようにすることも可能です。

## 3.6. マルウェア対策

仮想デスクトップのマルウェア対策は、Windows Server 2019 の標準機能である「Microsoft Defender ウイルス対策」でおこないます。  
利用者が管理するセキュリティ製品をインストールしてマルウェア対策をする事も可能です。

## 3.7. バックアップ

仮想デスクトップのバックアップはサービスプロバイダが管理するクラウド基盤のスナップショット機能によりおこないます。  
世代や頻度などは管理者により設定可能です。

## 4. オプションサービス

## 4.1. オプションサービスとは

オプションサービスとは追加料金により基本サービスに機能を追加することのできる有償サービスです。

## 4.2. Microsoft Officeオプション

Microsoft Office オプションは Microsoft Office を仮想デスクトップ上で利用可能にするオプションサービスです。  
Microsoft Office を利用させたいユーザー数だけ月額課金にて利用可能です。  
エディションは以下の2つから選択となります。

| エディション |同梱ソフトウェア|
|:--|:--|
| Standard |Word / Excel / PowerPoint / Outlook / Publisher|
| Professional Plus |上記に加えて、Access / Skype for Business|

## 4.3. MSRDSライセンスオプション

MSRDS ライセンスオプションは仮想デスクトップ上でWebカメラやマイクを有効化できるようにするオプションサービスです。  
必要なユーザー数のみ月単位で契約が可能となります。  
Remote Desktop マルチセッションオプションのように仮想デスクトップの共有はできませんが、その分料金が安価になります。  

![4-3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_4-3.png)

## 4.4. Remote Desktop マルチセッションオプション

Remote Desktop マルチセッションオプションは1台の仮想デスクトップを接続頻度の低い複数のユーザーで共有できるようにするオプションサービスです。  
Microsoft Remote Desktop Service の機能により複数ユーザーが同時にログオンできる環境を提供します。  
本オプションサービスにより仮想デスクトップ上でもWebカメラやマイクが利用可能になりリモートWeb会議等にも対応できるようになります。  

![4-4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_4-4.png)

## 4.5. 追加構築オプション

### 4.5.1 追加構築オプションとは

追加構築オプションは仮想デスクトップをより便利に利用するためにお客様に代わってサーバを構築し、機能を提供するオプションサービスです。

### 4.5.2 追加構築オプションメニュー

追加構築オプションには一例として以下のようなメニューがあります。  

- 仮想デスクトップカスタマイズ（ドメイン参加、スペック変更、スナップショット取得設定など）  
- Active Directoryサーバ  
- Windowsファイルサーバ  
- WSUSサーバ  
- 勤怠ログサーバ  
- FortiGate UTM構成

## 5. マネージドサービスプロバイダ（MSP）

本サービスにおける注意制限事項・免責事項は以下の通りです。  

## 5.1 MSPとは

マネージドサービスプロバイダ（MSP）とは、QAサポートと作業代行を提供するサービスです。  
QAサポートの基本料金と作業代行のサービスクレジットを合わせた料金体系となっており、作業代行のサービスメニューをご利用の場合にサービスクレジットの購入が必要となります。  
デスクトップ追加、インスタンス再起動、マスタイメージ追加作成など、作業内容に応じてサービスクレジットを消費します。  

![5-1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-ServiceSpecifications/image_5-1.png)

## 5.2 MSPメニュー

MSPの作業代行には一例として以下のようなサービスメニューがあります。  

- 仮想デスクトップの追加／削除／初期化  
- Officeライセンスの有効／無効  
- インスタンスの起動・停止スケジュール変更  
- インスタンス再起動  
- スナップショットリストア  
- リソース変更  
- マスタイメージ追加作成／更新／削除  
- 障害対応

## 6. 注意制限事項

本サービスにおける注意制限事項・免責事項は以下の通りです。  

- VMware Workstation などの仮想化ソフトウェアを使用することはできません。  
- 仮想デスクトップではサウンドカードアプリケーションはサポートされていません。  
- USBドライブ、外部ハードディスクなどの外部ハードウェアデバイスは、仮想デスクトップに直接接続できません。リモートデスクトップ接続クライアントによるリダイレクトが必要です。

その他、詳細は以下を参照ください。  

[Alibaba Cloud ECS の制限事項](https://www.alibabacloud.com/help/doc-detail/25412.htm)

## 7. FAQ

## 7.1. 基本

**•利用開始までの手続きを教えてください？**  

- アカウント登録  
- ヒアリングシート記入／ヒアリング／詳細設計書確認  

※弊社エンジニアより仮想デスクトップのスペック、ネットワーク環境等についてヒアリングさせていただきます。  

**•2019 ServerとWindows10の互換性は？**  
2019はソフトウェアとしてはWin10互換で、画面・動作も同等。高いほどの互換性があります。  
OS初期設定の差で動作が異なることがありますが、弊社にて同等設定のイメージを提供します。  
ストアアプリは利用できません。  

**•インターネット接続は可能？**  
有償プロダクトである NAT Gateway を構成してインターネットアクセスを提供します。  
オプションでプロキシ構築やUTM構築も可能です。  

**•各種インターネットブラウザが利用できますか？**  
Microsoft Edge、Google Chrome、Firefox等、Windowsに対応するブラウザを自由に選択いただくことができます。  

**•Web会議の利用はできますか？**  
Remote Desktop ではカメラとマイクが利用できないため、視聴専用となります。ローカルPCやモバイルでのWeb会議をご利用ください。  
オプションのMicrosoft RDS構成を取ることでWebカメラ、マイクの利用が可能です。別途、ユーザ数分のRDS SALのご契約が必要です。  

**•手動設定でサーバとしての利用できますか？**  
デスクトップ用設定で動作しており非推奨です。  

**•Windows以外からの接続は可能？**  
Windows / MacOS / iOS / Android / Chrome OS から接続が可能です。  
Windows以外の接続ではキーボードの設定を調整する必要がある場合があります（特殊キーのキーマッピング、Mac環境でデバイス異存で英語キーボードとして認識された場合の日本語キーボード設定 等）  

**•データの格納先は？**  
東京リージョンを選択いただくと東京およびその近郊になります。  
データセンタが設置されている日本の法律が適用されます。  
各国リージョンを選択することも可能です。  

**•ローカルPCがマルチディスプレイの場合、画面を拡張して利用できますか？**  
可能です。  
「リモートデスクチップ接続」において「リモートセッションですべてのモニターを使用する」をチェックしてください。  
Chrome Remote Desktop は標準でマルチディスプレイをサポートします。  

**•将来Server OSがバージョンアップした場合は？**  
ファイルサーバなどにデータを待避し、新OSで払い出しをすることで移行が可能です。  
新OSイメージ作成はMSPのサービスクレジットでの対応可能です。  

**•ローカルのデバイスの利用は可能？**  
Microsoftリモートデスクトップを利用する場合、ローカルドライブのリモートマウントが可能です。  
Chromeリモートデスクトップの場合、ファイルのアップロード・ダウンロードが可能です。  
Remote Desktop ではOSの制約により、Webカメラとマイクは利用できません。  

**•Linuxデスクトップの払い出しは可能ですか？**  
個別対応となります。デスクトップサービスとは別途対応となります。ご相談ください。  

**•Mac OS Xのデスクトップの払い出しは可能ですか？**  
対応していません。Mac OS Xについてはクラウド・仮想化利用をApple社が許諾していません。

## 7.2. 性能・課金

**•ハードディスクのうち、OSが占有する領域は？**  
システム領域として約25GBです。  
残り領域はデータ領域として利用できます。  

**•システムと別にデータドライブを増設できますか？**  
可能です。  

**•異なるスペックの混在は可能ですか？**  
可能です。  

**•1台単位のスペック変更は可能ですか？**  
可能です。  
OSを停止している状態でコンソールからCPU/メモリの変更が可能です。  

**•従量課金での利用時に課金停止の方法は？**  
スケジュール設定での起動・停止設定が可能です。  
ユーザ操作による課金停止、起動については操作ポータルを提供します。  

**•クラウドではトラフィック課金が高くなる？**  
インターネット外部方向のみ課金されますが、ブラウザの利用ではアップロード方向のトラフィックは少ないため少額の課金となります。  

**•デスクトップ利用が向かないアプリケーションは？**  
動画エンコードやCPUを常時フル稼働させるようなソフトウェアの利用は、内部でカウントされているCPUクレジット消費後にCPU性能が低下します。  
通常のオフィスアプリケーションの利用でクレジットが枯渇することはありません。  
大量のCPUを消費する用途の場合、上限設定の解除や推奨するモデルへ変更が可能であるためご相談ください。  

**•RDP（リモートデスクトップ接続）のネットワークトラフィックの考え方を教えてください**  
接続端末と仮想デスクトップの間のトラフィックは、高負荷時1Mbps、低負荷時は0.1 Mbps が目安です。一時的に3 Mbps 前後になることがあります。  

10ユーザのうち20%が高負荷な業務をおこなっているとして `1Mbps×2User=2Mbps` となります。  
80%が低負荷業務をおこなっているとすると `0.1Mbps×8User=0.8Mbps` となります。  
10ユーザでは、合計2.8Mbpsとなり、100ユーザでは合計28Mbpsとなります。  

一般的な業務ではウィンドウの描画は頻繁ではなく上記計算より低いトラフィック量であることが一般的です。  
RDPトラフィックはクライアントと Remote Desktop 間で発生し、インターネット方向は課金されます。  
デスクトップインスタンスとインターネットの間では NAT Gateway 経由の外方向通信で課金が発生します。  

**•YouTube等の動画利用時のRDPの通信量を抑制できますか？**  
動画の再生によりWindowsデスクトップの画面全体が再描画されるため、リモートデスクトップ接続時の解像度をあらかじめ1280x1024や1024x768等に下げおくと通信量を抑制できます。

## 7.3. CPUクレジット

**•CPUクレジットの付与や消費とは？**  
1クレジットとは1コアのvCPUを100%に相当するCPUを1分間使用できる権利に相当します。  
本ソリューションのインスタンスはCPUベースライン20%というインスタンスタイプで、2コアの仮想デスクトップインスタンスは毎分`2×0.2=0.4クレジット`、1時間で24クレジットを付与されます。  

ベースライン20%とは搭載CPUの20%を利用する権利があり、使わなかった分が蓄積されて後から利用できる。ただし、24時間利用がなかった分が蓄積の上限の576クレジットであると理解してください。  

1コアの計算例  
`CPUクレジット= vCPUコア × (baseline% - 実際の使用量%) × 分` 
baseline20%の場合で1coreの場合、
実際の使用率が10%で60分使った場合 CPUクレジット= 1 × (20%-10%) × 60分 で 1時間で 6クレジット増えます。  

CPU使用率が30%だった場合
`CPUクレジット= 1 × (20%-30%) × 60分` で1時間でマイナス6クレジットになるので、6クレジット減ります。   

1vCPU辺り初期30クレジット付与されて使わなければ蓄積され続けます（max24時間分）  
0になった場合unlimited（無制限）オプションが有効な場合は0.0008$/クレジットで課金。無効な場合はbaseline以上性能出せなくなります  

**•無制限モードへの切り替えは？**  
インスタンスタイプの変更で可能です。  
ご自身で操作できる場合はいつでも変更出ます。SBクラウドに依頼する場合は、MSPをご契約いただきサービスクレジットを使って依頼することができます。  

**•CPUクレジットを使い切ると利用ができなくなりますか？**  
CPUクレジットを使い切ってもベースラインのCPU利用率20%を超えることができませんが、作業は継続できます。  

**•本紹介資料の月額費用の算出は、具体的にはどのインスタンスですか？**  

- 1vCPU 4GB 40GBは ecs.t5-lc1m2.small（ベースライン20%）にて算出  
- 2vCPU 4GB 100GBは ecs.t5-lc1m2.large （ベースライン20%）にて算出

## 7.4. ライセンス

**•仮想デスクトップにOSライセンスは含まれますか？**  
Windows Serverライセンスが含まれます。  
Microsoft Office および Microsoft RDS のライセンスについては別途SPLAにて月額料金で提供します。  

**•ADやファイルサーバを利用する際に、Windows Server CALは必要ですか？**  
仮想デスクトップやオプションサーバはクラウド基盤のWindows Serverを利用しており、クラウド事業者としてMicrosoft者とSPLA(Microsoft Services Provider License Agreement)契約が結ばれています。  
OS利用料にはWindows Server CALも含まれており別途用意いただく必要はありません。  

**•SBクラウドからMicrosoft Officeは購入可能ですか？**  
SPLA(Microsoft Services Provider License Agreement)によりユーザ単位のライセンスで提供しています。  
SPLAとは弊社のようなクラウド・サービスプロバイダがエンドユーザ様にライセンスを提供するプログラムです。  

**•Microsoft Officeのトライアルは可能ですか？**  
弊社からのSPLA提供は有償版の提供となります。  
操作感を確認したい場合、Microsoft社提供のインストール媒体やMicrosoft 365等のトライアルを利用し、30日トライアルで動作させることで可能です。  
お客様にてご準備が必要です。  

**•自社で保有しているMicrosoft Office のライセンスは利用できますか？**  
デバイスに紐付いているライセンスは移動させることができません。  
オンプレミス向けボリュームライセンスをクラウド環境で利用することはMicrosoft社が許諾していません。  
Office 365 E3/E5等のSAに付属するモビリティ権をMicrosoft Officeに適用することをMicrosoftは許諾していません。  

**•1台の仮想デスクトップにOfficeを導入し、複数ユーザでログオンして利用することは可能ですか？**  
SPLAはユーザライセンスとなります。  
Microsoft RDS構成を取った場合、ログオンユーザ数分のMicrosoft Officeライセンス契約が必要です。  
異なるWindowsアカウントで1台の仮想デスクトップにログオンして利用するように構成した場合、同様にログオンユーザ数分のMicrosoft Officeライセンス契約が必要です。  

**•OfficeライセンスやMS RDS SALにおいてデバイスライセンスの提供はありますか？**  
Microsoft社はデバイス単位のSPLAを提供していません。ユーザライセンスのみでの提供となります。

## 7.5. オプションサーバ

**•オプションサーバとして、Windows系のサーバを構築可能ですか？**  
可能です。  
提供するWindows Server インスタンスは、2019 Datacenter Editionとなります。日本語化済みのイメージを提供可能です。  
インスタンス費用にあらかじめ含まれるため、Windows Server CALは別途必要ありません。  
弊社にてプロフェッショナルサービスとして、構築を有償にてご支援を承ります。初期構築についてはメニュー価格でのご提供、構築作業費と別途お見積もりのポリシー設計やカスタマイズもご提供可能です。  

**•オプションとして、Active Directoryを構築可能ですか？**  
可能です。  
オンプレや他社クラウドのWindowsサーバやクライアントをドメインのメンバとして管理することが可能です。  
オンプレ等からの以降についてもプロフェッショナルサービスで有償にて承ります。  
ドメインユーザの管理、ファイルサーバのアクセス権の管理、GPO（グループポリシーオブジェクト）によるOS設定やセキュリティ設定の配布をおこなうことができます。  

**•オプションとして、WSUSを構築可能ですか？**  
可能です。  
クラウド基盤として標準でWSUSを提供しているため、インターネット利用料を抑制したい用途ではお客さま専用のWSUSを構築する必要はありません。  
クラウド標準の更新配布をカスタマイズしたい場合や、オンプレのサーバやPC、他社クラウドのWindowsサーバに対して更新を配布したい場合に活用することを想定しています。  
WSUSはマイクロソフトの配布サーバとのトラフィックが大きいものの、クラウド基盤としてダウンロード方向のトラフィックは課金されないため、通信料金が高くなることはありません。  

**•オプションとして、ファイルサーバを構築可能ですか？**  
可能です。  
Windows ServerインスタンスによりWindowsネイティブのファイルサーバを構築可能であるため、OSSのSambaをベースとした互換ファイルサーバと比較してアクセス権やクライアント側の設定の互換性を意識する必要がありません。  
一般的な他クラウドのファイルサーバと比較して、容量大きくなるほど容量単価が安価となる傾向があります。

## 7.6. セキュリティ

**•自社のAD参加は可能？**  
可能です。  
VPN等でお客様ネットワークへ接続が必要です。  
ファイルサーバのアクセス権はAD参加によりドメインユーザでの設定が可能です。  

**•マルウェア対策の推奨は？**  
標準でWindows Defenderが動作します。  
お客さま保有の3rd Partyの製品も利用可能です。  

**•バックアップはされていますか？**  
デスクトップ払出時にヒアリングさせていただき、標準では定期的にスナップショットを取得します。  
オプションとしてバックアップ機能と連携が可能です。ご相談ください。  
作成ファイルの保全目的の場合、ファイルサーバのオプション構築もご提供可能です。  

**•接続端末に私物を活用 (BYOD)する場合にセキュリティ上注意すべきことはありますか？**  
仮想デスクトップからローカルPCへの持ち出し関連の機能を無効にすることを推奨します（ドライブのマウント機能、クリップボードの利用禁止）。  
接続端末がマルウェアに完成している場合にキー入力や画面を盗み取られる可能性があります。接続端末も最新の更新を適用し、特にWindows PCではマルウェア対策ソフトウェアを稼働させてください。  

**•インターネット接続のセキュリティ強化は可能？**  
NAT Gatewayの代わりに別途有償のFortigate VMを構成し、URLフィルタやマルウェア対策を提供することが可能です。オプション構築サービスも承ります。  

**•オンプレミス側でSSL-VPN対応機器を保有している場合、その活用は可能ですか？**  
可能です。  
仮想デスクトップを実行するクラウド環境とオンプレミスを別途IPsec等で接続することでオンプレミス側のSSL-VPN対応機器の活用が可能です。  

**•SmartAG APPでのSSL-VPNはHTTPプロキシを通過できますか？**  
プロキシは利用できません。  
HTTPプロキシ以外インターネットに接続できない環境でのご利用の場合、弊社営業またはエンジニアにご相談ください。  

**•WSUSでの更新時に再起動は必要ですか？**  
初期値は手動適用・再起動です。AD参加等によるGPO設定で、自動適用への変更は可能です。  

**•AD参加のために仮想デスクトップのDNSサーバの参照先を自社のDNSサーバに変更したところ、クラウド標準のWSUSから更新をダウンロードできなくなりました。どのような設定が必要ですか？**  
利用している社内のDNSサーバにおいて、フォワーダー設定をおこなってください。  
フォワーダーDNS IPアドレス：`100.100.2.136,100.100.2.138`  
DNSサーバーの設定が変更できない場合、hostsファイルを編集してください。  

``` hosts
jp.update.cloud.aliyuncs.com 100.100.5.8 
``` 

**•自宅等からの接続にVPNを利用せず、仮想デスクトップをEIPによってインターネット公開することは可能ですか？**  
可能ですが標準提案パターンからは除外しております。  
接続元IPアドレスが限定でき、Security Groupによるアクセス制御ができることをご確認ください。Microsoft RDPの通信は暗号化されていますが、3389/tcp待受ポート対する攻撃を受ける可能性があるためです。  

一般的な光回線ではルータに長時間同一のIPアドレスが付与される試用であることが多いため、一定期間固定IPアドレス相当として扱うことができます。スマートフォン等でのテザリング環境ではIPアドレスは変動するため、利用するIPアドレスで接続許可・拒否を設定することは困難です。  

Microsoft RDPをインターネット公開する場合、ポート番号を3389/tcpから変更し、外部からの攻撃を軽減することを推奨します。  
EIPのアカウントごとの取得数は標準では20に制限されています。それ以上の場合は、原則 NAT Gateway での `DNAT` を構成する必要があります。  
VPNを利用しない接続方式として、Chrome Remote Desktopによる接続をサポートしています。

## 7.7. サポート

**•MSP（監視・運用作業代行）は必須ですか？**  
管理者様の定期作業、不定期作業を支援するものです。 
SPLAによるMicrosoft Officeの導入時はライセンス管理業務を弊社にて実施するため必須となります。それ以外は、お客さまの業務負荷によりご検討ください。 

少数利用ユーザのお客さまにもお求めやすい2サービスクレジットからの安価な価格設定となっています。  
MSP for DesktopにはTSS（テクニカルサポートサービス）ベーシック契約が含まれるため、仮想デスクトップが実行されているクラウド基盤に関する問合せもおこなうことができます。  

**•WindowsやMicrosoft Officeの基本的なサポートは受けられますか？**  
MSPは管理者様のサポートとなっており、エンドユーザ様の操作に関するお問い合わせは受付できません。  

**•仮想デスクトップへ導入したアプリケーションのサポートは受けられますか？**  
お客さま導入アプリケーションのサポートは、お客さまにて販売または開発ベンダ様へお願いします。  
クラウド基盤のトラブルとの切り分けについては、TSS（テクニカルサポートサービス）に可能です。アプリケーションについては、弊社のナレッジの範囲での回答となります。  
  
## 改版履歴  

| 版数 |日付|内容|
|:--|:--|:--|
| 初版 |2021年7月5日|新規作成|