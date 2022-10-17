import { Link } from "react-router-dom";
import Hook from "../components/Hook";

function Study(){
    return(
        <>
            <div>
                <Link to={'/study/hook'}>hook</Link>
            </div>
            <Hook/>
        </>
    )
}

export default Study;