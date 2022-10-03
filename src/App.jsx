import './App.css'
import React, { useState } from 'react'
import ListModal from './ListModal'
import Modal from './Modal'

function App() {
  let [listData, setListData] = useState([{ name: 'làm bài tập react', money: '2022/10/03' }]);

  function clear() {
    document.querySelector('#name').value = "";
    document.querySelector('#money').value = "";
  }

  const [index, setIndex] = useState([
    { productName: 'ao', quantity: 3, price: 200000 },
    { productName: 'quan', quantity: 3, price: 400000 },
    { productName: 'giay', quantity: 3, price: 600000 },
  ])

  return (
    <div>
      <button type="button" className="btn btn-primary " id='dan' data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={clear}>
        <h3> todoList</h3>
      </button>
      <ListModal listData={listData} setIndex={setIndex} />
      <Modal ListModal={listData} changeListData={setListData} listData={listData} index={index} />
    </div >
  )
}

export default App