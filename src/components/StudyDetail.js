import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { heartPlus } from "../store";
import {useState, useEffect} from "react";

const StudyDetail = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    let {id} = useParams();
    const navigate = useNavigate();

    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);

    // 로딩중
    const [loading, setLoading] = useState(false);
    // fade in
    const [fade, setFade] = useState('');
    useEffect(() => {
        // fade 값이 변경되면 2초후에 아이디 값 추가
        let clear = setTimeout(() => {setFade('ani-fade-out')}, 1000);
        return(() => {
            clearTimeout(clear);
            setFade('');
        })
    }, [loading]);

    return(
        <div className="wrap">
            {loading ? 
                <div className={`loading-bar ` + fade}>
                    <p>Loading...</p>
                    <img src={process.env.PUBLIC_URL + `/img/1a04cafd9593925989a9589cc4531377a7695699.gif`} alt="loading..."/>
                </div> : null}
            {/* 배열 추가되도 안나오길래 확인 했더니 이미지가 없어서 그런 것 */}
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
                            <span>💖({board[id].heart})</span>
                        </p>
                    </div>
                </div>
                <div className="study-detail-content">
                    {board[id].content}
                </div>
                <div className="study-detail-comment">
                    <textarea placeholder="댓글을 남겨보세요! (개발중!)"></textarea>
                    <div className="btn-set">
                        <button className="btn" >댓글 남기기</button>
                        <button className="btn" onClick={() => {
                            board[id].heart += 1;
                            localStorage.setItem("BoardContent", JSON.stringify(board));
                            dispatch(heartPlus(id));
                        }}>💕좋아요💕({board[id].heart})</button>
                        <button className="btn" onClick={() => {
                            navigate(`/study/studyamend/${id}`);
                        }}>글 수정</button>
                        <button className="btn" onClick={() => {
                            if(window.confirm('글을 삭제하시겠습니까?😥')){
                                board.splice(id, 1);
                                localStorage.setItem("BoardContent", JSON.stringify(board));
                                navigate('/study');
                                // setLoading(true);
                                // setTimeout(() => {
                                //     setFade('ani-fade-out');
                                //     // 맨 밑에 글 삭제시 흰 바탕으로 바뀜
                                // },1500)
                            }else{
                                return
                            }

                        }}>글 삭제</button>
                    </div>
                </div>
                <div className="study-detail-comment-write">
                    <ul>
                        <li>
                            <p>댓글입니다 (개발진행중!)</p>
                            <p><span>22.10.31</span><span>02:30</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default StudyDetail;