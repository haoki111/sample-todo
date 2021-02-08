# React のチュートリアル 1 プロジェクト始め方

## 概要

API からデータを取得して表示する ToDo を作る簡単なチュートリアル

Javascript の開発は OK だけど、React はさわったことない方に向けて

- チュートリアル 1 **開発環境の構築**
- チュートリアル 1 **React でプロジェクトを始める**
- チュートリアル 2 **(開発準備) ESLint + Prettier で Javascript のコード品質を保つ**
- チュートリアル 3 **React で開発**

  - **ルーティングやディレクトリ構造など React.js の開発の雰囲気をつかむ**
  - **データ取得(モック)　 API がなくても開発できるようにモックを使って開発**
  - **React の開発の雰囲気をつかむ**
  - **単体テスト**

<!-- - チュートリアル 4 **Nuxt + ECS, Fargate を使用した場合の開発フロー** -->

## 準備

## VSCode のインストール

- リンクから VSCode([https://azure.microsoft.com/ja-jp/products/visual-studio-code/](https://azure.microsoft.com/ja-jp/products/visual-studio-code/))をインストール

## node.js のインストール

- Rwact を実行する上で node.js([https://nodejs.org/ja/](https://nodejs.org/ja/))が必要なためインストール

インストールを実行したら VSCode を実行 View-＞ terminal でターミナルを開いて　 node がインストールされているか確認

```
$ node -v
v14.15.1
```

## React でアプリを作って行く

[参考:https://qiita.com/riversun/items/29d5264480dd06c7b9fb](https://qiita.com/riversun/items/29d5264480dd06c7b9fb)

React にアプリのひな形を作成するコマンドとして create-react-app が用意されている

コマンドから作成することで諸々面倒な事を飛ばしてアプリ開発を始める事ができる

実際に sample-todo という名前のプロジェクトを作成してみる
VSCode のターミナルから

```
$ npx create-react-app sample-todo
```

質問ベースでプロジェクトを構築していきます

```
? Project name: (sample)
```

プロジェクト名は sample なのでエンター

```
? Programming language: (Use arrow keys)
> JavaScript
  TypeScript
```

JavaScript を選択

```
? Package manager: (Use arrow keys)
  Yarn
> Npm
```

パッケージ管理マネージャー->Npm を選択

```
? UI framework:
  None
  Ant Design Vue
  Bootstrap Vue
  Buefy
  Bulma
  Chakra UI
  Element
  Framevuerk
  iView
  Tachyons
> Tailwind CSS
  Vuesax
  Vuetify.js
```

CSS フレームワーク -> Tailwind CSS

```
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Axios
 ( ) Progressive Web App (PWA)
 ( ) Content
```

よく使われるモジュールを複数選択して導入することができる

- 非同期通信を用いて外部 API を扱う際に使われる Axios
- Web アプリをモバイルアプリのように使える PWA(プログレッシブ Web アプリ)の作成をサポートする nuxt pwa
- 環境変数を管理できる DotEnv
  モジュールなのであとで innstall 可能、とりあえず Axios をインストール

```
? Linting tools:
>(*) ESLint
 (*) Prettier
 ( ) Lint staged files
 ( ) StyleLint
 ( ) Commitlint
```

- 構文チェックしてくれる & 構文エラーを修正してくれる ESLint と Prettier を選択

```
? Rendering mode: (Use arrow keys)
> Universal (SSR / SSG)
  Single Page App
```

- SSR(Sever Side rendering)ができる Universal
- Single Page App はフロントにてレンダリング

```
? Deployment target: (Use arrow keys)
> Server (Node.js hosting)
  Static (Static/JAMStack hosting)
```

```
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) jsconfig.json (Recommended for VS Code if you're not using typescript)
 ( ) Semantic Pull Requests
 ( ) Dependabot (For auto-updating dependencies, GitHub only)
```

```
 Continuous integration:
  None
> GitHub Actions (GitHub only)
```

CI ツールの選択

```
? What is your GitHub username?
```

```
? Version control system
Git
```

## 実行

```
$npm run dev
```

開発モードで起動

http://localhost:3000/
で画面表示
