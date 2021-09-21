---
title: "操作ポータル - 管理者マニュアル"
metaTitle: "Cloud Remote Desktop 操作ポータル Web Document - 管理者マニュアル"
metaDescription: "Cloud Remote Desktop 操作ポータルの管理者向けマニュアルです。"
date: "2021-09-21"
author: "Yoshihiro Matsuda"
---

## 1.はじめに 

本資料は、管理者ポータルを利用するための手順を記述したものです。

## 2.事前準備 

この章では、管理者ポータルを利用するための、事前準備作業の手順をご紹介します。

## 2.1 AlibabaCloudコンソールログイン 

以下のurlより、AlibabaCloudコンソールへアクセスします。 
- https://account.alibabacloud.com/login/login.htm

アカウントのEmail及びパスワードを入力し、「Sign in」ボタンを押下します。  
![2.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.1.1-login.png)  
スライダーが表示される場合は、指示通りにスライダーを一番右へスライドします。  
![2.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.1.2-slider.png)  
MFAが設定されている場合は、６桁の認証番号を入力し、「Submit」ボタンを押下します。
（ ※MFAが設定されていない場合は、本画面が表示されません。）  
![2.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.1.3-mfa.png)  
画面右上の「Console」リンクをクリックします。  
![2.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.1.4-console.png)  

## 2.2 アカウントUID確認 

画面右上の![2.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.2.1-profile.png)アイコンにカーソルを合わせて、「Account ID」の数字をコピーします。  
![2.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.2.2-uid.png)  
以上でアカウントUIDの確認が終了します。先ほどコピーした「Account ID」は後ほどPortalログインの際に利用します。  

## 2.3 PortalAdminユーザー作成 

画面左上の![2.3.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.1-menu-ico.png)ボタンを押下します。  
![2.3.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.2-menu.png)  
検索欄にて「ram」を入力し、「Resource Access Management」を押下します。  
![2.3.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.3-search-ram.png)  
左メニューの「Users」を押下します。  
![2.3.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.4-ram-users.png)  
「Create User」を押下します。  
![2.3.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.5-create-users.png)  
以下のパラメータを入力します。  
- Logon Name：PortalAdmin
- Display Name：PortalAdmin
- Programmatic Access：チェックを入れます

「OK」を押下します。

ユーザーが正しく作成されたことを確認し、CSVファイルをダウンロードします。（ ※CSVファイルに記載されているAccessKeyID及びAccessKeySecretは後ほどPortalログインの際利用します。）  
画面左メニューの「Users」を押下し、User一覧画面へ戻ります。  
![2.3.6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.6-ram-users.png)  
先ほど作成したPortalAdminユーザーをクリックします。  
![2.3.7](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.7-portal-admin.png)  
「Permissions」タブより、「Add Permissions」を押下します。  
![2.3.8](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.8-add-permissions.png)  
「AdministratorAccess」を選択し、Selectedメニューに表示されていることを確認します。  
「OK」を押下します。  
![2.3.9](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.9-administrator-access.png)  
「Complete」を押下します。  
![2.3.10](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/2.3.10-complete.png)  

## 3. ログイン 

（１）事前に展開したUrlより、操作ポータルを開きます。  
![3.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/3.1-portal-login.png)  
（２）デフォルトの管理者ユーザー名とパスワードを入力し、ログインを押下します。  
（３）初回ログインの際、以下の情報が求められます。手順「2.事前準備」で取得した情報を入力します。  
- アカウントUID
- アクセスキー
- アクセスシークレット  

「登録」を押下します。  
![3.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/3.2-first-login.png)  
（４）ログイン成功していることを確認します。  

## 4. 共通ヘッダー 

## 4.1 地域 

ヘッダー左側の地域ボタンを押下することで、地域ごとのデスクトップ一覧を切り替えることができます。  
※デフォルトは日本（東京）リージョンが選択されています。  
![4.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/4.1.1-region.png)  

## 4.2 サポート 

ヘッダー右側のサポートボタンを押下することで、弊社へ問い合わせすることができます。  
※問い合わせは別途弊社のサポートサービスと契約する必要があります。  
![4.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/4.1.2-support.png)  

## 4.3 ログアウト 

ヘッダ右側のログアウトボタンを押下することで、ポータルをログアウトすることができます。  
![4.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/4.1.3-logout.png)  

## 5. 管理者メニュー 

## 5.1 ダッシュボード 

ダッシュボード機能についてご紹介します。  
（１）グループ選択：デスクトップをグループ分けて管理することが可能です。defaultグループは全てのデスクトップが表示されます。  
![5.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.1.1-select-group.png)  
（２）デスクトップ一覧：現在利用中のデスクトップ一覧を確認できます。  
下記パラメータ確認できます。  
- デスクトップ名
- ステータス
- スペック
- IPアドレス
- 課金タイプ
- 有効期限
- OSバージョン

![5.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.1.2-desktop-list.png)  

## 5.2 デスクトップ管理 

## 5.2.1 作成・削除 

## 5.2.1.1 デスクトップの作成 

（１）デスクトップ管理＞作成・削除を選択します。  
![5.2.1.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.1-menu-create.png)  
（２）作成ボタンを押下します。  
![5.2.1.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.2-create-desktop.png)  
（３）スペック選択は推奨スペック、あるいはカスタムを選択することが可能です。  
※本手順ではカスタムを選択します。  
![5.2.1.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.3-create-spec.png)  
（４）システムディスクのタイプとサイズを入力します。  
※本手順ではHDDの40GBとします。  
![5.2.1.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.4-create-system-disk.png)  
（５）データディスクの個数を入力し、ディスクのタイプとサイズを入力します。  
※本手順では1個のデータディスク（HDD、40GB）を作成します。  
![5.2.1.1.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.5-create-data-disk.png)  
（６）デスクトップがどのグループに所属するかを選択します。  
- 未所属：defaultのグループに表示されます。
- 既存のグループから選択：既存のグループより指定します。
- 新規作成：新規グループ作成します。

本手順では未所属を選択します。  
![5.2.1.1.6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.6-create-group.png)  
（７）その他設定  
- VSwitch：デスクトップが所属するVSwitchを選択します。
- パスワード：デスクトップのログインパスワードを設定します。（※作成されたデスクトップのユーザー名はadministratorとなります。）
- 課金方式：従量課金またはサブスクリプションを選択します。
- 作成台数：デスクトップの作成台数を設定します。（2以上を設定した場合、同様なデスクトップが複数作成されます。）  

![5.2.1.1.7](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.7-create-others.png)  
（８）最終確認後、問題なければOKボタンを押下します。  
![5.2.1.1.8](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.8-create-comfirm.png)  
（９）デスクトップが正しく作成されていることを確認し、ユーザー情報をダウンロードします。  
個別にファイル出力：ユーザー情報を１ファイルずつダウンロードします。  
1ファイルにまとめて出力：ユーザー情報を一つのファイルにまとめて出力します。
![5.2.1.1.9](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.1.9-create-success.png)  
ユーザーポータル用の情報ファイルをダウンロード後、完了ボタンを押下します。  
以上でデスクトップの作成が完了しました。  

## 5.2.1.2 デスクトップの削除 

（１）デスクトップ管理＞作成・削除を選択します。  
![5.2.1.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.2.1-menu-delete.png)  
（２）削除したいデスクトップにチェックを入れて削除ボタンを押下します。  
![5.2.1.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.2.2-delete-check.png)  
（３）最終確認後、OKボタンを押下します。  
![5.2.1.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.1.2.3-delete-confirm.png)  
以上で、デスクトップの削除が完了しました。

## 5.2.2 起動・再起動・停止 

## 5.2.2.1 デスクトップの起動 

（１）デスクトップの起動：  
①デスクトップ一覧より、一台または複数台のデスクトップを選択します。  
②「一括起動」を選択します。  
※「ステータス」が起動中と停止中のデスクトップを同時に選択することはできません。  
![5.2.2.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.1.2-desktop-start.png)  
（２）ポップアップ画面にて、起動対象のデスクトップを確認します。「はい」を押下します。  
![5.2.2.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.1.3-desktop-start-confirm.png)  
（３）処理実行完了まで待ちます。※処理中、他のメニューを操作することはできません。  
![5.2.2.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.1.4-desktop-start-wait.png)  
（４）起動が成功したことを確認します。  
「閉じる」ボタンを押下します。  
![5.2.2.1.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.1.5-desktop-start-close.png)  
以上でデスクトップの起動が完了しました。 

## 5.2.2.2 デスクトップの再起動 

（１）デスクトップの再起動：  
①デスクトップ一覧より、一台または複数台のデスクトップを選択します。  
②「一括再起動」を選択します。  
※「ステータス」が停止中のデスクトップを選択することはできません。  
![5.2.2.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.2.2-desktop-restart.png)  
（２）ポップアップ画面にて再起動対象のデスクトップを確認します。  
「再起動」を押下します。  
※デスクトップがフリーズの場合は、「強制再起動」を押下します。  
![5.2.2.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.2.3-desktop-restart-confirm.png)  
（３）処理実行完了まで待ちます。  
※処理中、他のメニューを操作することはできません。  
![5.2.2.2.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.2.4-desktop-restart-wait.png)  
（４）再起動が成功したことを確認します。  
「閉じる」ボタンを押下します。  
![5.2.2.2.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.2.5-desktop-restart-close.png)  
以上でデスクトップの再移動が完了しました。

## 5.2.2.3 デスクトップの停止 

（１）デスクトップの一括停止：  
①デスクトップ一覧より、一台または複数台のデスクトップを選択します。  
②「一括停止」を選択します。  
※「ステータス」が停止中のデスクトップを停止することはできません。
![5.2.2.3.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.3.2-desktop-stop.png)  
（２）ポップアップにて停止対象のデスクトップ一覧を確認します。  
「停止」ボタンを押下します。  
![5.2.2.3.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.3.3-desktop-stop-confirm.png)  
（３）処理実行完了まで待ちます。  
※処理中、他のメニューを操作することはできません。  
![5.2.2.3.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.3.4-desktop-stop-wait.png)  
（４）タスクが成功したことを確認します。  
「閉じる」ボタンを押下します。  
![5.2.2.3.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.2.3.5-desktop-stop-close.png)  
以上でデスクトップの停止が完了しました  

## 5.2.3 スペック変更 

## 5.2.3.1 デスクトップスペック変更 

（１）デスクトップ管理＞スペック変更を選択します。  
![5.2.3.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.1.1-menu-change.png)  
（２）デスクトップスペックの変更：  
①デスクトップ一覧より、変更対象のデスクトップを選択します。  
②デスクトップスペックの「変更」ボタンを押下します。 
![5.2.3.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.1.2-desktopchange-check.png)  
（３）スペックの変更：  
①タイプの選択は「推奨スペック」、あるいは「カスタム」を選択することが可能です。  
※本手順ではカスタムを選択します。  
②「次へ」を選択します。  
![5.2.3.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.1.3-desktopchange.png)  
（４）デスクトップスぺック変更　最終確認：  
①「確認しました。問題ありません。」にチェックを入れます。  
②「OK」を選択します。  
![5.2.3.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.1.4-desktopchange-confirm.png) 
 （５）処理実行完了まで待ちます。  
※処理中、他のメニューを操作することはできません。  
![5.2.3.1.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.1.5-desktopchange-wait.png)  
（６）タスク作成が正しく完了していることを確認します。  
「閉じる」ボタンを押下します。  
![5.2.3.1.6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.1.6-desktopchange-success.png)   
以上でデスクトップスペックの変更が完了しました。 

## 5.2.3.2 ディスク変更 

## 5.2.3.2.1 サイズ変更 

（１）デスクトップ管理＞スペック変更を選択します。  
![5.2.3.2.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.1-menu-change.png)  
（２）ディスクのサイズ変更：  
①デスクトップ一覧より、変更対象のデスクトップを選択します。  
②ディスクの「サイズ変更」を選択します。 
![5.2.3.2.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.2-menu-specchange.png)  
（３）変更対象のディスクを選択します。  
※選択可能な変更対象のディスクは１台のみです。
![5.2.3.2.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.3-sizechange.png)  
（４）対象ディスクのサイズ変更：  
①変更後のディスクサイズを入力します。  
※現時点でのディスクサイズより大きいサイズを入力する必要があります。  
②「次へ」を選択します。  
![5.2.3.2.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.4-sizechange-check.png)  
（５）ディスクサイズ変更　最終確認：  
①「確認しました。問題ありません。」にチェックを入れます。  
②「OK」を選択します。  
![5.2.3.2.1.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.5-sizechange-confirm.png)  
（６）処理実行完了まで待ちます。  
※処理中、他のメニューを操作することはできません。  
![5.2.3.2.1.6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.6-sizechange-wait.png)  
（７）ディスクサイズの変更が成功したことを確認します。  
「閉じる」ボタンを押下します。  
![5.2.3.2.1.7](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.1.7-sizechange-success.png)  
以上でディスクのサイズ変更が完了しました。  

## 5.2.3.2.2 カテゴリ変更 

（１）デスクトップ管理＞スペック変更を選択します。  
![5.2.3.2.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.2.1-menu-change.png)  
（２）ディスクのカテゴリ変更：  
①デスクトップ一覧より、変更対象のデスクトップを選択します。  
②ディスクの「カテゴリ変更」を選択します。 
![5.2.3.2.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.2.2-menu-specchange.png)  
（３）ディスクカテゴリ変更：  
①変更対象のディスクを選択します。  
②「次へ」を選択します。  
![5.2.3.2.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.2.3-change-diskcategory-check.png)  
（４）ディスクカテゴリ変更　最終確認：  
①「確認しました。問題ありません。」にチェックを入れます。  
②「OK」を選択します。  
![5.2.3.2.2.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.2.4-change-diskcategory-confirm.png)  
（５）処理実行完了まで待ちます。  
※処理中、他のメニューを操作することはできません。  
![5.2.3.2.2.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.2.5-change-diskcategory-wait.png)  
（６）ディスクカテゴリの変更が成功したことを確認します。  
「閉じる」ボタンを押下します。  
![5.2.3.2.2.6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.2.6-change-diskcategory-success.png)  
以上でディスクのカテゴリ変更が完了しました。  

## 5.2.3.2.3 データディスク追加 

（１）デスクトップ管理＞スペック変更を選択します。  
![5.2.3.2.3.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.1-menu-change.png)  
（２）ディスクのカテゴリ変更：  
①デスクトップ一覧より、変更対象のデスクトップを選択します。  
②ディスクの「データディスク追加」を選択します。 
![5.2.3.2.3.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.2-menu-specchange.png)  
（３）追加方法は「空のディスクを作成」、あるいは「スナップショット」から作成を選択することが可能です。  
※本手順では「空のディスクを作成」を選択します。  
![5.2.3.2.3.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.3-select.png)  
（４）選択するデータディスクのカテゴリとサイズを入力します。  
本手順では以下のカテゴリとサイズを選択します。  
- カテゴリ：HDD  
- サイズ：40GB  

![5.2.3.2.3.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.4-create-datadisk.png)  
（５）データディスク追加　最終確認：  
①「確認しました。問題ありません。」にチェックを入れます。  
②「OK」を選択します。  
![5.2.3.2.3.5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.5-create-datadisk-confirm.png)  
（６）処理実行完了まで待ちます。  
※処理中、他のメニューを操作することはできません。  
![5.2.3.2.3.6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.6-create-datadisk-wait.png)  
（７）データディスクの追加が成功したことを確認します。  
「閉じる」ボタンを押下します。  
![5.2.3.2.3.7](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.2.3.2.3.7-create-datadisk-success.png)  
以上でデータディスクの追加が完了しました。

## 5.3 スケジュール管理 

## 5.3.1 タスクの作成 

## 5.3.1.1 定期実行タスク 

（１）定期実行タスク（週次繰り返しタスク）の作成ボタンを押下します。  
![5.3.1.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.1.1-scheduler-weekly-create.png)  
（２）以下のパラメータを入力します。  
①タスク名  
②曜日  
③時間  
④実行内容（起動／停止）  
⑤グループ  
⑥対象デスクトップ  
次へを押下します。  
![5.3.1.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.1.2-scheduler-weekly-param.png)  
（３）設定内容を確認し、「作成」ボタンを押下します。  
![5.3.1.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.1.3-scheduler-weekly-confirm.png)  
（４）タスク作成が正しく完了していることを確認します。  
「閉じる」ボタンを押下します。  
![5.3.1.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.1.4-scheduler-weekly-close.png)  
以上で、タスクの作成が完了しました。  

## 5.3.1.2 一回実行タスク 

（１）１回実行タスク（１回のみ実行）の作成ボタンを押下します。  
![5.3.1.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.2.1-scheduler-onetime-create.png)  
（２）以下のパラメータを入力します。  
①タスク名  
②日付  
③時間  
④実行内容（起動／停止）  
⑤グループ  
⑥対象デスクトップ  
次へを押下します。  
![5.3.1.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.2.2-scheduler-onetime-param.png)  
（３）タスク詳細を確認し、「作成」ボタンを押下します。  
![5.3.1.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.2.3-scheduler-onetime-confirm.png)  
（４）タスク作成完了していることを確認します。  
![5.3.1.2.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.1.2.4-scheduler-onetime-close.png)  
以上で、タスクの作成が完了しました。  

## 5.3.2 タスクの編集 

## 5.3.2.1 定期実行タスク 

（１）作成されたタスクに、デスクトップを追加／削除を実施する場合は、「変更」ボタンを押下します。  
![5.3.2.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.1.1-scheduler-weekly-edit.png)  
（２）スケジュールの対象デスクトップを選び直して、「次へ」を押下します。  
![5.3.2.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.1.2-scheduler-weekly-edit-next.png)  
（３）タスクの詳細を確認し、「確定」を押下します。  
![5.3.2.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.1.3-scheduler-weekly-edit-confirm.png)  
（４）対象デスクトップの変更が完了していることを確認します。  
「閉じる」ボタンを押下します。  
![5.3.2.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.1.4-scheduler-weekly-edit-close.png)  
以上で、タスクの編集が完了しました。  

## 5.3.2.2 一回実行タスク 

作成されたタスクに、デスクトップを追加／削除を実施する場合は、「変更」ボタンを押下します。  
![5.3.2.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.2.1-scheduler-onetime-edit.png)  
スケジュールの対象デスクトップを選び直して、「次へ」を押下します。  
![5.3.2.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.2.2-scheduler-onetime-edit-next.png)  
タスクの詳細を確認し、「確定」を押下します。  
![5.3.2.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.2.3-scheduler-onetime-edit-confirm.png)  
対象デスクトップの変更が完了していることを確認します。  
「押下」ボタンをクリックします。  
![5.3.2.2.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.2.2.4-scheduler-onetime-edit-colse.png)  
以上で、タスクの編集が完了しました。  

## 5.3.3 タスクの削除 

## 5.3.3.1 定期実行タスク 

対象のタスクにチェックを入れます。  
![5.3.3.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.1.1-scheduler-weekly-delete-check.png)  
削除ボタンを押下します。  
![5.3.3.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.1.2-scheduler-weekly-delete-button.png)  
削除対象の詳細を確認後、問題なければはいボタンを押下します。  
![5.3.3.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.1.3-scheduler-weekly-delete-confirm.png)  
タスクが正しく削除されたことを確認します。閉じるボタンを押下します。  
![5.3.3.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.1.4-scheduler-weekly-delete-close.png)  

## 5.3.3.2 一回実行タスク 

対象のタスクにチェックを入れます。  
![5.3.3.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.2.1-scheduler-onetime-delete-check.png)  
削除ボタンを押下します。  
![5.3.3.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.2.2-scheduler-onetime-delete-button.png)  
削除対象の詳細を確認後、問題なければはいボタンを押下します。  
![5.3.3.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.2.3-scheduler-onetime-delete-confirm.png)  
タスクが正しく削除されたことを確認します。閉じるボタンを押下します。  
![5.3.3.2.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.3.3.2.4-scheduler-onetime-delete-close.png)  

## 5.4 ポータル設定 

## 5.4.1 アカウント情報更新 

ポータル設定＞アクセスキー更新を押下します。  
![5.4.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.1.1-menu-accesskey.png)  
更新ボタンを押下します。  
![5.4.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.1.2-accesskey-refresh.png)  
アクセスキーが正しく更新されたことを確認します。  
![5.4.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.1.3-accesskey-confirm.png)  
以上で、アクセスキーの更新が完了しました。  

## 5.4.2 管理者ユーザ管理 

## 5.4.2.1 新規ユーザー作成 

ポータル設定＞管理者ユーザー管理を押下します。  
![5.4.2.1.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.1.1-menu-user.png)  
作成ボタンを押下します。  
![5.4.2.1.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.1.2-user-create.png)  
以下の情報を入力します。
- メールアドレス
- 表示名
- パスワード

![5.4.2.1.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.1.3-user-create-param.png)  
ユーザーが正しく作成されたことを確認します。  
![5.4.2.1.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.1.4-user-create-close.png)  
以上で、新規管理者ユーザーの作成が完了します。  

## 5.4.2.2 既存ユーザーパスワード変更 

ポータル設定＞管理者ユーザー管理を押下します。  
![5.4.2.2.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.2.1-menu-user.png)  
対象ユーザーのパスワード変更ボタンを押下します。  
![5.4.2.2.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.2.2-user-password-edit.png)  
新しいパスワードを入力し、OKボタンを押下します。  
![5.4.2.2.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.2.3-user-password-confirm.png)  

## 5.4.2.3 既存ユーザー削除 

ポータル設定＞管理者ユーザー管理を押下します。  
![5.4.2.3.1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.3.1-menu-user.png)  
対象ユーザーの削除ボタンを押下します。
![5.4.2.3.2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.3.2-user-delete.png)  
OKボタンを押下します。  
![5.4.2.3.3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.3.3-user-delete-confirm.png)  
ユーザが正しく削除されたことを確認します。完了ボタンを押下します。  
![5.4.2.3.4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-02-Portal-Manual/5.4.2.3.4-user-delete.png)
