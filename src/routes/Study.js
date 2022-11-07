import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function Study(){
    let navigate = useNavigate();
    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);
    const search = useRef();
    useEffect(() => {
        search.current.focus();
        if(board === null){
            localStorage.setItem("BoardContent", JSON.stringify([]));
        }else{
            return
        }
    },[]);
    const onChange = (e) => {
        let text = e.target.value;
        for(let i = 0; i < board.length; i++){
            // console.log(board[i].title);
            let title = board[i].title;
            let search = title.indexOf(text);
            // console.log(title, search);
            if(search >= 0){
                console.log('있음!', title);
                // console.log("search: ",search, "번째에!");
                // 이제 여기 값 있는것만 보여주면 됨
            }else{

            }
        }
    }
    return(
        <>
            <div className="wrap">
                <div className="study-title">
                    <h1>게시판</h1>
                    <input onChange={onChange} ref={search} placeholder="제목을 검색해주세요."></input>
                </div>
                <button className="btn" onClick={() => navigate('studywrite')}>글쓰기</button>
                <div className="study-box">
                    {/* 이거 파라미터 이동이나 해당 하는 번호 가져와서 누르면 거기로 가기해도될듯 */}
                    {/* 배열 만들기전까지 */}
                    <ul>
                        <li onClick={() => navigate(`studydetail`)} className="box">
                            <div className="title text-sort">
                                게시판 입니다. 글을 작성해보세요! (임시List)
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
                                        <span>💖({value.heart})</span>
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