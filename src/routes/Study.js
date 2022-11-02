import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";

function Study(){
    let navigate = useNavigate();
    return(
        <>
            <div className="wrap">
                <div style={{marginBottom: '20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h1>개발중인 페이지입니다.</h1>
                    <input placeholder="제목을 검색해주세요." style={{padding:'10px', height:'50px', fontSize:'18px'}}></input>
                </div>
                <div className="study-box">
                    {/* 이거 파라미터 이동이나 해당 하는 번호 가져와서 누르면 거기로 가기해도될듯 */}
                    {/* 배열 만들기전까지 */}
                    <ul>
                        <li onClick={() => navigate(`studydetail`)} className="box">
                            <div className="title text-sort">
                                개발중인 페이지 입니다. 개발중인 페이지 입니다. 개발중인 페이지 입니다. 개발중인 페이지 입니다. 개발중인 페이지 입니다. 
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
                        <li onClick={() => navigate()} className="box"></li>
                        <li onClick={() => navigate()} className="box"></li>
                        <li onClick={() => navigate()} className="box"></li>
                        <li onClick={() => navigate()} className="box"></li>
                        <li onClick={() => navigate()} className="box"></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Study;