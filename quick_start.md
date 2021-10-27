## hot to build and commit
```
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd ./docs/ -Recurse; mkdir docs ; rd yarn.lock
npm cache clean --force; yarn install ; gatsby clean ;
gatsby build --prefix-paths ; cp src/components/404.html public/; mv public/* docs/ 
git add *; git commit -m 'add Titlelist.js/CommunityAuthor.js'; git push


git add *; git commit -m 'update terraform provider'; git push
```


注意として、DevとBuildは圧縮など挙動が異なるため、問題切り分けに次のコマンド `gatsby build --no-uglify` を使う手もあり
```
gatsby build --no-uglify
```

```
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd ./docs/ -Recurse; mkdir docs ; rd yarn.lock ;npm cache clean --force; yarn install ; gatsby clean ;
gatsby build --no-uglify --prefix-paths ; cp src/components/404.html public/; mv public/* docs/ ; cp src/pwa-512.png public/
```


```
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd package-lock.json ; npm install ; gatsby clean
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd package-lock.json ; yarn install ; gatsby clean
```


```
gatsby clean
```

```
gatsby develop
```

```
gatsby build --prefix-paths
```

```
npm cache clean --force
```



import CommunityAuthor from '../../src/CommunityAuthor.js';

ShotoYuki

 sbc_sarima
 <CommunityAuthor 
    author="有馬 茂人"
    self_introduction = "2018年SoftBankへjoin。普段はIaC・コンテナ・Kubernetes等を触っているエンジニアです。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/arima.jpeg"
    githubUrl="https://github.com/s-ari"
/>


----
2018年SoftBankへjoin。普段はIaC・コンテナ・Kubernetes等を触っているエンジニアです。
---


ShotoYuki
無記載
yuki_shoto.jpg
ECSにOSSをマウントしてみる	https://www.sbcloud.co.jp/entry/2020/06/04/112208
https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/yuki_shoto.jpg
 
 <CommunityAuthor 
    author="ShotoYuki"
    self_introduction = ""
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/yuki_shoto.jpg"
    githubUrl=""
/>




・名前：tfukuda
・コメント：2019年よりAlibaba Cloudに携わる。これまでのクラウド基盤の導入経験を活かし、Alibaba Cloudを活用した様々なソリューションをお客様へ提案するプリセールスエンジニアとして奔走中。MARVEL映画大好き。
tfukuda.png
sbc_fukuda
【Albaba Cloud CDN】カスタムヘッダーを利用したキャッシングをやってみる	https://www.sbcloud.co.jp/entry/2020/02/21/cdn-customheader/
CentOS8 / RHEL8と互換性もある「Alibaba Cloud Linux 3」のご紹介	https://www.sbcloud.co.jp/entry/2021/07/27/alinux3


 <CommunityAuthor 
    author="tfukuda"
    self_introduction = "2019年よりAlibaba Cloudに携わる。これまでのクラウド基盤の導入経験を活かし、Alibaba Cloudを活用した様々なソリューションをお客様へ提案するプリセールスエンジニアとして奔走中。MARVEL映画大好き。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/tfukuda.png"
    githubUrl=""
/>



斎藤 貴広
2020年からAlibaba Cloudのソリューション開発や技術支援に従事。ネットワークや基盤などのインフラ回りがメイン領域で、最近はゼロトラストセキュリティやWeb系もかじり中。
saito.png
sbc_saito
中国拠点のNW運用負担削減に！？SAGデバイス（Smart Access Gateway）のご紹介	https://www.sbcloud.co.jp/entry/sagdevice
新SSL-VPNプロダクト「SAG-APP」を無料で試してみた	https://www.sbcloud.co.jp/entry/sag-app
クライアントVPN不要!  Cloudflareを使ってWebサーバへゼロトラストアクセスを実現	https://www.sbcloud.co.jp/entry/2021/03/17/argotunnel
Alibaba Cloud IDaaSを使ってVPN Gatewayに2要素認証を導入してみた	https://www.sbcloud.co.jp/entry/2021/03/19/idaas
Cloudflare GatewayでWebフィルタリングをやってみた	https://www.sbcloud.co.jp/entry/2021/03/25/gateway
Cloudflare WARPで次世代VPNを体験しよう！	https://www.sbcloud.co.jp/entry/2021/04/19/WARP
Alibaba Cloud活用で日中間のゼロトラストネットワークを実現	https://www.sbcloud.co.jp/entry/2021/05/24/alibaba-cloudflare
リモートアクセス用「IPsec-VPN Server」がリリースされたので、早速試してみた。	https://www.sbcloud.co.jp/entry/2021/09/27/ipsec
ZPA APPコネクタをAlibaba Cloud上に構築してRDP接続してみた	https://www.sbcloud.co.jp/entry/2021/09/27/zpa


 <CommunityAuthor 
    author="斎藤 貴広"
    self_introduction = "2020年からAlibaba Cloudのソリューション開発や技術支援に従事。ネットワークや基盤などのインフラ回りがメイン領域で、最近はゼロトラストセキュリティやWeb系もかじり中。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/saito.png"
    githubUrl=""
/>


import CommunityAuthor from '../../src/CommunityAuthor.js';
長岡周
2018年からAlibabaCloudサービスに携わる。現在プリセールスエンジニア。元営業マン。初心を忘れず日々精進。AlibabaCloud Professional（Cloud computing/Security）所持。
animal_deer.png
sbc_tnoce
Alibaba CloudのFunction Compute(サーバレスアーキテクチャ)を使ってECSインスタンスを自動起動&自動停止させる	https://www.sbcloud.co.jp/entry/tnoce_functioncompute
FunctionComputeで実現するDTS(DataTransmissionService)のデータ移行のスケジューリング処理（DTS紹介編）	https://www.sbcloud.co.jp/entry/2020/03/05/dts
OpenVPNとVPC(RouteTable)の設定だけで特定ドメインのみAlibabaCloudにルーティングさせるNW構成を作る	https://www.sbcloud.co.jp/entry/2020/03/05/openvpn


 <CommunityAuthor 
    author="長岡周"
    self_introduction = "2018年からAlibabaCloudサービスに携わる。現在プリセールスエンジニア。元営業マン。初心を忘れず日々精進。AlibabaCloud Professional（Cloud computing/Security）所持。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/animal_deer.png"
    githubUrl=""
/>




洪亜龍
2018年からPythonやJavaScriptをはじめとするAIやサービス基盤中心のバックエンド開発を担当。Alibaba Cloud、Google Cloudが得意
hon.png
sbc_hong

機械学習：ニューラルネットワークのビジュアルモデリング機能を使ってみた	https://www.sbcloud.co.jp/entry/2020/03/16/160821
PAI-AutoLearningの紹介〜コードなし、機械学習知識不要の画像分類〜	https://www.sbcloud.co.jp/entry/2020/03/31/232541
Elasticsearch 機械学習での異常検知体験	https://www.sbcloud.co.jp/entry/2020/10/28/elasticsearchML


 <CommunityAuthor 
    author="洪亜龍"
    self_introduction = "2018年からPythonやJavaScriptをはじめとするAIやサービス基盤中心のバックエンド開発を担当。Alibaba Cloud、Google Cloudが得意。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/hon.png"
    githubUrl=""
/>


import CommunityAuthor from '../../src/CommunityAuthor.js';
吉村 真輝
Alibaba Cloud プロフェッショナルエンジニア。
中国ｘクラウドが得意。
趣味は日本語ラップのDJ。
yoshimura_pic.jpeg
sbc_yoshimura

Security Center の Baseline Check を利用した中国サイバーセキュリティ法のサイバーセキュリティ等級保護2.0対策	https://www.sbcloud.co.jp/entry/2019/11/08/125447
Alibaba Cloud CLI の基本的な使い方と Tips の紹介(2019年12月版)	https://www.sbcloud.co.jp/entry/2019/12/01/aliyuncli_introduction_tips
中国の「密码法(暗号法)」と中国サイバーセキュリティ法における暗号化対策	https://www.sbcloud.co.jp/entry/2020/01/10/152228
中国リージョンECSで DNS over HTTPS (DoH) の設定をする	https://www.sbcloud.co.jp/entry/ecs_doh_cloudflare
Nginx(Forward Proxy)とGAの組み合わせで日本から中国のWEBサイトを閲覧する	https://www.sbcloud.co.jp/entry/nginx_forwardproxy_ga
東京リージョンでStorage Capacity Units (SCU) が利用可能になりました	https://www.sbcloud.co.jp/entry/scu-tokyo-region-release
Synology(NAS)のCloudSync機能でAlibaba Cloud OSS連携	https://www.sbcloud.co.jp/entry/2020/10/14/oss-synology-cloudsync
OSSブラウザで OSS Transfer Acceleration を利用する方法	https://www.sbcloud.co.jp/entry/2020/11/25/ossbrowser_transferacceleration
Alibaba Cloud 上海リージョンとさくらのクラウド東京リージョンをBBIXで繋げてみた	https://www.sbcloud.co.jp/entry/2020/12/01/alibabacloud_bbix_sakuracloud
Alibaba Cloud の EIP にPTRレコード(逆引きDNS)を設定する方法	https://www.sbcloud.co.jp/entry/2020/12/01/ptrrecord_for_eip
Alibaba Cloud の Quota Center でプロダクトのクォータを管理する	https://www.sbcloud.co.jp/entry/2020/12/10/quotacenter
中国向けWebサイトのクラウド構築 香港リージョン編	https://www.sbcloud.co.jp/entry/2021/03/18/china-web-hongkong-region
上海リージョンの Windows Server に RDP 接続して中国のインターネットを体験する	https://www.sbcloud.co.jp/entry/getinto_gfw_from_tokyo

 <CommunityAuthor 
    author="吉村 真輝"
    self_introduction = "Alibaba Cloud プロフェッショナルエンジニア。中国ｘクラウドが得意。趣味は日本語ラップのDJ。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/yoshimura_pic.jpeg"
    githubUrl="https://github.com/masaki-coba"
/>


インフラからアプリまでのシステム基盤のアーキテクトを経てクラウドのアーキテクトへ、AWS、Azure、Cloudflare などのサービスやオープンソース関連も嗜みます。
2019年1月にソフトバンクへ入社、2020年より Alibaba Cloud MVP。

import CommunityAuthor from '../../src/CommunityAuthor.js';
松田 悦洋
usjmario-yossi.jpg

残りこれぐらいです
・検索結果からその記事へ遷移する処理の不具合対応（buildの問題で開発環境だと成功できたが本番環境だと失敗する）
・indexページの見出し修正（情報量が多い）
・記事の微調整
今後はKKの問い合わせフォームにしていただけますか？
https://tm.softbank.jp/form/cloud/iaas/index.php?ref=lp-alibaba


 <CommunityAuthor 
    author="松田 悦洋"
    self_introduction = "インフラからアプリまでのシステム基盤のアーキテクトを経てクラウドのアーキテクトへ、AWS、Azure、Cloudflare などのサービスやオープンソース関連も嗜みます。2019年1月にソフトバンクへ入社、2020年より Alibaba Cloud MVP。"
    imageUrl="https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/matsuda_pic.png"
    githubUrl="https://github.com/yoshihiro-matsuda-sb"
/>



SBCのslideshare、youtube、twitter、FB　を消す
sbc_y_matsuda

知っていました ? Server Load Balancer 実はスケールするんです	https://www.sbcloud.co.jp/entry/2019/04/22/slb-scale
Rancher🐮でKubernetes (ACK) を管理しよう❗️ - 検証編 -	https://www.sbcloud.co.jp/entry/2019/06/06/rancher
Container Service for Kubernetes (ACK)をアップグレードしよう❗️	https://www.sbcloud.co.jp/entry/2019/07/01/ack-upgrade
《前編》CENでつなげる↔クラウドネットワーク🕸	https://www.sbcloud.co.jp/entry/2019/08/15/cen-first-part
《後編》CENでつなげる↔クラウドネットワーク🕸	https://www.sbcloud.co.jp/entry/2019/08/28/cen-second-part
Alibaba Cloud のオブジェクトストレージでクロスリージョンレプリケーションを使おう❗️	https://www.sbcloud.co.jp/entry/2019/10/21/oss-crr
Alibaba Cloud オブジェクトストレージサービス（OSS）にバージョン管理機能が増えました❗️	https://www.sbcloud.co.jp/entry/2019/12/07/oss-versioning
Anti-Bot Service 🕷をさわってみました❗️ - Protection 基本編	https://www.sbcloud.co.jp/entry/2019/12/12/anti-bot-base
Alibaba Cloud ECS で CentOS 8.0 が使えるようになりました❗️	https://www.sbcloud.co.jp/entry/2020/01/08/centos8
Web App Service（Web +）がリリースされていたのでさわってみた❗️	https://www.sbcloud.co.jp/entry/2020/01/11/webplus
Alibaba Cloud の RI（リザーブドインスタンス）を使おう❗️	https://www.sbcloud.co.jp/entry/2020/02/05/reserved-instance
Object Storage Service のクロスリージョンレプリケーション対応エリアが拡大しました❗️	https://www.sbcloud.co.jp/entry/2020/03/16/oss-crr
Alibaba Cloud DirectMail を使って Nextcloud からメールを送信してみる	https://www.sbcloud.co.jp/entry/2020/08/05/directmail-nextcloud
Cloudflare（クラウドフレア）で既存のDNSを使う方法を紹介するよ❗️	https://www.sbcloud.co.jp/entry/2021/03/12/cloudflare
Cloudflare Access と WARP でゼロトラストアクセスの端末制限が簡単に実現できるよ❗️	https://www.sbcloud.co.jp/entry/2021/05/13/cloudflare-access-managed-device
いまさらですがインスタンスメタデータ（Instance Metadata Service）のお話をするよ❗️	https://www.sbcloud.co.jp/entry/2021/06/30/imds
Reserved instance を購入してみよう❗️	https://www.sbcloud.co.jp/entry/2020/02/04/193106






