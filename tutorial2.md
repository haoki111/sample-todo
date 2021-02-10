# React のチュートリアル 2 開発を始める

## 概要

API からデータを取得して表示する ToDo を作る簡単なチュートリアル

Javascript の開発は OK だけど、React はさわったことない方に向けて
<br/>
<br/>
<br/>


## 目次

- チュートリアル 1 開発環境の構築

  - 準備(VSCode, node.js のインストール)
  - アプリ(ひな形)を作成する
  - 開発準備( ESLint + Prettier で Javascript のコード品質を保つ)

- **チュートリアル 2 React で開発**

  - **準備(CSSフレームワーク(Tailwind)をインストール)**
  - **カウンターを作ってみる**
  - **ルーティング(react-router-dom)を使ってページ遷移をやってみる**

<!-- - チュートリアル 4 **Nuxt + ECS, Fargate を使用した場合の開発フロー** -->
<br/>
<br/>

## 準備(CSSフレームワーク(Tailwind)を新ストール)

### Tailwindをインストール
bootstrapでもなんでも良いがcssフレームワークを入れておく、今回はTailwind

- リンクを参考に Tailwind([https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app))をインストール
<br/>
<br/>


## カウンターを作ってみる
App.jsを変更↓
```
import './App.css'
import { useState } from 'react'

function App (props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="h-full flex items-center px-6">
        <section className="w-full  m-16">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Counter
          </h1>
          <p className="text-3xl lg:text-5xl font-bold mt-2">{count}</p>
          <button className="bg-indigo-500 font-semibold text-white py-2 px-4 rounded m-2" onClick={() => setCount(count + 1)}>Add</button>
          <button className="bg-red-500 font-semibold text-white py-2 px-4 rounded m-2" onClick={() => setCount(count - 1)}>Sub</button>
        </section>
      </main>
    </div>
  )
}

export default App
```
<br/>

### 解説

#### これがReact のコンポーネント

コンポーネントは（“props” と呼ばれる）任意の入力を受け取り、

画面上に React 要素(レンダリングするhtml)を返す
```
function App (props) {
  ...
　...
　...
 return (
   <div>
     ...
   </div>
 )
}
```


#### state を宣言
```
  const [count, setCount] = useState(0)
```

stateはコンポーネント内の変数。propsと違ってcomponent内で書き換え可能

上の場合はuseState(0)でstate=0初期化。stateを書き換えたい場合はsetCountを使う


#### stateの参照
```
<p className="text-3xl lg:text-5xl font-bold mt-2">{count}</p>
```
countは{count}でhtml内で参照できる

### ルーティングを使ってページ遷移する

react-router-dom をインストール
```
$ npm install react-router-dom
```