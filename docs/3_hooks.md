相較於 Class Components 對 React 的各種抽像，React Hooks 更貼近 React 最底層的運行規律，透過模擬一個簡單的 useState 可以幫助我們更加理解 React。

```js
function App() {
  const [num, updateNum] = useState(0);

  return <p onClick={() => updateNum(num => num + 1)}>{num}</p>;
}
```

可以將以上使用 useState 的例子分為兩個部分來解析：

1. 產生更新時，會造成組件 render
2. useState 返回的 num 為更新後的結果


