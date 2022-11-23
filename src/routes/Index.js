import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Index = () => {
    let navigate = useNavigate();

    let board = localStorage.getItem("BoardContent");
    board = JSON.parse(board);
    useEffect(() => {
        if(board === null){
            localStorage.setItem("BoardContent", JSON.stringify([]));
        }else{
            return
        }
    },[]);
    return(
        <div className="wrap">
            <section>
                <div className="introduce">
                    <div className="my-photo">
                        <img src={process.env.PUBLIC_URL + `/img/dust.jpg`} alt="dust"/>
                    </div>
                    <ul className="contact">
                        <li>
                            <a href="mailto: 86297534@naver.com">✉ email : 86297534@naver.com</a>
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
                            <a href={process.env.PUBLIC_URL + `/file/pdf.pdf`} download="퍼블리셔 경력을 가진 신입 프론트엔드 개발자 김민지입니다.">🎉 이력서 다운로드</a>
                        </li>
                    </ul>
                </div>
                <h1>김민지 | Portfolio</h1>
                <div className="my-info">
                    <div>
                        보이는 결과물을 만드는 것에 흥미를 느낍니다.<br/>
                        관심 분야가 있으면 과감하게 부딪쳐보는 성향으로 배우는 것을 두려워하지 않고 시도하며, <br/>
                        사용자가 편리하게 사용할 앱, 웹을 만드는 프론트엔드 개발자로 성장하고 싶습니다.
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
                <h2>📜 프로젝트 (클릭시 상세페이지로 이동합니다👏)</h2>
                <div className="project">
                    {/* 프로젝트 누르면 상세페이지로 이동 */}
                    {/* 
                        상세페이지로 이동해도 별로 알려줄 게 없으니 
                        마우스로 갖다 대면 새로운 모달창이 나와서 설명해줌, 뭐 했는지
                        기여도, 퍼블리싱, 뭐 기타 등등,
                        반응형 웹사이트
                    */}
                    <div onClick={() => {
                        navigate('/reactportfolio');
                        window.scrollTo(0, 0);
                    }}>
                        <div className="project-img">
                            <img src={process.env.PUBLIC_URL + `/img/react_main.png`} alt="react portfolio"/>
                        </div>
                        <div className="project-content">
                            <p className="title">React 포트폴리오</p>
                            <p>기간: 22.10.24 ~ 22.11.04(12일)</p>
                            <p>기여도: 100%</p>
                            <p style={{lineHeight: '1.2'}}>
                                <span className="react">React</span>
                                <span className="js">Javascript</span>
                                <span className="html">html5</span>
                                <span className="css">css3</span>
                                <span className="git">GIt</span>
                            </p>
                            <p>리액트로 작업한 첫 프로젝트입니다.</p>
                        </div>
                    </div>
                    <div onClick={() => {
                        navigate('/aichat');
                        window.scrollTo(0, 0);
                    }}>
                        <div className="project-img">
                            <img src={process.env.PUBLIC_URL + `/img/autoChat/list.png`} alt="ai chat"/>
                        </div>
                        <div className="project-content">
                            <p className="title">AI 채팅 프로그램(진행중)</p>
                            <p>기간: 22.11.18 ~ </p>
                            <p>기여도: 100%</p>
                            <p style={{lineHeight: '1.2'}}>
                                <span className="react">React</span>
                                <span className="js">Javascript</span>
                                <span className="html">html5</span>
                                <span className="css">css3</span>
                                <span className="git">GIt</span>
                            </p>
                            <p>리액트와 api를 사용한 AI 채팅 프로젝트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.hongcafe.com/" className="project-img">
                            <img src={process.env.PUBLIC_URL + `/img/project1.PNG`} alt="사진"/>
                        </a>
                        <div className="project-content">
                            <p className="title">홍카페 사이트 퍼블리싱</p>
                            <p>클릭시 해당 사이트로 이동합니다👉</p>
                            <p>기여도: 100%</p>
                            <p style={{lineHeight: '1.2'}}>
                                <span className="js">Javascript</span>
                                <span className="jquery">jquery</span>
                                <span className="html">html5</span>
                                <span className="css">css3</span>
                                <span className="git">GIt</span>
                            </p>
                            <p>반응형으로 구현한 웹 사이트로 현재 서비스중인 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.hongstore.com/" className="project-img">
                            <img src={process.env.PUBLIC_URL + `/img/project2.PNG`} alt="사진"/>
                        </a>
                        <div className="project-content">
                            <p>홍스토어 사이트 퍼블리싱</p>
                            <p>클릭시 해당 사이트로 이동합니다👉</p>
                            <p>기여도: 100%</p>
                            <p style={{lineHeight: '1.2'}}>
                                <span className="js">Javascript</span>
                                <span className="jquery">jquery</span>
                                <span className="html">html5</span>
                                <span className="css">css3</span>
                                <span className="git">GIt</span>
                            </p>
                            <p>반응형으로 구현한 웹 사이트로 현재 서비스중인 사이트입니다.</p>
                        </div>
                    </div>
                    <div onClick={() => {
                        navigate('/voicefriend');
                        window.scrollTo(0, 0);
                    }}>
                        <div href="https://vfriends.co/ko" className="project-img">
                            <img src={process.env.PUBLIC_URL + `/img/project3.PNG`} alt="사진"/>
                        </div>
                        <div className="project-content">
                        <p>보이스프렌즈 웹 사이트, 앱 화면 퍼블리싱</p>
                            <p>기여도: 웹 100%, 앱 80%</p>
                            <p style={{lineHeight: '1.2'}}>
                                <span className="rn">React-native</span>
                                <span className="js">Javascript</span>
                                <span className="jquery">jquery</span>
                                <span className="html">html5</span>
                                <span className="css">css3</span>
                                <span className="git">GIt</span>
                            </p>
                            <p>반응형 웹 사이트 퍼블리싱, 앱 화면 컴포넌트 개발하였습니다. 현재 서비스중인 앱 입니다.</p>

                        </div>
                    </div>
                    <div>
                        <a target="_blank" href="https://bamletter.co/" className="project-img">
                            <img src={process.env.PUBLIC_URL + `/img/project4.PNG`} alt="사진"/>
                        </a>
                        <div className="project-content">
                            <p>밤편지우체국 사이트 퍼블리싱</p>
                            <p>클릭시 해당 사이트로 이동합니다👉</p>
                            <p>기여도: 100%</p>
                            <p style={{lineHeight: '1.2'}}>
                                <span className="js">Javascript</span>
                                <span className="jquery">jquery</span>
                                <span className="html">html5</span>
                                <span className="css">css3</span>
                                <span className="git">GIt</span>
                            </p>
                            <p>반응형으로 구현한 웹 사이트로 현재 서비스중인 사이트입니다.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Index;