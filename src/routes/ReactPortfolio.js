const ReactPortfolio = () => {
    window.scrollY = 0;
    return(
        <div className="wrap project-detail" >
            {/* <img src={process.env.PUBLIC_URL + `/img/react/react_main_img2.png`} alt="" /> */}
            <h2>React 포트폴리오</h2>
            {/* 프로젝트 설명 */}
            <div>
                <p>리액트로 작업한 첫 프로젝트입니다. </p>
                <p>반응형으로 구현하였고 다크모드, 투두리스트, 쇼핑몰, 장바구니, 게시판 등의 기능을 구현하였습니다.</p>
                
                <p>기간: 22.10.24 ~ 22.11.04(12일)</p>
                <p>기여도: 100%</p>
                <div className="link">
                    <a href="https://github.com/min-ji07/react-portfolio">🎈 깃허브 : https://github.com/min-ji07/react-portfolio</a>
                    <a href="https://min-ji07.github.io/react-portfolio/">🤜사이트로 이동🤛</a>
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
                <img src={process.env.PUBLIC_URL + `/img/react/todolist.png`} alt="main"/>
                <p>
                    - useState Hook을 사용해 state를 저장, map으로 입력된 값을 출력<br/>
                    - 클릭시 해당 index의 값을 삭제<br/>
                    - 해당 index의 id 값이 있는 객체를 찾아 check 속성을 변경하여 체크<br/>
                </p>
                <img src={process.env.PUBLIC_URL + `/img/react/shop_img2.png`} alt="shop"/>
                <p>
                    - 이미지 클릭시 상세페이지 이동 --> 상세페이지 탭 버튼 구현<br/>
                    - 버튼 클릭시 id 값이 일치하는 객체를 배열에 추가<br/>
                    - 배열내의 값과 비교해 해당 item이 있으면 수량 추가, 없으면 배열에 추가<br/>
                    - 담기 버튼 클릭시 모달창을 띄움<br/>
                    - 장바구니 버튼 클릭시 저장된 값을 가져와 출력<br/>
                    - 장바구니 내의 삭제 버튼 클릭시 값 삭제, 총 금액을 다시 계산<br/>
                    - 전체삭제 기능<br/>
                </p>
                <img src={process.env.PUBLIC_URL + `/img/react/cart.png`} alt="cart"/>
                <img src={process.env.PUBLIC_URL + `/img/react/cart_img2.png`} alt="main"/>
                <p>
                    - 글쓰기 버튼 클릭시 글 작성 페이지로 이동. 글 작성 후 게시판으로 이동<br/>
                    - 글 상세페이지 내 좋아요 기능 구현, 게시판 화면 값과 같이 변경합니다.<br/>
                    - 수정 버튼 클릭시 제목과 내용의 값을 가져와 저장합니다.<br/>
                    - 글 삭제 후 게시판이동<br/>
                </p>
                <img src={process.env.PUBLIC_URL + `/img/react/board.png`} alt="main"/>
                <img src={process.env.PUBLIC_URL + `/img/react/board_img2.png`} alt="main"/>
                <img src={process.env.PUBLIC_URL + `/img/react/board_img6.png`} alt="main"/>
                <p>
                    - 다크모드 활성화, 버튼 클릭시 최상단에 클래스를 추가하여 구현<br/>
                    - 탑 버튼 구현
                </p>
                <img src={process.env.PUBLIC_URL + `/img/react/dark.png`} alt="main"/>
            </div>
            {/* ㅌㅔ두리로 감싸기 */}
            {/* <div>
                현재 댓글 기능 추가 예정입니다.
            </div> */}
        </div>
    )
}
export default ReactPortfolio;