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

    // console.log(result);
    // console.log(result.data);
    // console.log(result.isLoading);
    // console.log(result.error);

    
    const inputValue = useRef();
    const [todoList, setTodoList] = useState([]);
    // localStorage 저장
    let todo = localStorage.getItem("todoList");
    // todo에 배열로 가져옴
    todo = JSON.parse(todo);
    useEffect(() => {
        if(todo == null){
            // 값이 없으면 localStorage에 배열만들어놓기
            localStorage.setItem("todoList", JSON.stringify([]));
        }else{
            setTodoList(todo);
        }
    },[])
    // todoList 작성 후 enter 
    const onKeyPress = (e) => {
        let todos = e.target.value;
        if(e.key === 'Enter'){
            if(todos === ""){
                alert('뭐라도 기록해보세요!')
            }else{
                // 배열에 입력된 값 추가, 객체 기본 값 추가
                todo.unshift({text: todos, id: Date.now()});
                // id: Date.now()
                // 중복허용하지 않는 array자료형
                todo = new Set(todo);
                // 다시 array로 만들어주기
                todo = Array.from(todo);
                localStorage.setItem("todoList", JSON.stringify(todo));
                setTodoList(todo);
            }
            inputValue.current.value = '';
        }
    }
    // 삭제
    const todoDelete = (idx, value) => {
        todo.splice(idx, 1);
        localStorage.setItem("todoList", JSON.stringify(todo));
        setTodoList(todo);
    }
    return(
        <div className="wrap">
            <h1 style={{marginBottom:'20px'}}>일정을 기록하세요!</h1>
            <input type="text" placeholder="ToDo List를 작성해보세요~!" style={{padding: '10px', height:'50px', fontSize: '18px'}}
            onKeyPress={onKeyPress} ref={inputValue}
             />
             <div className="todo-bg">
                <ul>
                    <li>
                        <input id="todo-test" type="checkbox"></input>
                        <label htmlFor="todo-test">
                            <p>일정을 기록해보세요! 클릭시 완료 표시 됩니다!</p>
                            <p>
                                <span onClick={() => {
                                    alert('개발중인 기능입니다!')
                                }}>수정📜</span>
                                <span onClick={() => {
                                    alert('기록한 일정을 삭제해보세요!')
                                }}>삭제💣</span>
                            </p>
                        </label>
                    </li>
                    {/* checked 가 기존 html에 붙어있고 따라 옮겨지지않음 */}
                    {/* 새로고침시 완료처리 삭제됨 */}
                    {/* {todoList.map((value, idx) => 
                        <li key={value.id}>
                            <input id={value.id} type="checkbox"></input>
                            <label htmlFor={value.id}>
                                <p>{value.text}</p>
                                <p>
                                    <span onClick={() => {
                                        alert('개발중인 기능입니다!');
                                    }}>수정📜</span>
                                    <span onClick={(e) => todoDelete(idx, value)}>삭제💣</span>
                                </p>
                            </label>
                        </li>
                    )} */}
                    {todoList.map((value, idx) => 
                        <li key={value.id} onClick={() => {
                            console.log(value.id);
                        }}>
                            <p>{value.text}</p>
                            <p>
                                <span onClick={() => {
                                    alert('개발중인 기능입니다!');
                                }}>수정📜</span>
                                <span onClick={(e) => todoDelete(idx, value)}>삭제💣</span>
                            </p>
                        </li>
                    )}
                </ul>
             </div>
        </div>
    )
}
export default TodoList;