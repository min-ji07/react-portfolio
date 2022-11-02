import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { heartPlus, boardDelete } from "../store";

const StudyDetail = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    let {id} = useParams();

    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);

    return(
        <div className="wrap">
            <div className="study-box detail">
                <div className="study-detail-title">
                    <div className="title">
                        {board[id].title}
                    </div>
                    <div className="content">
                        <p>
                            <span>닉네임</span>
                            <span>2022.10.31</span>
                            <span>댓글(0)</span>
                            <span>💖({state.board})</span>
                        </p>
                    </div>
                </div>
                <div className="study-detail-content">
                    {board[id].content}
                </div>
                <div className="study-detail-comment">
                    <textarea placeholder="댓글을 남겨보세요!"></textarea>
                    <div className="btn-set">
                        <button className="btn" onClick={() => {
                            dispatch(heartPlus());
                        }}>💕좋아요💕({state.board})</button>
                        <button className="btn" >댓글 남기기</button>
                        <button className="btn" onClick={() => {
                            dispatch(boardDelete(id));
                        }}>글 삭제</button>
                    </div>
                </div>
                <div className="study-detail-comment-write">
                    <ul>
                        <li>
                            <p>댓글입니다</p>
                            <p><span>22.10.31</span><span>02:30</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default StudyDetail;