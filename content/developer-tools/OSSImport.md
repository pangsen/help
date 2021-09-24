---
title: "OSSImport"
metaTitle: "Alibab Cloud OSSImportについて紹介します"
metaDescription: "Alibab Cloud OSSImportについて紹介します"
date: "2021-07-05"
author: "Nancy"
---

## OSSImportの手順

本書は、OSSImportの使用手順を記載します。

# 1.ossimportとは
ossimportはAlibaba Cloud 独自のリソース移行ツールです。ossimportツールをロカールサバーまたはクラウドESCにデプロイされて、ローカルまたは他のクラウドストレージシステムに格納されたデータを OSS に移行できます。

1）以下のような特徴があります。

①豊富なデータソースをサポート(必要に応じて拡張可能)
　ローカルドライブ、Qiniu、Baidu BOS、AWS S3、Azure Blob、Youpai Cloud、Tencent Cloud COS、Kingsoft KS3、HTTP、OSS

②データ転送を中断しても、途中から再開が可能

③トラフィック制御をサポート

④時刻指定または指定された接頭辞の後にオブジェクトを移行することが可能

⑤パラレルでデータのアップロードとダウンロードが可能

⑥スタンドアロンモードと分散モードをサポート。スタンドアロンモードは展開と使用が容易で、分散モードは大規模なデータ移行に適しています

2）動作環境
ossimportはLinuxまたはWindowsシステムにデプロイできます。環境制限は次のとおりです。

①Windows7および以降のバージョン（分散デプロイモードはまだ対応していない）
②Linuxシステムの最新バージョン
③Java1.7および以降のバージョン

3）デプロイ方法の選択
ossimportはスタンドアロンモードと分散モード二つのモードをサポートする
①スタンドアロンデプロイモード
データ容量は30TBが未満の場合、スタンドアロンデプロイモードをおすすめします。移行するデータにアクセスでき、OSSにアクセスできる任意のマシンにossimportをデプロイできます。

②分散デプロイモード
データ容量は30TBを超える場合、分散デプロイモードをおすすめします。移行するデータにアクセスでき、OSSにアクセスできる任意数のマシンにossimportをデプロイできます。


# 2.スタンドアロンデプロイモード
スタンドアロンデプロイモードは、LinuxおよびWindowsシステムをサポートします。

## 2-1.Windowsでスタンドアロンデプロイ

### 2-1-1.ossimportの準備
1）ossimportを下記のリンクからダウンロードする
[ossimport](https://gosspublic.alicdn.com/ossimport/standalone/ossimport-2.3.5.zip?spm=a2c4g.11186623.2.7.4a6417369pzbLZ&file=ossimport-2.3.5.zip)

2）Zipファイルを解凍する
ディレクトリ構成：
```
ossimport
├── bin
│   └── ossimport2.jar  # Master、Worker、TaskTracker、Consoleを含む4つのモジュールの合計jar
├── conf
│   ├── local_job.cfg   # Jobコンフィグファイル
│   └── sys.properties  # システム動作パラメータのコンフィグファイル
├── console.bat         # Windowsコマンドライン、転送タスクの分散実行
├── console.sh          # Linuxコマンドライン、転送タスクの分散実行
├── import.bat          # Windowsワンクリックインポート、構成ファイルconf/local_job.cfgによって構成されたデータ移行タスクを実行します。 起動、移行、検証、再試行を含む。
├── import.sh           # Linuxワンクリックインポート、構成ファイルconf/local_job.cfgによって構成されたデータ移行タスクを実行します。 起動、移行、検証、再試行を含む。
├── logs                # ログディレクトリ
└── README.md           # ドキュメント、使用前に注意深く読むことをお勧めします
```
![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/01-win_ossimport_01.png "Win ossimport 01")

3）必要に応じて、conf/sys.propertiesファイルとconf/local_job.cfgファイルを編集します
以下を変更しないように注意してください。
①conf/sys.propertiesのworkingDir、workerUserName、workerPassword、privateKeyFile構成アイテム
②conf/local_job.cfgの名前、場所、jobName構成アイテム
備考：ジョブを送信する前に、sys.propertiesおよびlocal_job.cfgのパラメーターを確認してください。ジョブの送信後にパラメーターを変更することはできません。

4）local_job.cfgコンフィグファイルの説明
```local_job.cfg
#インクリメンタルモードを開くかどうか、trueに設定すると、インクリメンタルデータは間隔incrementalModeInterval（単位秒）ごとに再スキャンされ、インクリメンタルデータはossに同期されます。incrementalModeIntervalを3600秒未満の値に設定することはお勧めしません、それは無駄になる多くのリクエストが追加のオーバーヘッドを引き起こす（現在、構成可能な最小間隔は900秒です）
isIncremental=false
incrementalModeInterval=86400

##############################################################同期元の設定##############################################################
#同期ソースタイプ、現在サポート：
#1.local(ローカルファイル、この項目はsrcPrefixのみが設定する必要がある。srcAccessKey、srcSecretKey、srcDomain、srcBucketを設定する必要がありません。
#2.oss(ossの1つのバケットから別のバケットに移行する)
#3.qiniu(qiniu)
#4.bos(Baiduのクラウドストレージ)
#5.ks3(Kingsoftクラウドストレージ)
#6.s3(AWS s3)
#7.youpai(youpai、youpaiはファイルリストを取得するAPIは特別で、リストは同期中のブレークポイントをサポートしていません。したがって、リストが完了していないときに同期プロセスを強制終了すると、次回はすべてのファイルのリストが再リストされます。)
#8.http (提供されたhttpリンクリストによってデータを同期します。srcAccessKey、srcSecretKey、srcDomain、srcBucket、srcPrefixを設定する必要がありません）
#9.cos(Tencent Cloud)
#10.azure(azure blob)
srcType=local

#ソースaccess key,localとhttpの同期では設定しない、ほとんどのクラウドは、コンソールに取得したacceess key/accss key idを記入します。youpaiは操作員のアカウントを記入する
srcAccessKey=

#ソースsecrect key,localとhttpの同期では設定しない、ほとんどのクラウドは、コンソールに取得したsecret key/access key secretを記入します。youpaiは操作員のパスワードを記入する
srcSecretKey=

#ソースendpoint,localとhttpの同期では設定する必要がない
#1.oss: コンソールからドメインを取得する(プレフィックスが付いていないセカンドレベルドメイン名),ドメインリストをご参照https://help.aliyun.com/document_detail/31834.html; 例えば:"srcDomain=http://oss-cn-hangzhou-internal.aliyuncs.com"; AlibabaCloudのECSでマイグレーションをする際に、internalドメインを使ってください、フリーまた、仮想マシンの帯域幅による制限はありません(非仮想マシンは使用できません)；例えば：http://oss-cn-hangzhou-internal.aliyuncs.com
#2.qiniu: qiniuのコンソールから対応するバケットのドメインを取得する
#3.Baidubos: http://bj.bcebos.comまたはhttp://gz.bcebos.com
#4.Kingsoftks3: http://kss.ksyun.comまたはhttp://ks3-cn-beijing.ksyun.comまたはhttp://ks3-us-west-1.ksyun.com
#5.AWS s3: 各regionはご参照http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
#6.youpai:　http://v0.api.upyun.com(最適なルートを自動的に決定)またはhttp://v1.api.upyun.com(Telecomルート)またはhttp://v2.api.upyun.com(Unicomネットワークルート)またはhttp://v3.api.upyun.com(China Mobiletietong ルート)
#7.TencentCloud: cos v3バージョンは設定必要ない;cos v4バージョンはbucketのリージョンを設定する必要がある、South China:gz,North China District:tj,East ChinaDistrict:sh
#8.azureblob: 接続文字列のEndpointSuffix、例：core.chinacloudapi.cn
srcDomain=

#ソースbucket名，localとhttpの同期では設定する必要がない。"/"を追加する必要がない；azure blobはcontainer名を設定する
srcBucket=

#ソースプレフィックス、デフォルトは空である、srcType=localの場合、このディレクトリはローカルディレクトリです。その他タイプの場合、ソースバケットで同期する必要があるオブジェクトのプレフィックスです,ローカルディレクトリの場合は、完全なディレクトリパスが必要であることに注意してください(「/」で分割し、「/」で終了します、例: c:/example/)
srcPrefix=D:/work/oss/data/

##############################################################同期先の設定##################################################################
#ターゲットaccess key
destAccessKey=Jwd1******nMnZBs

#ターゲット secret key
destSecretKey=ir8Qt*****jwh5b0eF******xM5QE

#ターゲットendpoint,実際のossリージョンによって設定してください。デフォルトは杭州のリージョンです。 AlibabaCloudのECSでマイグレーションをする際に、internalドメインを使ってください、フリーまた、仮想マシンの帯域幅による制限はありません(非仮想マシンは使用できません)；例えば：http://oss-cn-hangzhou-internal.aliyuncs.com
#注意:ドメイン名にバケットのプレフィックスを含めないでください,ossドメイン名のヘルプページ:https://help.aliyun.com/document_detail/31837.html
destDomain=http://oss-cn-hangzhou-zmf.aliyuncs.com

#ターゲットbucket，「/」を追加する必要はありません
destBucket=mybucket

#ターゲットプレフィックス、デフォルトは空である、bucketの中に直接保存する(ossの特定のディレクトリにデータを同期する場合は、「/」で終了してください）備考: '/'をファイルの先頭としてサポートしていない、したがって、「/」で始まるdestPrefixを設定しないでください。
#一つのローカルファイルパスは srcPrefix + relativePathのファイルです。ossにマイグレーションされたパスはdestDomain/destBucket/destPrefix + relativePathです
#クラウドファイルのパスは srcDomain/srcBucket/srcPrefix + relativePathのファイルです。ossにマイグレーションされたパスはdestDomain/destBucket/destPrefix + relativePath
destPrefix=docs/

##############################################################srcType=cosの場合設定項目#######################################################
#腾讯云的appId
#Tencent CloudのappId
appId=0

##############################################################srcType=youpaiの場合設定項目####################################################
#youpaiストレージデータ移行ファイルがCDNからダウンロードされているかどうか。youpaiストレージからのダウンロード操作はデフォルトで速度制限がある。データ移行の速度に影響を与える。CDNを設定する場合、クラウドストーレジからマイグレーションファイルのリストを取得できる。CDNからデータをダウンロードする。cdnHost+keyはダウンロードアドレスである

isDownloadFromCdn=false
cdnDomain=

##############################################################srcType=httpの場合設定項目######################################################
#srcType="http"の場合、httpリストファイルの絶対パスを指定する必要がある。このファイルのhttpリンクは、2つの列に分割する必要があります。これは、ossにアップロード後のプレフィックスと相対パスを表します。
#例、完全なhttpリンクが127.0.0.1/aa/bb.jpgである、異なる分割方法は、最終的にossへの異なるアップロードパスになる
#c:/example/http.listファイル内容：
#127.0.0.1/aa/              bb.jpg
#127.0.0.1/                   aa/bb.jpg
# 一行目のファイルをossにインポートした後のパスは "destDomain/destBucket/destPrefix" + "bb.jpg"
# 二行目のファイルをossにインポートした後のパスは "destDomain/destBucket/destPrefix" + "aa/bb.jpg"
httpListFilePath=c:/example/http.list
httpPrefixColumn=1
relativePathColumn=2

##############################################################タスク構成、特別な要件がない場合変更する必要はありません#########################
#job名、各タスクは唯一です。スタンドアロンモードでこのアイテムを変更しないでください
jobName=local_test

#jobタイプ(import/audit)，importはデータがOSSに同期する、auditはソースデータとOSSデータが一致していないかどうかを検証する
jobType=import

#ソースファイルの最終変更時間がこの時間よりも長いデータのみをインポートします。デフォルトは０である、このタイムはUnixタイムスタンプ（秒）です
importSince=0

#検証するとき、ファイルの最終変更時間がこの時間よりも長ければ、このファイルの検証をスキップします。デフォルトが０である時、この機能がオフにする。すべてのファイルは検証する必要がある。このタイムはUnixタイムスタンプ（秒）です。jobTypeはauditの場合、このアイテムは有効になりません
lastModify=0

#データ移行時、既存のファイルをスキップするかどうか。trueに設定すると、ファイルサイズとLastModifedTimeに従ってスキップするかどうかを判断します。falseの場合、OSS上の既存のファイルを常に上書きします。jobTypeはauditの場合、このアイテムは有効になりません
isSkipExistFile=false

# サブタスクあたりのファイルの最大数制限、この設定はタスク実行の並列処理に影響します。一般的にファイルの総数/ 120を設定する
taskObjectCountLimit=10000

#各サブタスクがダウンロードした最大ファイルサイズ制限（バイト）です
taskObjectSizeLimit=1000000000

#ファイルリストを並行してスキャンするスレッドの数である。ファイルのスキャンの効率にのみ影響し、特別な要件がない場合は変更しないでください
scanThreadCount=1

#ディレクトリの最大許容並列スキャン深度である。デフォルト1は最上位ディレクトリ間でのみ並列スキャンできる。特別な要件がない場合は変更せず、自由に設定しすぎると、タスクは正常に動作しなくなる
maxMultiThreadScanDepth=1

#単一のラージファイルがマルチパートアップロードの並行数。デフォルトは150MBを超えるとラージファイルになる、フラグメントは50MBです。srcType= localの場合に有効であり、それ以外の場合はこの設定項目は無効です。
uploadThreadNumPerLargeFile=3

#この値より大きいファイルはマルチパートアップロードする。それ以外の場合は通常のアップロードが使用されます。1MBを超えて設定してください。有効な設定値は：50m / 1024m / 5g
multipartUploadThreshold=150m

#マルチパートアップロードのパートサイズを設定する。100kを超えるデータを設定してください。設定しないと無効になります。デフォルト値は50MBです。有効な設定値は500k / 50m / 2g。
multipartUploadPartSize=50m

#OSSに保存するデータは暗号化する。デフォルトは暗号化しない
isServerSideEncryption=false

#localの場合、リンクファイルがアップロードされるかどうかの設定です、デフォルトはアップロードされません
isAllowSymbolicLink=false

#Qiniu Cloud StorageがMetaを取得する方法です（有効値はheadとstatです）、デフォルトhastatを使用します。headはHTTP HEADリクエストにより取得する。statはBucketManager.statによる取得する。
getObjectMetaMode=stat

#データマイグレーション後、データの正確性を検証するかどうかの設定です。デフォルトは検証する
isAuditAfterImport=true

#データ検証方式です。有効値はsimple/general/detailed、デフォルトはgeneral。simpleファイルのsizeのみを検証する。generalはファイルのsize/lastModify/headerを検証する。detailedはファイルのCRCまはMD5を検証する。開発中
auditMode=general
```

5）sys.propertiesコンフィグファイルの説明

```sys.properties
#ワークスペース、スタンドアロンモードこの設定が必要ない
workingDir=.

#スタンドアロンモードこの設定が必要ない
workerUserName=

#スタンドアロンモードこの設定が必要ない
workerPassword=

#スタンドアロンモードこの設定が必要ない
privateKeyFile=

#移行を実行するワーカースレッド数、大きく設定するとより多くのメモリを使用します
workerTaskThreadNum=60

#移行速度の合計トラフィックの上限
workerMaxThroughput(KB/s)=100000000

#タスク配布の並行スレッド数、デフォルトは一般的に満足している
dispatcherThreadNum=1

#不明なエラーが発生した場合続行するかまたは中止するか、デフォルトはスキップする
workerAbortWhenUncatchedException=false

#OSSにメタデータx-oss-meta-md5でマイグレーションファイルのMD5値を記録するかどうか、デフォルトは記録しない
workerRecordMd5=false

#プロセスが使用する最大メモリです。2048m / 4gのような単位でご注意ください
javaHeapMaxSize=1024m
```
### 2-1-2.ossimportでLocalファイルをOSSにマイグレーション
2）マイグレーションの準備
①Localファイルを用意する
![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/02-win_ossimport_local_01.png "local file 01")

 ![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/02-win_ossimport_local_02.png "local file 02")

 ![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/02-win_ossimport_local_03.png "local file 03")

②ターゲットOSSバケットを用意する

![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/03-oss_bucket.png "oss bucket")

③configファイルを設定する
記入例：
・srcType ：ソース元を指定します。今回はlocalを指定します
```
srcType=local
```
・srcPrefix ：ローカルパスを指定します。フォルダの場合、"/"を付けてください
```
srcPrefix=D:/ossimport-2.3.5/local-oss/
```
・destAccessKey：Alibaba Cloud API にアクセスするための AccessKeyIDを記載します
```
destAccessKey=LT*************Q
```
・destSecretKey：Alibaba Cloud API にアクセスするための AccessKeySecretを記載します
```
destSecretKey=e*************************U
```
・destDomain：Alibaba Cloud OSSのエンドポイントを記載してください
```
destDomain=http://oss-ap-northeast-1.aliyuncs.com
```
・destBucket：Alibaba Cloud OSSのバケット名を記載します
```
destBucket=localtooss
```
・destPrefix：Alibaba Cloud OSSのディレクトリを記載します
注：OSSは '/'でファイルの先頭をサポートしていません。 '/'で始まる値は記入しないでください

```
destPrefix=test/
```

3）マイグレーションを実行する
①import.batをダブルクリックする
![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/04-ossimport_run_01.png "ossimport run 01")

②マイグレーションを実行する
![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/04-ossimport_run_02.png "ossimport run 02")

 ![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/04-ossimport_run_03.png "ossimport run 03")

![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/04-ossimport_run_04.png "ossimport run 04")

③マイグレーションを実行完了する
![Win ossimport](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/04-ossimport_run_05.png "ossimport run 05")

④OSSファイルを確認する

![ossimport file check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/05-ossimport_file_check_01.png "file check 01")

![ossimport file check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/05-ossimport_file_check_02.png "file check 02")

![ossimport file check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/05-ossimport_file_check_03.png "file check 03")

## 2-2.Linuxでスタンドアロンデプロイ
### 2-2-1.ossimportの準備
1）ECSを用意する
![create ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/06-Create_ECS.png "Create ECS ")

2）ECSをログインする
![Install OSSImport ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/07-Install_OSSImport_01.png "OSSImport 01")
```
# yum install -y unzip
# wget http://gosspublic.alicdn.com/ossimport/standalone/ossimport-2.3.1.zip
# mkdir ossimport
# mv ossimport-2.3.1.zip ossimport
# cd ossimport
# unzip ossimport-2.3.1.zip
```
②unzipをインストールする
![Install OSSImport ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/07-Install_OSSImport_02.png "OSSImport 02")

③OSSImportファイルをダウンロードする、zipファイルが正常に解凍されたことを確認する。
![Install OSSImport ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/07-Install_OSSImport_03.png "OSSImport 03")

3）同期用コンフィグファイルの作成
①OSSImportコンフィグファイルを設定する
```
# cp -p conf/local_job.cfg conf/local_job.cfg.bak
# vim conf/local_job.cfg
```
 ![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/08-OSSImport_config_01.png "OSSImport config 01")

![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/08-OSSImport_config_02.png "OSSImport config 02")
②記入例
srcType ：ソース元を指定します。今回はS3を指定します
```
srcType＝s3
```
srcAccessKey：AWS API にアクセスするための AccessKeyIDを記載します
```
srcAccessKey=*************OXBX
```
srcSecretKey：AWS API にアクセスするための AccessKeySecretを記載します
```
srcSecretKey=*************cNum
```
srcDomain：AWS S3のリージョンをご記入ください
```
srcDomain=http://s3.ap-northeast-1.amazonaws.com
```
srcBucket：S3のバケット名を記載します
```
srcBucket=s3-to-oss
```
srcPrefix：スペースを指定します
```
srcPrefix=
```
destAccessKey：Alibaba Cloud API にアクセスするための AccessKeySecretを記載します
```
destAccessKey==*************RKwQ
```
destSecretKey：Alibaba Cloud API にアクセスするための AccessKeyIDを記載します
```
destSecretKey==*************ofVU
```
destDomain：Alibaba Cloud OSSのエンドポイントを記載してください。内部ドメイン名を使用してください（非仮想マシンは使用できません）
例：http://oss-cn-hangzhou-internal.aliyuncs.com
ドメイン名にバケット接頭辞を含めないでください
```
destDomain=http://oss-cn-hangzhou-internal.aliyuncs.com
```
destBucket：Alibaba Cloud OSSのバケット名を記載します
```
destBucket=awstooss
```
destPrefix：Alibaba Cloud OSSのディレクトリを記載します
注：OSSは '/'でファイルの先頭をサポートしていません。 '/'で始まる値は記入しないでください
```
destPrefix=
```

4）Java環境の確認とインストール
①java環境の確認。※バージョンは 1.7 以上
```
# yum install -y java
# java -version
```
![Java config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-Java_config_01.png "Java config 01")

5）S3のファイルを確認する
![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_01.png "S3 file 01")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_02.png "S3 file 02")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_03.png "S3 file 03")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_04.png "S3 file 04")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_05.png "S3 file 05")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_06.png "S3 file 06")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_07.png "S3 file 07")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_08.png "S3 file 08")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_09.png "S3 file 09")

![ S3 file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/09-S3_file_10.png "S3 file 10")

### 2-2-2.ossimportでAWS S3からOSSにマイグレーション

1）OSSImportを起動、データ移行
①OSSImportを起動し、移行元の全データを移行するテストを行います。
```
# bash import.sh stat
```

![ Run OSSImport ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/10-Run_OSSImport_01.png "OSSImport 01")

![ Run OSSImport ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/10-Run_OSSImport_02.png "OSSImport 02")
「Clean the previous job, Yes or No:」が表示された場合は「Yes」を入力して、エンターキーを押します。
インポートが終了すると「Stop import service, Yes or No:」が表示されるので「Yes」を入力して、エンターキーを押します。

![ Run OSSImport ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/10-Run_OSSImport_03.png "OSSImport 03")

2）OSSのファイルを確認する
①移行先のOSSにログインして、移行が正常に行われたかを確認します。
![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_01.png "Migration check 01")

②フォルダおよびファイルを確認する
![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_02.png "Migration check 02")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_03.png "Migration check 03")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_04.png "Migration check 04")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_05.png "Migration check 05")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_06.png "Migration check 06")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_07.png "Migration check 07")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_08.png "Migration check 08")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_09.png "Migration check 09")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_10.png "Migration check 10")

③OSSImport実行ログを確認する
![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_11.png "Migration check 11")

![ Migration check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/11-Check_Migration_12.png "Migration check 12")

# 3.分散デプロイモード
分散デプロイモードは、Linuxのみをサポートします。
# 3-1.Linuxで分散デプロイモード

### 3-1-1.ossimportの準備
1）CentOS ECS三つを用意する
ECS1はMasterで、ECS2とECS3はworkerにする

![create ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/12-Create_ECS.png "Create ECS")

2）ECSをログインする
![create ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/13-Login_ECS_01.png "Login ECS 01")

 ![create ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/13-Login_ECS_02.png "Login ECS 02")

 ![create ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/13-Login_ECS_03.png "Login ECS 03")
備考：MasterのECS1とWorkerのECS2とECS3のユーザー名とパスワードは同じに設定する。

3）
下記コマンドをMasterのECS1実行し、ossimportをダウンロードして解凍します
（ECS2とECS3には実行しない）
```
# yum install -y unzip
# wget https://gosspublic.alicdn.com/ossimport/international/distributed/ossimport-2.3.5.tar.gz
# mkdir ossimport
# mv ossimport-2.3.5.tar.gz ossimport
# cd ossimport
# tar -zxvf ossimport-2.3.5.tar.gz
# ll
```
Master　ECS1：
![OSSImport download ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/14-Install_OSSImport_01.png "OSSImport download 01")

![OSSImport download ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/14-Install_OSSImport_02.png "OSSImport download 02")

4）Java環境の確認とインストール
MasterのECS1とWorkerのECS2とECS3もJavaをインストールする
①java環境の確認。※バージョンは 1.7 以上
```
# yum install -y java
# java -version
```
ECS1：
![java install ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/15-Install_java_01.png "java install 01")

ECS2：
![java install](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/15-Install_java_02.png "java install 02")

ECS3：
![java install](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/15-Install_java_03.png "java install 03")

4）マイグレーション元のファイルを確認する

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_01.png "OSS file 01")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_02.png "OSS file 02")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_03.png "OSS file 03")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_04.png "OSS file 04")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_05.png "OSS file 05")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_06.png "OSS file 06")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_07.png "OSS file 07")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_08.png "OSS file 08")

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/16-OSS_file_09.png "OSS file 09")


5）マイグレーション先のフォルダを確認する

![ OSS file ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/17-OSS_file.png "OSS file ")


### 3-1-2.ossimportのコンフィグファイルを設定
1）ossimportファイル構成
```
ossimport
├── bin
│   ├── console.jar     # Consoleモジュールのjar
│   ├── master.jar      # Masterモジュールのjar
│   ├── tracker.jar     # Trackerモジュールのjar
│   └── worker.jar      # Workerモジュールのjar

│   ├── job.cfg         # Job構成ファイルテンプレート
│   ├── sys.properties  # システムパラメータの構成ファイルテンプレート
│   └── workers         # Workerリスト
├── console.sh          # コマンドラインツール、現在Linuxのみをサポートする
├── logs                # ログディレクトリ
└── README.md           # ドキュメント、使用前に注意深く読むことをお勧めします
```

* OSS_IMPORT_HOME：OssImportのルートディレクトリ、デフォルトは解凍コマンドのディレクトリ`$HOME/ossimport`です。

* `export OSS_IMPORT_HOME=<dir>` このコマンドまたはシステム構成ファイルの`$HOME/.bashrc`を設定することができますデフォルトのディレクトリをお勧めします。

* OSS_IMPORT_WORK_DIR：OssImportのワークスペース、`conf/sys.properties`の設定項目によりworkingDirを指定します。`$HOME/ossimport/workdir`をお勧めします。

* OSS_IMPORT_HOME或OSS_IMPORT_WORK_DIR絶対パスを設定してください、例えば`/home/<user>/ossimport`　または `/home/<user>/ossimport/workdir`です。

分散デプロイモードの構成は下記三つのファイルがあります。（conf/sys.properties、conf/job.cfg、conf/workers）
> * ①conf/job.cfg：分散モードのタスクの構成ファイルテンプレート。
> * ②conf/sys.properties：システム実行パラメータ構成ファイル、ワークディレクトリ、ワーカー実行パラメータなど
> * ③conf/workers：ワーカーリスト

* sys.propertiesとjob.cfgのパラメータ設定はタスクをサブミットした後は変更することができません。その前に設定してください。Workerリストのworkersはサービスを起動する前に指定ください。起動後追加または削除することはできません。

2）MasterのECS1でコンフィグファイルを設定する

①job.cfgを設定する
下記のコマンドを実行し、job.cfgを設定する
```
# cd conf
# cp -p job.cfg job1.cfg
# vim job1.cfg
```
②job1.cfg記入例

jobNameを指定する
```
jobName=local_test
```
srcType ：ソース元を指定します。今回はS3を指定します
```
srcType＝oss
```
srcAccessKey：AWS API にアクセスするための AccessKeyIDを記載します
```
srcAccessKey=*************OXBX
```
srcSecretKey：AWS API にアクセスするための AccessKeySecretを記載します
```
srcSecretKey=*************cNum
```
srcDomain：ossのリージョンをご記入ください
```
srcDomain=http://oss-ap-northeast-1-internal.aliyuncs.com
```
srcBucket：ossのバケット名を記載します
```
srcBucket=nyc-demo-data
```
srcPrefix：スペースを指定します
```
srcPrefix=
```
destAccessKey：Alibaba Cloud API にアクセスするための AccessKeySecretを記載します
```
destAccessKey==*************RKwQ
```
destSecretKey：Alibaba Cloud API にアクセスするための AccessKeyIDを記載します
```
destSecretKey==*************ofVU
```
destDomain：Alibaba Cloud OSSのエンドポイントを記載してください。内部ドメイン名を使用してください（非仮想マシンは使用できません）
例：http://oss-cn-hangzhou-internal.aliyuncs.com
ドメイン名にバケット接頭辞を含めないでください
```
destDomain=http://oss-ap-northeast-1-internal.aliyuncs.com
```
destBucket：Alibaba Cloud OSSのバケット名を記載します
```
destBucket=oss-multi-oss
```
destPrefix：Alibaba Cloud OSSのディレクトリを記載します
注：OSSは '/'でファイルの先頭をサポートしていません。 '/'で始まる値は記入しないでください
```
destPrefix=
```

MasterのECS1：
 ![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/18-Config_job_01.png "Job config 01")

 ![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/18-Config_job_02.png "Job config 02")


②MasterのECS1でsys.propertiesを設定する
下記のコマンドを実行し、sys.propertiesを設定する
```
#cd conf
#vim sys.properties
```
記入例
workingDirとworkerPasswordはWorkerのECSを設定し、その他はデフォルトのままにする。（WorkerのECSはパスワード同じに設定してください。）
```
workingDir=/root/ossimport/workingDir/
workerUserName=root
workerPassword=*********
```
ECS1：
 ![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/19-Config_sys_01.png "sys config 01")


③MasterのECS1でworkersを設定する
下記のコマンドを実行し、workersを設定する
```
#cd conf
#vim workers
```

記入例
workerのプライベートIPを設定する。一行目はMasterのECS1のプライベートIPである。
MasterとWorkerの通信はイントラネットで接続する
```
172.16.1.77
172.16.1.79
172.16.1.78

```
ECS1：
 ![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/20-Config_worker_01.png "worker config 01")

 ![OSSImport config ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/20-Config_worker_02.png "worker config 02")

### 3-1-2.ossimportでOSSの間にマイグレーション
１）分散デプロイモード手順紹介
分散デプロイモードでは、タスク実行する順は、タスク構成ファイルの編集、サービスのデプロイ、同じ名前のタスクのクリア、タスクの送信、移行サービスの起動、タスクステータスの表示、失敗のサブタスクのリトライ、移行タスクの停止です。

①サービスのデプロイ：Linuxで下記コマンドを実行する
```deploy
bash console.sh deploy
```
デプロイの前に、conf /job.cfgおよびconf / workersが変更済みです。

②同名タスクのクリア：同名のタスクを実行した場合は、タスクを再実行する必要があります。予め同名のタスクをクリアしてください。実行されていない場合、または失敗したサブタスクを再試行する場合は、clearコマンドを実行する必要はありません。Linuxで下記コマンドを実行する
```clean
bash console.sh clean job_name
```
③タスクの送信:OssImportは、同名のタスクを繰り返し送信することはできません。同名のタスクがある場合、cleanコマンドてクリーンアップしてください。
タスクを送信するには、タスクの構成ファイルを指定する必要があります。タスク構成ファイルのテンプレートはconf / job.cfgにあります。テンプレートに基づいて、変更することをお勧めします。Linuxでbashconsole.sh submit [job_cfg_file]を実行し、構成ファイルがjob_cfg_fileのジョブを送信します。job_cfg_fileはオプションです。指定しない場合、デフォルトは$ OSS_IMPORT_HOME/conf/job.cfgです。console.shのデフォルトディレクトリは$ OSS_IMPORT_HOMEです。

④移行サービスの起動:Linuxで下記コマンドを実行する
```
bash console.sh start
```
⑤タスクステータスの表示:Linuxで下記コマンドを実行する
```
console.sh stat
```
⑥失敗タスクのリトライ：ネットワークまたはその他の理由で、タスクが失敗する場合があります。再試行は失敗したタスクのみを再試行し、成功のタスクは再試行されません。Linuxでbashconsole.sh try [job_name]を実行します。job_nameはオプションです。job_nameを指定すると、失敗したタスクのサブタスクが再試行されます。job_nameを指定しないと、失敗したすべてのサブタスクが再試行されます。
⑦サービスの停止:Linuxで下記コマンドを実行する
```
bash console.sh stop
```
備考：
・パラメータが間違っている場合、bashconsole.shは自動的にコマンドフォーマットを示される。
・構成ファイルと送信されたタスクのディレクトリは絶対ディレクトリをお勧めします。
・タスクの構成、つまりjob.cfgの構成項目
・送信後に構成アイテムを変更することはできません。


２）タスクのステータスとログ
タスク送信後、マスターはタスクに分解され、ワー​​カーはタスクを実行し、トラッカーはタスクのステータスを収集します。 タスク完了後、workdirディレクトリは

workdir
├── bin
│   ├── console.jar     # Consoleモジュールjarパッケージ
│   ├── master.jar      # Masterモジュールjarパッケージ
│   ├── tracker.jar     # Trackerモジュールjarパッケージ
│   └── worker.jar      # Workerモジュールjarパッケージ
├── conf
│   ├── job.cfg         # Job構成ファイルテンプレート
│   ├── sys.properties  # システムパラメータの構成ファイルテンプレート
│   └── workers         # Workerリスト
├── logs
│   ├── import.log      # マイグレーションログ
│   ├── master.log      # Masterログ
│   ├── tracker.log     # Trackerログ
│   └── worker.log      # Workerログ
├── master
│   ├── jobqueue                 # 分解されていないタスクを保存する
│   └── jobs                     # タスク実行ステータスを保存する
│       └── xxtooss              # タスク名称
│           ├── checkpoints      # マスターはジョブをタスクに分解するチェックポイントレコード
│           │   └── 0
│           │       └── ED09636A6EA24A292460866AFDD7A89A.cpt
│           ├── dispatched       # Workerに割り当て済みの未完成Task
│           │   └── 192.168.1.6
│           ├── failed_tasks     # 実行失敗のTask
│           │   └── A41506C07BF1DF2A3EDB4CE31756B93F_1499348973217@192.168.1.6
│           │       ├── audit.log     # Task実行ログ、これにより、エラー原因を参照することができます。
│           │       ├── DONE          # Task実行成功のマーク、失敗は空白です
│           │       ├── error.list    # Taskエラーリスト、エラーファイルリストをを参照することができます。
│           │       ├── STATUS        # タスクステータスラベルファイル、内容はFailedまたはCompleted　サブタスクが失敗または成功を表します
│           │       └── TASK          # Task説明情報
│           ├── pending_tasks    # 未割り当てTask
│           └── succeed_tasks    # 実行成功のTask
│               └── A41506C07BF1DF2A3EDB4CE31756B93F_1499668462358@192.168.1.6
│                   ├── audit.log    # Task実行ログ、これによりエラー原因を参照することができます。
│                   ├── DONE         # Task実行成功ラベル
│                   ├── error.list   # Taskエラーリスト、成功の場合、空白
│                   ├── STATUS       # タスクステータスラベルファイル、内容はFailedまたはCompleted　サブタスクが失敗または成功を表します
│                   └── TASK         # Task説明情報
└── worker  # 実行中のワーカーのタスク状態。実行後マスターによって管理されます。
    └── jobs
        ├── local_test2
        │   └── tasks
        └── local_test_4
            └── tasks

・Jobの実行情報はlogs/import.logを確認することができます
・Task的失败原因，可以查看master/jobs/${JobName}/failed_tasks/${TaskName}/audit.log
・Task的失败文件，可以查看master/jobs/${JobName}/failed_tasks/${TaskName}/error.list


2）マイグレーションを実行する
コンフィグ設定が完了後、MasterのECS1で下記のマイグレーションコマンドを実行します。

①実行前、各ECSを確認する

MasterのECS1：
![ Check ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/20-Check_ECS_01.png "ECS 01")

WorkerのECS2：
![ Check ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/20-Check_ECS_02.png "ECS 02")

WorkerのECS3：
![ Check ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/20-Check_ECS_03.png "ECS 03")

②MasterのECS1でossimportディレクトリに下記コマンドでデプロイする

```
# bash console.sh deploy
```
MasterのECS1：
![ Check Deploy ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/21-Deploy_task_01.png "Deploy task 01")
![ Check ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/21-Deploy_task_02.png "Deploy task 02")

WorkerのECS2：
![ Check ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/21-Deploy_task_03.png "Deploy task 03")

WorkerのECS3：

 ![ Check ECS ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/21-Deploy_task_04.png "Deploy task 04")


③MasterのECS1でossimportディレクトリに下記コマンドでタスクをサブミットする
```
# bash console.sh submit conf/job1.cfg
```
 ![ Check Submit ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/22-Submit_task_03.png "Submit task 03")

④MasterのECS1でossimportディレクトリに下記コマンドでマイグレーションを起動する
```
# bash console.sh start
```
 ![ Check Start ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/23-Start_task_01.png "Start task 01")

④MasterのECS1でossimportディレクトリに下記コマンドでマイグレーションステータスを確認する
```
# bash console.sh stat
```
 ![ Check status ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/24-Check_status_01.png "Check status 01")

 ![ Check status ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/24-Check_status_02.png "Check status 02")

3）マイグレーションを確認する
①OSSコンソール画面にファイルを確認する
 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_01.png "Check oss 01")
備考：コンソール画面にストーレジサイズの表示は一時間ほどの遅延があります

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_02.png "Check oss 02")

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_03.png "Check oss 03")

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_04.png "Check oss 04")

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_05.png "Check oss 05")

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_06.png "Check oss 06")

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_07.png "Check oss 07")

 ![ oss check ](https://raw.githubusercontent.com/sbcloud/help/master/content/developer-tools/images/25-Check_oss_08.png "Check oss 08")

約388GBのデータ、同じアカウントの日本リージョンのOSS①から日本リージョンのOSS②に３台のECS分散デプロイモードでマイグレーションする
移行時間：約15分

②OSSUtilでマイグレーションファイルを確認する

マイグレーション元：
```

F:\ossutil64>ossutil64 du oss://nyc-demo-data
storage class   object count            sum size(byte)
----------------------------------------------------------
Standard        1519                    394399454480
----------------------------------------------------------
total object count: 1519                        total object sum size: 394399454480
total part count:   2171                        total part sum size:   17997179989

total du size(byte):412396634469

2.340107(s) elapsed

F:\ossutil64>ossutil64 du oss://destoss
storage class   object count            sum size(byte)
----------------------------------------------------------
Standard        1519                    394399454480
----------------------------------------------------------
total object count: 1519                        total object sum size: 394399454480
total part count:   236                         total part sum size:   12373196800

total du size(byte):406772651280

1.415890(s) elapsed
```
マイグレーション先：
```
F:\ossutil64>ossutil64 du oss://oss-multi-oss
storage class   object count            sum size(byte)
----------------------------------------------------------
Standard        1519                    394399454480
----------------------------------------------------------
total object count: 1519                        total object sum size: 394399454480
total part count:   0                           total part sum size:   0

total du size(byte):394399454480

2.136711(s) elapsed
```
Object数とObjectサイズは同じであることが確認できました。

ここまでossimportの手順をご紹介しました。






