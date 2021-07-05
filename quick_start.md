## hot to build and commit
```
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd ./docs/ -Recurse; mkdir docs ; rd yarn.lock
npm cache clean --force; yarn install ; gatsby clean ;
gatsby build --prefix-paths ; cp src/components/404.html public/; mv public/* docs/ ; cp src/pwa-512.png public/
git add *; git commit -m 'npm依存関係の変更'; git push

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




