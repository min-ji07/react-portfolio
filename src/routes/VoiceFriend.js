const VoiceFriend = () => {
    window.scrollY = 0;
    return(
        <div className="wrap project-detail" >
            <h2>보이스프렌즈 웹, 앱</h2>
            {/* 프로젝트 설명 */}
            <div>
                <p>리액트 네이티브를 사용하여 화면 컴포넌트 개발</p>
                <p>웹 사이트는 반응형으로 작업하였고 자바스크립트를 사용하여 아이폰의 select 모양 슬라이드 기능을 구현하였습니다.</p>
                <p>기여도: 웹 100%, 앱 80%</p>
                <div className="link">
                    <a href="https://vfriends.co/ko">🤜사이트로 이동🤛</a>
                </div>
            </div>
            <p className="highlight">사용한 기술 스택</p>
            <p className="project-content">
                <span>React-native</span>
                <span className="js">Javascript</span>
                <span className="jquery">jQuery</span>
                <span className="html">html5</span>
                <span className="css">css3</span>
                <span className="git">GIT</span>
            </p>
            <p className="highlight">프로젝트 미리보기</p>
            <div className="project-detail-img">
                <div className="flex-img">
                    <img src={process.env.PUBLIC_URL + `/img/voice/notice.jpg`} alt="notice"/>
                    <img src={process.env.PUBLIC_URL + `/img/voice/login.jpg`} alt="login"/>
                </div>
                <div className="flex-img">
                    <img src={process.env.PUBLIC_URL + `/img/voice/mobile1.png`} alt="img1"/>
                    <img src={process.env.PUBLIC_URL + `/img/voice/mobile2.png`} alt="img2"/>
                    <img src={process.env.PUBLIC_URL + `/img/voice/mobile3.png`} alt="img3"/>
                    <img src={process.env.PUBLIC_URL + `/img/voice/mobile4.png`} alt="img4"/>
                    <img src={process.env.PUBLIC_URL + `/img/voice/mobile5.png`} alt="img5"/>   
                </div>
                <p>
                    - 앱 화면 일부 미리보기👆<br/>
                    <br/>
                    - 웹 사이트 미리보기<br/>
                </p>
                <img src={process.env.PUBLIC_URL + `/img/voice/voice_main.png`} alt="main"/>
                <img src={process.env.PUBLIC_URL + `/img/voice/voice_scroll.gif`} alt="web-img2"/>
                <img src={process.env.PUBLIC_URL + `/img/voice/voice_img3.png`} alt="web-img3"/>
                <img src={process.env.PUBLIC_URL + `/img/voice/voice_img4.png`} alt="web-img4"/>
            </div>
        </div>
    )
}
export default VoiceFriend;