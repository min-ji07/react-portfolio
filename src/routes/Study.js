import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Study(){
    let navigate = useNavigate();
    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);
    useEffect(() => {
        if(board === null){
            localStorage.setItem("BoardContent", JSON.stringify([]));
        }else{
            return
        }
    },[])
    return(
        <>
            <div className="wrap">
                <div className="study-title">
                    <h1>개발중인 페이지입니다.</h1>
                    <input placeholder="제목을 검색해주세요."></input>
                </div>
                <button className="btn" onClick={() => navigate('studywrite')}>글쓰기</button>
                <div className="study-box">
                    {/* 이거 파라미터 이동이나 해당 하는 번호 가져와서 누르면 거기로 가기해도될듯 */}
                    {/* 배열 만들기전까지 */}
                    <ul>
                        <li onClick={() => navigate(`studydetail`)} className="box">
                            <div className="title text-sort">
                                개발중인 페이지 입니다. 글을 작성해보세요! (임시List)
                            </div>
                            <div className="content">
                                <p>
                                    <span>닉네임</span>
                                    <span>2022.10.31</span>
                                    <span>댓글(0)</span>
                                    <span>💖(0)</span>
                                </p>
                            </div>
                        </li>
                        {board.map((value, idx) => 
                            <li key={idx} onClick={() => navigate(`studydetail/${idx}`)} className="box">
                                <div className="title text-sort">
                                    {value.title}
                                </div>
                                <div className="content">
                                    <p>
                                        <span>닉네임</span>
                                        <span>2022.10.31</span>
                                        <span>댓글(0)</span>
                                        <span>💖(0)</span>
                                    </p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Study;