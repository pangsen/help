---
title: "Cloud Remote Desktop - 利用開始手順"
metaTitle: "Cloud Remote Desktop Web Document - 利用開始手順"
metaDescription: "Cloud Remote Desktopの利用開始手順"
date: "2021-09-07"
author: "Yoshihiro Matsuda"
---

## 1. 利用開始手順

## 1.1 SAG APP使用手順

## 1.1.1　SAG APP クライアント導入  
下記公式ドキュメントに各OSでのインストール手順が記載されております。  
ドキュメントを参考してOSに応じてSAP APPをインストールします。  
https://www.alibabacloud.com/help/doc-detail/102544.htm

## 1.1.2　SAG APPへのSSL-VPN接続方法
① SAG APP クライアントを起動します。 
   
② 別途送付している接続情報より「SAG APPのInstanceID」、「Username」、「Password」を入力し、「Please read and agree privacy policy」にチェックを入れログインボタンを押下します。  
![1](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_001.png)


③ 画面中央の「Connect to Intranet」ボタンを押下します。
![2](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_002.png)

④ 下記画像のようになれば接続はSSL-VPN接続完了です。DaaSトライアル環境へ接続できるようになります。
![3](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_003.png)

## 1.2 リモートデスクトップ接続手順
　　
## 1.2.1 WindowsOSの場合  
①Windowsキーをクリックして、「リモートデスクトップ接続」を選択します。  
![4](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_004.jpg)

②「コンピューター」にて、接続先仮想デスクトップのIPアドレスを入力して、「接続」をクリックします。  
![5](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_005.jpg)

③ユーザー名とパスワードを入力して、OKをクリックします。  
![6](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_006.jpg)

④証明書確認の画面が表示されましたら、「はい」をクリックします。  
![7](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_007.jpg)

⑤下記のような画面が表示されましたら、接続が成功になります。  
![8](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_008.jpg)


## 1.2.2 MacOSの場合 
①「APP Store」を起動して、「Microsoft Remote Desktop」をインストールします。  
![9](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_009.jpg)

②「Microsoft Remote Desktop」を起動して、「Add PC」をクリックします。  
![10](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_010.jpg)

③「PC name」に仮想デスクトップのIPアドレスを入力して、「Add」をクリックします。  
![11](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_011.jpg)

④上記ステップにて追加されたPCをダブルクリックします。  
![12](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_012.jpg)

⑤ユーザー名とパスワードを入力して、「Continue」をクリックします。  
![13](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_013.jpg)

⑥「Continue」をクリックします。  
![14](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_014.jpg)

⑦下記のような画面が表示されましたら、接続が成功になります。  
![15](https://raw.githubusercontent.com/sbcloud/help/main/content/DaaS/images/DaaS-01-Manual/image_015.jpg)