import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import Write from "../components/Write";

function Study(){
    let navigate = useNavigate();
    return(
        <>
            <div className="wrap">
                <div style={{marginBottom: '20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h1>공부중인 사이트입니다</h1>
                    <input placeholder="제목을 검색해주세요."></input>
                </div>
                <div className="study-box">
                    {/* 이거 파라미터 이동이나 해당 하는 번호 가져와서 누르면 거기로 가기해도될듯 */}
                    {/* 배열 만들기전까지 */}
                    <div onClick={() => navigate(`write`)} className="box">
                        <p>배열</p>
                    </div>
                    <div onClick={() => navigate()} className="box"></div>
                    <div onClick={() => navigate()} className="box"></div>
                    <div onClick={() => navigate()} className="box"></div>
                    <div onClick={() => navigate()} className="box"></div>
                    <div onClick={() => navigate()} className="box"></div>
                </div>
            </div>
            {/* <Routes>
                <Route path={`study/write`} element={<Write />} /> 
            </Routes> */}

            <Link to={'/study/hook'}>클릭하면 /study/hook 으로 이동합니다</Link>
            <Outlet/>
        </>
    )
}

export default Study;