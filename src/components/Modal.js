import { useDispatch } from "react-redux";
import { modalOpen } from '../store';
import { Link } from "react-router-dom";

const Modal = () => {
    let dispatch = useDispatch();
    return(
        <div className="modal-bg" onClick={() => {
          dispatch(modalOpen(false));
        }}>
            <div className="modal" style={{color:'white'}}>
                <ul>
                    <li><Link to={''}>Dust</Link></li>
                    <li><Link to={''}>About</Link></li>
                    <li><Link to={''}>Portfolio</Link></li>
                    <li><Link to={''}>슬쩍보기👀(shop, todoList)</Link></li>
                    <li><Link to={''}>Github</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Modal;