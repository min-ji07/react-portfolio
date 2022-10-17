import { Link, Outlet } from "react-router-dom";
import Hook from "../components/Hook";

function Study(){
    return(
        <>
            <div>
                <Link to={'/study/hook'}>hook</Link>
                {/* 클릭하면 hook 보여줌 */}
            </div>
            {/* app.js 26번째 줄 Route */}
            <Outlet/>
        </>
    )
}

export default Study;