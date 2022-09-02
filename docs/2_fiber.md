React 16 對於架構進行全面的修改，協調器作為控制 render 的核心採用了 fiber 這種資料結構，fiber 可以視為代數效應（Algebraic Effects）在 React 中的實現。

代數效應指的是在函式程式設計中，將副作用從函數中抽離，典型的例子就是 React Hook：

```js
function App() {
  const [num, updateNum] = useState(0);
  
  return (
    <button onClick={() => updateNum(num => num + 1)}>{num}</button>  
  )
}
```

這個例子中 updateNum 代表的狀態改變及為副作用，但這個部分完全被從這個函數中抽離出去了，而支撐這種模式的架構便是透過 React fiber，可以將 React fiber 理解為一套狀態更新的機制。
