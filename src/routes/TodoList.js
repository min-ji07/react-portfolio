import { useState, useRef, useEffect } from "react";

const TodoList = () => {
    // const [saveTodo, setSaveTodo] = useState();
    const [todoList, setTodoList] = useState([]);
    const inputValue = useRef();
    const onKeyPress = (e) => {
        let text = e.target.value;
        if(e.key === 'Enter'){
            let copy = [...todoList];
            copy.push(text);
            setTodoList(copy);
            inputValue.current.value = '';
        }
    }
    localStorage.setItem("todoList", JSON.stringify(todoList));
    let todo = localStorage.getItem("todoList");
    if(todo === undefined){
        console.log('todoList값이 없습니다.')
    }else{
        console.log('값이 있습니다')
        // const save = localStorage.getItem("todoList");
        // let saveTodo = JSON.parse(save);
        // setTodoList(saveTodo);
    }
    return(
        <div className="wrap">
            <h1 style={{marginBottom:'20px'}}>일정을 기록하세요!</h1>
            <input type="text" placeholder="할일을 기록하는 습관을 들이세요!"
            onKeyPress={onKeyPress} ref={inputValue}
             />
             <div style={{background:'tomato', flex: 1}}>
                <ul>
                    {todoList.map((value, idx) => 
                        <li key={idx} style={{lineHeight:'30px', border:'1px solid black', display: 'flex', justifyContent:'space-between'}}>
                            {value}
                            <span>삭제하기</span>
                        </li>
                    )}
                </ul>
             </div>
        </div>
    )
}
export default TodoList;