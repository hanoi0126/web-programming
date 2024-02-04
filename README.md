# Web Programming 

### 課題2
---
1. **Grid Layout を使用する**
    ページ全体をグリッドコンテナとして定義して、中央のアイテムを配置する方法。

    中央配置に非常に有効でシンプルな方法だが、今回は単一方向のレイアウトに特化していて、過剰な機能は必要ないと考えた。
    ```
    body {
        display: grid;
        place-items: center;
        height: 100vh;
        margin: 0;
    }

    .circle {
        width: 200px;
        height: 200px;
        background-color: red;
        border-radius: 50%;
    }
    ```

2. **絶対位置指定を使用する**
    `position: absolute;` を使用して、親要素に対して中央に配置する方法。

    古いブラウザのサポートが必要な場合に適している方法で、要素がピクセル単位で完全に中央に来るように調整する必要があるため、現代的なレイアウト手法に比べてコードが複雑になり、理解しにくくなる恐れがあったため。
    ```
   body {
       position: relative;
       height: 100vh;
       margin: 0;
   }

   .circle {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       width: 200px;
       height: 200px;
       background-color: red;
       border-radius: 50%;
   }
    ```

3. **マージンオートを使用する**
    ブロック要素を中央に配置する際に `mergin: auto;` を使用する方法。

    水平方向の中央配置には効果的だが、垂直方向の中央配置を達成するために追加の工夫が必要であるため。
    ```
   .circle {
       margin: auto;
       width: 200px;
       height: 200px;
       background-color: red;
       border-radius: 50%;
       position: relative;
       top: 50%;
       transform: translateY(-50%);
   }
    ```