import { Link } from "react-router-dom";
const StudyDetail = () => {
    return(
        <div className="wrap">
            <div className="study-box detail">
                <div className="study-detail-title">
                    <div className="title">
                        개발중인 페이지 입니다. 개발중인 페이지 입니다. 개발중인 페이지 입니다. 개발중인 페이지 입니다. 개발중인 페이지 입니다. 
                    </div>
                    <div className="content">
                        <p>
                            <span>닉네임</span>
                            <span>2022.10.31</span>
                            <span>댓글(0)</span>
                            <span>💖(0)</span>
                        </p>
                    </div>
                </div>
                <div className="study-detail-content">
                    내용! 게시판 <br/>
                    타이틀, 닉네임, 날짜, 댓글 수, 좋아요 갯수 불러오기<br/>
                    작성한 게시글 내용 불러오기, 댓글 불러오기
                </div>
                <div className="study-detail-comment" style={{position:'relative'}} >
                    <textarea style={{borderRadius:'15px'}} placeholder="댓글을 남겨보세요!"></textarea>
                    <button className="btn" style={{position: 'absolute', bottom:'0', right:'0', fontFamily:'CookieRun Bold'}}>댓글 남기기</button>
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