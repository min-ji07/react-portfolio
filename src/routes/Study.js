import { Link } from "react-router-dom";
import Hook from "../components/Hook";

function Study(){
    return(
        <>
            <div>
                {/* 이렇게는 안되나? */}
                <Link to={'/study/hook'}>hook</Link>
            </div>
            <Hook/>
        </>
    )
}

export default Study;