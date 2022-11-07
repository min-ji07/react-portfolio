import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardForm from "./BoardForm";

const StudyAmend = () => {
    let {id} = useParams();
    const textRef = useRef();
    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);
    const navigate = useNavigate();
    useEffect(() => {
        textRef.current.focus();
    },[]);
    const onSubmit = (e) => {
        let title = document.getElementById('title');
        let content = document.getElementById('content');
        if(title.value === ""){
            alert('제목을 입력하세요!')
        }else{
            board[id].title = title.value;
            board[id].content = content.value;
            localStorage.setItem("BoardContent", JSON.stringify(board));
            navigate('/study');
        }
    }
    return(
        <div className="wrap">
            <div className="study-box detail write">
                <form>
                    <div className="study-detail-title">
                    <textarea id="title" ref={textRef} defaultValue={board[id].title}></textarea>
                    </div>
                    <div className="study-detail-content">
                        <textarea id="content" defaultValue={board[id].content} placeholder="내용을 입력하세요!"></textarea>
                    </div>
                </form>
                <button onClick={onSubmit} type="submit" className="btn">등록하기</button>
            </div>
        </div>
    )
}
export default StudyAmend;