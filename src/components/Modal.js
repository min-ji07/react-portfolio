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
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/todolist'}>TodoList</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/study'}>Board</Link></li>
                    <li><a href="https://github.com/min-ji07">Github</a></li>
                    <li><a href="https://min-ji07.tistory.com/">Blog</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Modal;