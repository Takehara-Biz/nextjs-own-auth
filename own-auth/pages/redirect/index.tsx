import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // ボタンがクリックされたときに実行する関数
  const handleButtonClick = () => {
    // テキストボックスの値を読み取る
    const valueFromTextBox = inputValue;

    // クッキーの有効期限を1分に設定
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 1000);
    document.cookie = `hogehoge=${valueFromTextBox}; expires=${expirationDate.toUTCString()}; Secure`;


    // 自作関数を呼び出す（ここでは単純に値を表示するだけの例）
    setResult(`入力値: ${valueFromTextBox}`);
  };
  return (<>
    <input
      type="password"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button onClick={handleButtonClick}>ボタンをクリック</button>
    <div>
      <p>{result}</p>
    </div>
  </>);
}