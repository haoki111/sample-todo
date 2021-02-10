# React のチュートリアル 1 プロジェクト始め方

## 概要

API からデータを取得して表示する ToDo を作る簡単なチュートリアル

Javascript の開発は OK だけど、React はさわったことない方に向けて
<br/>
<br/>
<br/>


## 目次

- **チュートリアル 1 開発環境の構築**

  - **準備(VSCode, node.js のインストール)**
  - **アプリ(ひな形)を作成する**
  - **開発準備( ESLint + Prettier で Javascript のコード品質を保つ)**

- チュートリアル 2 React で開発

  - ルーティングやディレクトリ構造など React.js の開発の雰囲気をつかむ
  - データ取得(モック)　 API がなくても開発できるようにモックを使って開発
  - React の開発の雰囲気をつかむ
  - 単体テスト

<!-- - チュートリアル 4 **Nuxt + ECS, Fargate を使用した場合の開発フロー** -->
<br/>
<br/>
<br/>

## 準備(VSCode, node.js のインストール)

### VSCode のインストール

- リンクから VSCode([https://azure.microsoft.com/ja-jp/products/visual-studio-code/](https://azure.microsoft.com/ja-jp/products/visual-studio-code/))をインストール

### node.js のインストール

- React を実行する上で node.js([https://nodejs.org/ja/](https://nodejs.org/ja/))が必要なためインストール

インストールを実行したら VSCode を実行 View-＞ terminal でターミナルを開いて　 node がインストールされているか確認

```
$ node -v
v14.15.1
```
<br/>
<br/>
<br/>


## アプリ(ひな形)を作成する

[参考:https://qiita.com/riversun/items/29d5264480dd06c7b9fb](https://qiita.com/riversun/items/29d5264480dd06c7b9fb)

React にアプリのひな形を作成するコマンドとして create-react-app が用意されている

コマンドから作成することで諸々面倒な事を飛ばしてアプリ開発を始める事ができる

実際に sample-todo という名前のプロジェクトを作成してみる
VSCode のターミナルから

```
$ npx create-react-app sample-todo
```

### 実行

```
$npm start
```

起動

http://localhost:3000/
で画面表示
<br/>
<br/>
<br/>


## 開発準備( ESLint + Prettier で Javascript のコード品質を保つ)

### ・ESLint

JavaScript のための静的検証ツール。コードを実行する前に明らかなバグを見つけたり、**コードのフォーマット**に関するルールに基づいて修正する

### ・Prettier

一行がなが～いコードを改行したり、**コードの品質**に関するルールに基づいて修正する
<br/>
<br/>
まずはVSCodeのプラグインを作成

- VSCode の左のメニューから Extentions(□ が 4 つのさいころみたいなアイコン) をクリック->「ESLint」を入力->インストール
- VSCode の左のメニューから Extentions をクリック->「Prettier」を入力->インストール

  ![Extenstions](images\000_extention.png "赤い枠")
<br/>
<br/>

### Prettier と ESlint の併用

必要なパッケージをインストールしていく

VSCode の上のメニューから View-＞ terminal でターミナルを開いて

```
npm install --save-dev  prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react
```

 - prettier → 　コード整形

 - eslint-config-prettier → 　 ESLint と Prettier の競合回避

 - eslint-plugin-prettier → 　 ESLint が Prettier を実行

 - eslint-plugin-react → 　 React の構文解析

(参考)
[https://gurutaka-log.com/react-eslint-prettier](https://gurutaka-log.com/react-eslint-prettier)
<br/>
<br/>

### ESLint と Prettier のルールを記述する設定ファイルを作成

ディレクトリの直下に .eslintrc.js と .prettierrc を作成する

.prettierrc

```
{
  "printWidth": 120,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}

```

.eslintrc.js
```
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}

```
<br/>
<br/>

### ファイルの保存時に ESLint + Prettier を実行する

- 上のメニューの「File」->「Prefrence」->「Settings」設定画面を開いたら右上の ファイルの形のアイコン をクリック

Settings.json へ以下を追加

```
{
  "javascript.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
<br/>
<br/>

### 最後に確認

これでファイル Save のタイミングで

```
mounted () {
console.log("aaaaaaaaあaaaああああああああああああああああああああaaaあああああああ");
},
```

↑ が ↓ へ自動で修正

- インデントの修正
- ダブルクォートをシングルクォートへン
- 関数の後の余計なスペース削除
- 末尾のセミコロン削除
- 良い感じの改行

```
mounted() {
  console.log(
    'aaaaaaaaあaaaああああああああああああああああああああaaaあああああああ'
  )
},

構文エラーなどに対しても
```

const a = 1
a = 2

```
'a' is constant.
'a' is assigned a value but never used.
```

コンソールへエラー表示される

再度
```
npm run start
```
を実行

エラー出てもESLintがきいているので該当ファイルをセーブするだけで治るはず
