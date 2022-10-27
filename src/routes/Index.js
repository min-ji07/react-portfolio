import { Link } from "react-router-dom";
const Index = () => {
    return(
        <div className="wrap">
            <section>
                <div className="my-photo">
                    <img src={process.env.PUBLIC_URL + `/img/2e7bac51f4d7d7f33379dae9ce79b0ec1c1773c4.gif`} alt="사진"/>
                </div>
                <h1>김민지 | Portfolio</h1>
                <div className="my-info">
                    <div>
                        보이는 결과물을 만드는 것에 흥미를 느낍니다.<br/>
                        사용자가 편리하게 사용할 앱, 웹을 만드는 프론트엔드 개발자로 성장하고 싶습니다.
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="mailto: 86297534@naver.com">✉ email : 86297534@naver.com</a><br/>
                            </li>
                            <li>
                                <a href="tel: 010-4581-1897">🎈 번호 : 010-4581-1897</a>
                            </li>
                            <li>
                                🚓 주소 : 서울시 마포구
                            </li>
                            <li>
                                <a href="https://github.com/min-ji07">📦 Github</a>
                            </li>
                            <li>
                                <a href="https://min-ji07.tistory.com/">📖 Blog</a>
                            </li>
                            <li>
                                <a href="#">🎉 aboutMe</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h2>🚀 경력</h2>
                <div className="career">
                    <ul>
                        <li>
                            <p>(주)피플벤처스</p>
                            <p>2020.09 ~ 2022.06</p>
                        </li>
                        <li>
                            <p>에이쏠</p>
                            <p>2020.01 ~ 2020.05</p>
                        </li>
                        <li>
                            <p>김창원세무회계사무소</p>
                            <p>2016.07 ~ 2018.07</p>
                        </li>
                        <li>
                            <p>세무사최경민사무소</p>
                            <p>2014.10 ~ 2016.03</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>🌌 기술 스택</h2>
                <div className="skill">
                <ul>
                    <li>
                        <p>Language</p>
                        <p>
                            <span>javascript</span>
                            <span>jQuery</span>
                        </p>
                    </li>
                    <li>
                        <p>Framework / Library</p>
                        <p><span>React</span><span>React-native</span></p>
                    </li>
                    <li>
                        <p>MarkUp</p>
                        <p><span>html5</span><span>CSS3</span></p>
                    </li>
                    <li>
                        <p>Tool</p>
                        <p><span>Git</span><span>Github</span></p>
                    </li>
                </ul>
                </div>
            </section>
            <section>
                <h2>🚩 교육</h2>
                <div className="career">
                    <ul>
                        <li>
                            <p>KH정보교육원(자바(JAVA) 프레임워크 개발자 양성과정)</p>
                            <p>2019.04~ 2019.10</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>📜 프로젝트</h2>
                <div className="project">
                    {/* 프로젝트 누르면 상세페이지로 이동 */}
                    {/* 
                        상세페이지로 이동해도 별로 알려줄 게 없으니 
                        마우스로 갖다 대면 새로운 모달창이 나와서 설명해줌, 뭐 했는지
                        기여도, 퍼블리싱, 뭐 기타 등등,
                        반응형 웹사이트
                    */}
                    <div>
                        <a href="https://www.hongcafe.com/">
                            <img src={process.env.PUBLIC_URL + `/img/project1.png`} alt="사진"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.hongstore.com/">
                            <img src={process.env.PUBLIC_URL + `/img/project2.png`} alt="사진"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://vfriends.co/ko">
                            <img src={process.env.PUBLIC_URL + `/img/project3.png`} alt="사진"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://bamletter.co/">
                            <img src={process.env.PUBLIC_URL + `/img/project4.png`} alt="사진"/>
                        </a>
                    </div>
                </div>
            </section>
            {/* 탑으로 올라가는 버튼 만들기, 한 50%정도 내려왔을 때 스르륵 생기게 */}
            <div className="top-btn">
                <p>위로 올라가요!</p>
                <img src={process.env.PUBLIC_URL + `/img/aa5923ee18f6af042f4fb0c03d7e6e83822ceda4.gif`} alt="위로 올라가요!"/>
            </div>
        </div>
    )
}
export default Index;