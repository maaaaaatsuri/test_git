import React from 'react'
import Child from './components/Child'

const Example: React.FC = () => {
  return (
    <div>
      <h3>練習問題</h3>
      <p>/componentsフォルダをstart内に作成して、Childにコンポーネントを分離して、Exampleコンポーネントで読み込んでください。</p>
      <Child />
    </div>
  )
}

export default Example
