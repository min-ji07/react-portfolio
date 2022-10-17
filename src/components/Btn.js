import { Link } from "react-router-dom";

function Btn(props){
    return(
        // <Link to={"/"}>버튼</Link>
        <button className="btn_b">{props.text}</button>

    )
}
 
export default Btn;