import { useRef, useEffect } from "react";

const StudyWrite = () => {
    const textRef = useRef();
    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);
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
            board.unshift({title: title.value, content: content.value});
            // 댓글은 따로 빼서 id에 따른 댓글을 가져오면 좋음
            localStorage.setItem("BoardContent", JSON.stringify(board));
            window.location.href = '/study';
        }
    }
    return(
        <div className="wrap">
            <div className="study-box detail write">
                <form>
                    <div className="study-detail-title">
                        <textarea id="title" ref={textRef} placeholder="제목을 입력하세요."></textarea>
                    </div>
                    <div className="study-detail-content">
                        <textarea id="content" placeholder="내용을 입력하세요!"></textarea>
                    </div>
                </form>
                <button onClick={onSubmit} type="submit" className="btn">등록하기</button>
            </div>
        </div>
    )
}
export default StudyWrite;