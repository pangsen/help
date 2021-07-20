## hot to build and commit
```
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd ./docs/ -Recurse; mkdir docs ; rd yarn.lock
npm cache clean --force; yarn install ; gatsby clean ;
gatsby build --prefix-paths ; cp src/components/404.html public/; mv public/* docs/ ; cp src/pwa-512.png public/
git add *; git commit -m 'npm依存関係の変更'; git push

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






