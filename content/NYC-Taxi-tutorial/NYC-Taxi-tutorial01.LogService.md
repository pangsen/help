---
title: "NYC Taxi on LogService"
metaTitle: "Alibab Cloud LogService によるNYC Taxi チュートリアル"
metaDescription: "Alibab Cloud LogService によるNYC Taxi チュートリアル"
date: "2021-05-25"
author: "Hironobu Ohara"
---

## NYC Taxi on LogService

# ETLとOLAPにAliyun Log Serviceを使う

このガイドラインでは、Aliyun Log Serviceを使ってデータを処理するための簡単な方法を紹介します。
![概要](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/00_Overview.png "概要")

## Step 1: OSSバケットにテストデータを用意する
いつものように、NYC Taxi and Limousine Commission (TLC)が提供するオープンデータを使用します。詳細な情報は https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page で見ることができます。他のガイドラインで読んだことがある方は、読み飛ばして次のステップに進んでください。

![NYC Open Data Page](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/01_NYC.png "NYC Open Data Page")

NYCのウェブサイトからデータを取得するには、ECSサーバでwgetコマンドを使用します。
``bash
[root@iZ6we0fgka4d29m38peeuuZ src]# wget https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2019-01.csv
--2020-12-07 15:28:14-- https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2019-01.csv
......
2020-12-07 15:29:35 (8.17 MB/s) - 'yellow_tripdata_2019-01.csv' saved [687088084/687088084].
```

私たちのように、すべてのデータを利用する場合は、すべてのファイル名をtxtファイルにして、`wget -i <ファイル名>.txt`を直接実行することをお勧めします。こうすることで、txtファイルに記載されているファイルをサーバーがすべてダウンロードしてくれるので、1つ1つ手動で処理する必要がなくなります。

```bash
[root@iZ6we0fgka4d29m38peeuuZ src]# cat /root/targets.txt
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-01.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-02.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-03.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-04.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-05.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-06.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-07.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-08.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-09.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-10.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-11.csv
https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-12.csv
[root@iZ6we0fgka4d29m38peeuuZ src]# wget -i /root/targets.txt
--2020-12-08 09:53:53--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-01.csv
......
2020-12-08 10:00:05 (6.35 MB/s) - ‘yellow_tripdata_2011-01.csv’ saved [2474554026/2474554026]

--2020-12-08 10:00:05--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-02.csv
......
2020-12-08 10:07:01 (5.98 MB/s) - ‘yellow_tripdata_2011-02.csv’ saved [2604373779/2604373779]

--2020-12-08 10:07:01--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-03.csv
......
2020-12-08 10:15:20 (5.64 MB/s) - ‘yellow_tripdata_2011-03.csv’ saved [2948633344/2948633344]

--2020-12-08 10:15:20--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-04.csv
......
2020-12-08 10:21:23 (7.12 MB/s) - ‘yellow_tripdata_2011-04.csv’ saved [2703310900/2703310900]

--2020-12-08 10:21:23--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-05.csv
......
2020-12-08 10:26:34 (8.80 MB/s) - ‘yellow_tripdata_2011-05.csv’ saved [2860029176/2860029176]

--2020-12-08 10:26:34--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-06.csv
......
2020-12-08 10:31:54 (8.27 MB/s) - ‘yellow_tripdata_2011-06.csv’ saved [2776252237/2776252237]

--2020-12-08 10:31:54--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-07.csv
......
2020-12-08 10:37:08 (8.24 MB/s) - ‘yellow_tripdata_2011-07.csv’ saved [2708392003/2708392003]

--2020-12-08 10:37:08--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-08.csv
......
2020-12-08 10:41:52 (8.20 MB/s) - ‘yellow_tripdata_2011-08.csv’ saved [2432989761/2432989761]

--2020-12-08 10:41:52--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-09.csv
......
2020-12-08 10:47:00 (8.34 MB/s) - ‘yellow_tripdata_2011-09.csv’ saved [2682104748/2682104748]

--2020-12-08 10:47:00--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-10.csv
......
2020-12-08 10:52:31 (8.31 MB/s) - ‘yellow_tripdata_2011-10.csv’ saved [2884780798/2884780798]

--2020-12-08 10:52:31--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-11.csv
......
2020-12-08 10:57:19 (8.86 MB/s) - ‘yellow_tripdata_2011-11.csv’ saved [2668405528/2668405528]

--2020-12-08 10:57:19--  https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2011-12.csv
......
2020-12-08 11:02:14 (8.87 MB/s) - ‘yellow_tripdata_2011-12.csv’ saved [2740546498/2740546498]

FINISHED --2020-12-08 11:02:14--
Total wall clock time: 1h 8m 21s
Downloaded: 12 files, 30G in 1h 8m 14s (7.57 MB/s)
[root@iZ6we0fgka4d29m38peeuuZ src]# ls -ltr
total 31723096
-rw-r--r-- 1 root root 2776252237 Aug 15  2016 yellow_tripdata_2011-06.csv
-rw-r--r-- 1 root root 2708392003 Aug 15  2016 yellow_tripdata_2011-07.csv
-rw-r--r-- 1 root root 2432989761 Aug 15  2016 yellow_tripdata_2011-08.csv
-rw-r--r-- 1 root root 2682104748 Aug 15  2016 yellow_tripdata_2011-09.csv
-rw-r--r-- 1 root root 2884780798 Aug 15  2016 yellow_tripdata_2011-10.csv
-rw-r--r-- 1 root root 2668405528 Aug 15  2016 yellow_tripdata_2011-11.csv
-rw-r--r-- 1 root root 2740546498 Aug 15  2016 yellow_tripdata_2011-12.csv
-rw-r--r-- 1 root root 2474554026 Aug 15  2016 yellow_tripdata_2011-01.csv
-rw-r--r-- 1 root root 2604373779 Aug 15  2016 yellow_tripdata_2011-02.csv
-rw-r--r-- 1 root root 2948633344 Aug 15  2016 yellow_tripdata_2011-03.csv
-rw-r--r-- 1 root root 2703310900 Aug 15  2016 yellow_tripdata_2011-04.csv
-rw-r--r-- 1 root root 2860029176 Aug 15  2016 yellow_tripdata_2011-05.csv
```

Aliyunは、OSSのバケットにファイルをアップロードするためのいくつかの方法を提供しています。 ossutilは、バケットやオブジェクトを管理するための様々なシンプルなコマンドを提供しています。

```bash
[root@iZ6we0fgka4d29m38peeuuZ ~]# wget https://gosspublic.alicdn.com/ossutil/1.7.0/ossutil64
--2020-12-07 15:39:37--  https://gosspublic.alicdn.com/ossutil/1.7.0/ossutil64
Resolving gosspublic.alicdn.com (gosspublic.alicdn.com)... 47.246.4.254, 47.246.4.253
Connecting to gosspublic.alicdn.com (gosspublic.alicdn.com)|47.246.4.254|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 10210086 (9.7M) [application/octet-stream]
Saving to: ‘ossutil64’

100%[===================================================================================================================================================================================================>] 10,210,086  13.4MB/s   in 0.7s

2020-12-07 15:39:38 (13.4 MB/s) - ‘ossutil64’ saved [10210086/10210086]

[root@iZ6we0fgka4d29m38peeuuZ ~]# chmod 755 ossutil64
[root@iZ6we0fgka4d29m38peeuuZ ~]# ./ossutil64 config
The command creates a configuration file and stores credentials.

Please enter the config file name,the file name can include path(default /root/.ossutilconfig, carriage return will use the default file. If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
No config file entered, will use the default config file /root/.ossutilconfig

For the following settings, carriage return means skip the configuration. Please try "help config" to see the meaning of the settings
Please enter endpoint:https://oss-ap-northeast-1-internal.aliyuncs.com
Please enter accessKeyID:<AccessKeyID for your account>
Please enter accessKeySecret:<AccessKeySecret for your account>
Please enter stsToken:<This option is required only when you use a temporary STS token to access OSS buckets. Otherwise, you can leave this parameter empty.>
```


ossutilをインストールして設定した後、単一のファイルをアップロードするために、コマンド`cp <ローカルファイルパス> <送信先バケットとファイルパス>`を使用することができます。また、cpコマンドに-rオプションを追加することで、フォルダをOSSにアップロードすることができます。


```bash
[root@iZ6we0fgka4d29m38peeuuZ ~]# ./ossutil64 cp -r src/ oss://nyc-demo-data/src_csv/
Succeed: Total num: 6, size: 4,097,410,644. OK num: 6(upload 6 files).

average speed 416149000(byte/s)

9.846054(s) elapsed
```


そうすると、OSSのバケツ`nyc-demo-data`に対象となるcsvファイルが全て入ります。年号をパーティションとしているので、データファイルは年号ごとにフォルダ分けされています。

![OSSバケツ内のフォルダ分け](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/02_OSS_Bucket_Folder.png "Separated Folders in OSS Bucket")
![1つのパーティション内のデータファイル](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/03_OSS_Data_Files.png "1つのパーティション内のデータファイル")

Aliyun Log Serviceは、OSSから直接データファイルを読み込むことができます。CSV、JSON、TXT、Parquetなどのデータ形式をサポートしています。データファイルのサイズは2GB以下である必要があるため、Aliyun Log Serviceで使用する前に、元のデータファイルをCSVからParquetに変換する必要があります。(変換プロセスは他のガイドラインでも確認できますが、今回のテスト用パーケットファイルはAliyun AnalyticDB for MySQL clusterで生成されています)
![データファイルの制限](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/04_Data_Files_Limitation.png "Data Files Limitation")
![変換されたParquetデータファイル](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/05_Converted_Parquet_Data_Files.png "変換されたParquetデータファイル")

## Step 2: Aliyun Log ServiceでLogStoreを用意する

Aliyun Log Serviceプロジェクトには複数のLogStoreがあり、各LogStoreには複数のShardがあります。今回は、NYCのタクシーデータを1つのログプロジェクトの下で、異なるLogStoreで扱うことになります。それでは、一つずつ作成していきます。

![Log Project Structure](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/06_Log_Project_Structure.png "Log Project Structure")

概要ページの「プロジェクトの作成」ボタンをクリックし、以下のようにログプロジェクトを作成します。

![Click Create Project Button](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/07_Click_Create_Project_Button.png "Click Create Project Button")
![Fill Project Info](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/08_Fill_Project_Info.png "Fill Project Info")
![Project Created](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/09_Project_Created.png "Project Created")

ログプロジェクトが正常に作成されると、関連するログストアの作成を求めるメッセージが表示されます。OKボタンをクリックして、ログストアの作成プロセスに入ります。

![Fill Logstore Info](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/10_Fill_Logstore_Info.png "Fill Logstore Info")をクリックします。
![Logstore Created](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/11_Logstore_Created.png "Logstore Created")をクリックします。

ログストアの作成が完了すると、データアクセスの設定を求められます。OKボタンをクリックして設定プロセスに入ります。Aliyun Log Serviceは、クラウド製品、オペレーションシステム、開発言語やフレームワークなど、ログデータを取得するための様々な方法を定義しています。ここではOSSを選択し、設定ウィザードに入ります。

![データアクセスウィザード](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/12_Data_Access_Wizard.png "Data Access Wizard")

RAM配下にAliyunLogImportOSSRoleが定義されていない場合、Unauthorizedエラーが発生します。OSSバケットのリソースにアクセスするために使用されます。エラーメッセージのAuthorization URLから対象のロールを作成することができます。
![Unauthorized Error](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/13_Unauthorized_Error.png "Unauthorized Error")
![AliyunLogImportOSSRole Authorization](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/14_Import_Role_Authorization.png "AliyunLogImportOSSRole Authorization")
![Complete AliyunLogImportOSSRole Authorization](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/15_Complete_Import_Role_Authorization.png "Complete AliyunLogImportOSSRole Authorization")

フォームにデータファイルの情報を入力して、接続テストを行います。前述したように、生成されたParquetファイルからデータを読み込みます。
![Test Data Access](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/16_Test_Data_Access.png "Test Data Access")

インポート設定を行います。
![Configure Import Settings](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/17_Configure_Import_Settings.png "Configure Import Settings")

Query and Analysisを構成します。通常、このステップで定義されたインデックスは、後でQuery and Analysisステートメントで使用されます。このログストアはデータを保存するためだけに使用されるので、インデックス設定を空にしておくことができます。
![Configure Query and Analysis](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/18_Configure_Query_Analysis.png "Configure Query and Analysis")

データインポート設定が完了したら、成功ページを表示します。
![Complete Data Import Settings](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/19_Complete_Data_Import_Settings.png "Complete Data Import Settings")

新しく作成されたデータインポートルールは、「データインポートメニュー」に表示されます。
![作成データインポート](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/20_Created_Data_Import.png "作成データインポート")

Aliyun Log Service は、設定プロセス中に `Import Now` を `YES` として選択すると、対象の OSS バケットからすぐにデータをロードします。およそ`2.5時間`(From 11:40:00 To 14:07:17)後に、`350,017,064 lines`のデータがログストアにロードされます。
![データインポートログ](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/21_Data_Import_Log.png "Data Import Log")
![既存のデータの確認](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/22_Check_Existing_Data.png "既存のデータの確認")

## Step 3: Aliyun AnalyticDB for MySQLでデータを加工する

Data Transformationは、Log Serviceの高可用性とスケーラビリティを実現するフルマネージド機能です。この機能は、データの標準化、エンリッチメント、配布、アグリゲーション、再インデックス化などのシナリオで使用できます。

![データ変換シナリオ](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/23_Data_Transformation_Scenarios.png "Data Transformation Scenarios")

- 複数の配信先ログストアにデータを配信するサービスログを例にとると、ログファイルにはソースコードで生成されたアクセスログ/エラーログ/操作ログが1つのファイルにまとめられていることがあります。これでは運用が大変です。このような場合、データ変換機能を使って、ログデータを異なるログストアに分離することができます。
- 複数のログストアからデータを集約する。イメージとしては、異なる販売システムから注文ログを取得しているが、販売データ全体に基づいて分析を行う必要があるため、オンライン/インストア、リセラーシステムからの注文ログを一緒に「まとめる」必要がある。一方で、ロジックに沿っていくつかのカラムを同時に更新しなければなりません。

ソースログストア `nyc-data` は以前に作成されていますが、データ変換とデータ分析のために、デスティネーションログストア `nyc-final-data` を作成しなければなりません。上記の手順で「nyc-final-data」という名前の別のログストアを作成しますが、作成後はデータインポートの設定プロセスに入らないようにします。
![デスティネーション ログストアの作成](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/24_Create_Destination_Logstore.png "デスティネーション ログストアの作成")
![Don't Config Data Import](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/25_Not_Config_Data_Import.png "Don't Config Data Import")

Data Transformationジョブの作成プロセスに入ります。
![Create Data Transformation](https://raw.githubusercontent.com/ohiro18/ts.dev/master/content/NYC-Taxi-tutorial/LogService.images/26_Create_Data_Transformation.png "Create Data Transformation")

LOG Domain Specific Language (DSL)は、Log Serviceのデータ処理機能に使用されるPython互換のスクリプト言語です。PythonをベースにしたLOG DSLは、データ処理を簡素化するための200以上の組み込み関数を提供します。詳細については、https://www.alibabacloud.com/help/doc-detail/125439.htm を参照してください。

データ変換フェーズでは、2つのタスクを実行します。
- データインポート機能は、フォルダ構造に応じたパーティションを認識しないので、各レコードに保存されたソースデータファイル名に基づいて、`year`列を追加する必要があります。基本的なロジックは、`__tag__:__object__` カラムが `ads_parquet/year=2020` で始まっていれば、そのレコードを `year:2020` でマークする、というものです。
- 例えば、`vendor_id` には string / int があり、null 値もあります。NYCが提供するData Dictionaryによると、1は "CMT"、2は "VTS "を意味しますが、nullを含むその他の値については、"Unknown "として更新する必要があります。
