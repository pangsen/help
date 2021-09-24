---
title: "ESでテキスト分類理論編"
metaTitle: "ElasticSearchでのテキスト分類（理論編）"
metaDescription: "ElasticSearchでのテキスト分類（理論編）"
date: "2020-10-29"
author: "magic929"
---

## ElasticSearchでのテキスト分類（理論編）

![img](https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-Elasticsearch/Elasticsearch_images_26006613645848000/20201028113351.png "img")


本記事では、ElasticSearchを用いたテキスト分類の理論編を紹介します。    

## はじめに

テキスト分類とは「ドキュメント（文章・テキスト）が属するクラスをコンピュータに判断させる事」をいいます。例えば、ニュースサイトが大量な新聞を経済・スポーツなどのクラスに分類の例です。  
現在テキスト分類には多くの領域に応用されており、自然言語処理領域の重要な課題です。もちろん多くのテキスト分類方法があります。今回はElasticSearchを用いて、簡単なテキスト分類をやりましょう。

## ElasticSearchとは

ElasticSearchは、分散型の検索・分析エンジンで、テキストを含めた様々なデータを保存・分析・可視化するツールです。  
現在以下のところに応用されています。
- Webサイト検索
- ログ分析
- 異常検知
- ...

今回ElasticSearchの検索機能でテキスト分類を実装しましょう。

ElasticSearchはAlicloud上にあるので、ElasticSearchを使ってみたい場合は以下をご参考してください。

> https://www.alibabacloud.com/help/ja/product/57736.htm



## ElasticSearchでのテキスト分類アルゴリズム

まず、今回テキスト分類に関連するElasticSearchの内部アルゴリズムを説明します。

まず、テキスト類似度計算で有名なTF-IDF。これはテキスト間の類似度を計算できるアルゴリズムです。次はBM25、検索には結構有名なアルゴリズムです。

### TF-IDFアルゴリズム

TF-IDF( \(Term Frequency–Inverse Document Frequency\))は統計的な方法です。ある単語の重要度を計算して、文書を分類するときその単語の重要度を上げるということ。  
実際、tf-idfはtfとidfの掛け算です。

#### tf

各ドキュメントに置いてその単語が出現する頻度です。ここで頻度を使い、カウント数を使わない理由は長いドキュメント場合、ある単語がすごく出現するを防ぐためです。公式は以下である。

$$ 
tf_i = \frac{n_i}{\sum_{k=1}^n n_k}
$$

上記の式中、$n_i$はその単語がドキュメントに出現した回数、$\sum_{k=1}^n n_k$はすべての単語がドキュメントに出現した合計回数である。

#### idf

これは「逆文書頻度」とも呼ばれていて、ドキュメントセット中にある単語を含むドキュメント数である。全ドキュメントの中での重要度を表す計算量です。具体的に、色々な文書によく出現する単語なら低い値を示す。公式は下記です。

$$
idf_i = log\frac{|D|}{1+|\{j:t_i\in d_j\}|}
$$

- |D|: ドキュメントセットに含めているドキュメント数
- $|\{j: t_i\in d_j\}|$: 単語$t_i$を含めているドキュメント数、もしすべてのドキュメントにはその単語がない場合、分母がゼロになるから、常に+1にします。$d_j$はj番目のドキュメントである。

#### まとめ

tf-idfの計算式は：

$$
tfidf_i = tf_i * idf_i
$$

この計算式で、どこでも出現しやすいな単語を一定程度重さを下げて、有用な単語だけを注目できます。

### OKapi BM25アルゴリズム

BM25 ( \(best match25\))は検索領域に順位付けの手法です。  
tf-idfアルゴリズムは統計ベース上の類似度計算アルゴリズムですが、欠点があります。ここで、その欠点を改善するために、BM25アルゴリズムがあります。  
なぜ改善する必要があるか、その欠点とは何かを以下の例で説明する。  
1. ２つの「人工知能」という内容を書かれている文章AとB、そのうち、Aに人工知能は100回出現した、Bには200回出現した。この２つの文章の単語数は同じく10000個。もしTF-IDFで計算すれば、Aのtfは0.01, Bのtfは0.02。計算結果AよりBが2倍ぐらい多くになる。しかし、この２つの文章は人工知能という内容についてtf値はそんなに差がないはずです。  
2. 複数な文章の長さもtfの計算にも大きく影響があります。

上記の部分を改善したBM25の公式は以下のようになる。
  
$$
score(D, Q) = \sum_{i=1}^nIDF(q_i)\cdot\frac{f(q_i, D) \cdot (k_1 + 1)}{f(q_i, D) + k_1 \cdot (1-b+b\cdot\frac{|D|}{avgdl})}
$$


- Q: 単語セット  
- D: ある文章  
- IDF(q_i): TF-IDFのIDFと同じ、単語$q_i$のIDF値  
- f(q_i, D): TF-IDF中のTFと同じ、単語$q_i$のTF値  
- $k_1$: 任意パラメータ。単語の出現頻度による影響を調節する。範囲は1.2~2.0間。数値が低いほど増加が速い。ElasticSearchでは$k_1$は1.2です
- b: 任意パラメータ。文章の長さを調節する。範囲は0~1間。0は長さを調整しない、1は全部調整するという意味です。ElasticSearchでには0.75を使われています。  
- |D|: 文章の長さ  
- avgdl: ドキュメントセットの平均長さ  

### Lucene中に使われてた相関性アルゴリズム

ElasticSearchはLucene基盤の分散処理マルチテナント対応検索エンジンである。ここで、Luceneで使われてた相関性アルゴリズムを紹介します。

ElasticSearch6.2.4以上のバージョンなら、Lucene jarのバージョンは7.2.1である

Lucene中、相関性アルゴリズム公式は以下である：

$$
score(t, q, d) = \sum_{t}^n (idf(t) * boost(t) * tfNorm(t, d))
$$

- q: 文章セット
- d: ある文章
- t: 単語
- score( (t, q, d)): 単語tを含めている文章dが文章セットq中の相関性スコアを示す
- idf( (t)): 逆文書頻度。ここの公式は今までとは違って、以下のようになる

$$
idf_t = ln(1 + \frac{docCount - docFreq + 0.5}{docFreq + 0.5}) 
$$
<center>docCout: 文章セット数, docFreq: 単語tを含める文章数</center>

- boost( (t)): 重さ。指定しない場合は1です
- tfNorm( (t, d)): 単語頻度重さ。BM25の公式です。

ESは検索中に、もらった検索ワードで各文書の相関性を計算して、最後ソートして高いスコアの文章を返します。

## テキスト分類の応用
上記のElasticSearch機能を用いて、スパムメールの検知（メールの２分類）をやりましょう。  
今回のアキテクチャは以下の図ように

![メール２分類アキテクチャ](https://raw.githubusercontent.com/sbcloud/help/master/content/usecase-Elasticsearch/Elasticsearch_images_26006613645848000/20201028172355.png "メール２分類アキテクチャ")

理論知識がここで終わりますが、実装の話は次にしましょう。


