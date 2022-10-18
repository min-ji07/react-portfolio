import { Link, Outlet } from "react-router-dom";

function Study(){
    return(
        <>
            <div>
                <Link to={'/study/hook'}>클릭하면 /study/hook 으로 이동합니다</Link>
                <br/>
                <Link to={'/post/postdetail'}>postdetail 왜 안나오는지 모르겠지만.. 일단 주소로 이동</Link>

            </div>
            {/* app.js 26번째 줄 Route */}
            <Outlet/>
        </>
    )
}

export default Study;