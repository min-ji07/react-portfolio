const AiChat = () => {
    window.scrollY = 0;
    return(
        <div className="wrap project-detail" >
            <h2>AI 채팅 프로그램 (진행중)</h2>
            {/* 프로젝트 설명 */}
            <div>
                <p>리액트를 사용하였고 open ai 의 Text completion api를 사용중</p>
                <p>반응형으로 작업 진행중!</p>
                <p>기간: 22.11.18 ~</p>
                <p>기여도: 100%</p>
                <div className="link">
                    <a href="https://github.com/min-ji07/auto-chat">🎈 깃허브 : https://github.com/min-ji07/auto-chat</a>
                    <a href="https://min-ji07.github.io/auto-chat">🤜사이트로 이동🤛</a>
                </div>
            </div>
            <p className="highlight">사용한 기술 스택</p>
            <p className="project-content">
                <span className="react">React</span>
                <span className="js">Javascript</span>
                <span className="html">html5</span>
                <span className="css">css3</span>
                <span className="git">GIT</span>
            </p>
            <p className="highlight">프로젝트 미리보기</p>
            <div className="project-detail-img">
                <img src={process.env.PUBLIC_URL + `/img/autoChat/main_list.png`} alt="main"/>
                <p>
                    - 리스트 클릭 시 상세페이지로 이동<br/>
                    - input text 미입력시 enter 버튼 비활성화 --> 입력시 활성화<br/>
                    - enter 클릭시 하단에 입력된 값으로 말풍선 생성, 입력시 채팅창 하단으로 이동<br/>
                </p>
                <img src={process.env.PUBLIC_URL + `/img/autoChat/list.png`} alt="채팅상세페이지"/>
            </div>
        </div>
    )
}
export default AiChat;