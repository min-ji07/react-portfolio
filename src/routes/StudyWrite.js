import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BoardForm from "../components/BoardForm";

const StudyWrite = () => {
    const textRef = useRef();
    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);
    const navigate = useNavigate();
    useEffect(() => {
        textRef.current.focus();
        if(board === null){
            localStorage.setItem("BoardContent", JSON.stringify([]));
        }else{
            return
        }
    },[]);
    const onSubmit = (e) => {
        let title = document.getElementById('title');
        let content = document.getElementById('content');
        if(title.value === ""){
            alert('제목을 입력하세요!')
        }else{
            board.unshift({id: Date.now(), title: title.value, content: content.value, heart: 0});
            // 댓글은 따로 빼서 id에 따른 댓글을 가져오면 좋음
            // 글쓰고 배열 추가되면 하트 관련 배열도 추가해야할 것 같음
            localStorage.setItem("BoardContent", JSON.stringify(board));
            // window.location.href = `${process.env.PUBLIC_URL}/study`;
            navigate('/study');
        }
    }
    return(
        <div className="wrap">
            <div className="study-box detail write">
                <BoardForm textRef={textRef}/>
                <button onClick={onSubmit} type="submit" className="btn">등록하기</button>
            </div>
        </div>
    )
}
export default StudyWrite;