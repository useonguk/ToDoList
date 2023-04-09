import ReactDom from 'react-dom';
import React from 'react';
import { useState } from 'react';

function App(){
  const [toDo,setTodo] = useState("");
  const [toDos,setTodos] = useState([]);
  // toDo 라는 state를 관리하는 setTodo 함수.
  const onChange = (e) =>{
    setTodo(e.target.value)
  }
  const onRemove = (e) => {
    console.log(toDos);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(toDo === ""){
      return
    }
    setTodos((currentArray) => [toDo, ...currentArray])
    setTodo("")
  }
  console.log(toDos);
	return (
    <div>
        <h1>투두리스트를 만들어보자~</h1>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="입력하세요" onChange={onChange} value={toDo} />
            <button>등록하기</button>
        </form>
        <ul>
          {toDos.map((item,index)=><li key={index}>{item}<input type="button" onClick={onRemove} value="X"></input></li>)}
        </ul>
    </div>
    )
}

export default App;