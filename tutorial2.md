# (開発準備) ESLint + Prettier で Javascript のコード品質を保つ

## VSCode のインストール

Jacascript & 無料のなかだと VSCode がかなり便利

- リンクから VSCode([https://azure.microsoft.com/ja-jp/products/visual-studio-code/](https://azure.microsoft.com/ja-jp/products/visual-studio-code/))をインストール

## もし入ってなかったら Node.js のインストール

node.js([https://nodejs.org/ja/](https://nodejs.org/ja/))

## ESLint

JavaScript のための静的検証ツール。コードを実行する前に明らかなバグを見つけたり、**コードのフォーマット**に関するルールに基づいて修正

- VSCode の左のメニューから Extentions(□ が 4 つのさいころみたいなアイコン) をクリック->「ESLint」を入力->インストール

## Prettier

一行がなが～いコードを改行したり、**コードの品質**に関するルールに基づいて修正

- VSCode の左のメニューから Extentions をクリック->「Prettier」を入力->インストール

## Vetur(Vue.js を扱う上で便利)

入力保管やハイライト表示を行ってくれる Vue の編集用の拡張機能

- VSCode の左のメニューから Extentions をクリック->「Vetur」を入力->インストール

## Prettier と ESlint の併用

機能が若干かぶる、併用のために

prettier ➡️ eslint --fix 　の順番で行うためのパッケージをインストールする

VSCode の上のメニューから View-＞ terminal でターミナルを開いて

```
npm i --save-dev prettier-eslint
```

(参考)
[https://qiita.com/ikngtty/items/4df2e13d2fa1c4c47528](https://qiita.com/ikngtty/items/4df2e13d2fa1c4c47528)

## ファイルの保存時に ESLint + Prettier

- 上のメニューの「File」->「Prefrence」->「Settings」設定画面を開いたら右上の ファイルの形のアイコン をクリック

Settings.json へ以下を追加

```
{
  "editor.formatOnSave": true, //saveのタイミングでprettier の実行
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.enable": false,
}
```

## 確認

これでファイル Save のタイミングで

```
mounted () {
console.log("aaaaaaaaあaaaああああああああああああああああああああaaaあああああああ");
},
```

↑ が ↓ へ自動で修正

- インデントの修正
- ダブルクォートをシングルクォートへ
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
