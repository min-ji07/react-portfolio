import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { useQuery } from 'react-query'

const TodoList = () => {
    
    // ajax 요청을 react-query로 좀 더 쉽게
    // axios.get(`https://codingapple1.github.io/usedata.json`).then((json) => {})
    // 틈만 나면 자동으로 재요청함(실시간 sns사용시 좋음!)
    let result = useQuery('data', () => 
        axios.get('https://codingapple1.github.io/userdata.json')
        .then((value) => value.data)
    );
    // 타이머 기능도 있음, 자동 재요청 기능을 없앨 수 있음
    // 요청 실패시 알아서 리트라이 해줌
    // props 전송 안해도 되고 한번 더 입력해주면 알아서 한번만 가져옴

    console.log(result);
    // console.log(result.data);
    // console.log(result.isLoading);
    // console.log(result.error);


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
    // localStorage 저장해보기
    localStorage.setItem("todoList", JSON.stringify(todoList));
    let todo = localStorage.getItem("todoList");
    if(todo === undefined){
        console.log('todoList값이 없습니다.')
    }else{
        // console.log('값이 있습니다')
        // const save = localStorage.getItem("todoList");
        // let saveTodo = JSON.parse(save);
        // setTodoList(saveTodo);
    }
    return(
        <div className="wrap">
            <div style={{display:'flex', justifyContent:'space-between'}}>
                {/* <h2>{result.data.name}님 안녕하세요!</h2> */}
                <h1 style={{marginBottom:'20px'}}>일정을 기록하세요!</h1>
            </div>
            <input type="text" placeholder="ToDo List를 작성해보세요~!" style={{padding: '10px', height:'50px', fontSize: '18px'}}
            onKeyPress={onKeyPress} ref={inputValue}
             />
             <div className="todo-bg">
                <ul>
                    <li>
                        <p>일정을 기록해보세요! 책 읽기, 공부하기, 취미생활하기</p>
                        <p>
                            <span>수정📝</span>
                            <span>삭제💣</span>
                            <span>완료🤗</span>
                        </p>
                    </li>
                    {todoList.map((value, idx) => 
                        <li key={idx}>
                            <p>{value}</p>
                            <p>
                                <span>수정📝</span>
                                <span>삭제💣</span>
                                <span>완료🤗</span>
                            </p>
                        </li>
                    )}
                </ul>
             </div>
        </div>
    )
}
export default TodoList;