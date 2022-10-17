import Btn from "../components/Btn";
import Header from "./Header";
import Footer from "./Footer";
import "../css/common.css";
import { useEffect, useRef, useState } from "react";

function Home(){
    // 배경 색상 랜덤 -> 리렌더링 될 때 변경
    useEffect(() => {
        const arr = ['#ED4877', '##FEB03F', '#A16FFA', '#57B6ED', '#222625'];
        const bg = Math.floor(Math.random() * arr.length);
        const body = document.getElementById("random_bg");
        body.style.background = arr[bg];
    }, []);
    // 다크모드, 만들기
    /*
    const [on, setOn] = useState(false);
    const lightSwitch = () => setOn(on => !on);

    <button onClick={lightSwitch}> On / Off </button>
    */ 

    // 현재 시간 보여주기
    const [time, setTime] = useState(new Date());


    // useRef --> 컴포넌트가 계속 렌더링이 되어도 값을 유지할 수 있음
    // state에 값을 저장하면 리렌더링 시 초기화 --> ref에 값을 저장하면 렌더링이 되지않으며 값 유지
    // 로그인 화면에서 자동 포커스 가능 --> Document.querySelector() 과 비슷
    
    const ref = useRef('Ref 설명!');
    // 성능 관련
    // { current : 'hello' }
    // ref는 object기 때문에 내부 속성에 접근하기 위해서는 ref.current 로 접근함
    // ref.current = 'hello'
    // state count +1 처럼 올려도 화면은 수정되지않음 --> 값이 변한다고 리렌더링 되지않기때문에(하지만 값은 바뀌고 있음)

    const inputIdRef = useRef();
    const inputPwRef = useRef();
    useEffect(() => {
        inputIdRef.current.focus();
    },[]);
    const login = () => {
        const valueId = inputIdRef.current.value;
        const valuePw = inputPwRef.current.value;
        // || 둘 중에 하나라도, && 둘 다 참이어야
        if(valueId === "" || valueId === null){
            return;
        }else{
            if(valuePw === "" || inputPwRef === null){
                alert('비밀번호를 확인해주세요.');
                inputPwRef.current.focus();
            }else{
                alert(`환영합니다 ${inputIdRef.current.value}!`);
                inputIdRef.current.focus();
                console.log('id: ', valueId);
                console.log('pw: ', valuePw);
                inputIdRef.current.value = "";
                inputPwRef.current.value = "";
            }
        }
    }
    // useRef 배열은 없나? 배열에 user정보 넣고 싶을땐?
    const userInfo = useRef([]);

    // https://www.youtube.com/watch?v=VxqZrL4FLz8 내일공부할내용

    // 리드미 정리
    // https://post.sayunbooks.com/entry/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%B6%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%A6%AC%EB%93%9C%EB%AF%B8github-readme%EC%B0%B8%EA%B3%A0-%EC%98%88%EC%8B%9C

    return(
        <div id="random_bg" className="wrap">
            <Header/>
            <div className="inner_wrap">
                <img src={process.env.PUBLIC_URL + `/img/jjanggu.jpg`} alt="" style={{width: '100px',height: '100px'}}/>
                <br/>
                <input type="text" ref={inputIdRef} placeholder="userName" />
                <input type="password" ref={inputPwRef} placeholder="userPassWord" />
                <button onClick={login}>Login</button>
                <p>이름: 김민지</p>
                <a href="mailto: 86297534@naver.com">email : 86297534@naver.com</a>
                <a href="tel: 010-4581-1897">번호 : 01045811897</a>
                <p>번호 : 01045811897</p>
                <p>주소 : 서울시 마포구</p>
                <a href="https://github.com/min-ji07">깃 주소 : https://github.com/min-ji07</a>
                {/* 
                    
                    자기소개 관련
                    이름, 이메일, 번호, 주소(마포구까지만)

                    깃 주소 첨부

                    https://cdg-portfolio.com/ 참고

                    http://leeboa.com/ 참고 --> 퍼블관련도 있음

                */}
                {/* 아이디, 비밀번호 저장 --> 확인되면 다른 페이지 보여주기 */}
                {/* 게시판(일기같은, 메모장같은) */}
                {/* todo list --> 로그인 안해도 됨 */}
                {/* api사용 --> 날씨, 위치 */}
                {/* 풀스크린? 슬라이드 */}

                {/* 
                
                함수에서 값 받아오기
                const value = calculate();

                function calculate(){
                    return 10;
                }

                하면 value 는 10인거임
                
                */}
                <Btn text={'왜 만들어놓은 버튼이지?'}/>
                <p>{ref.current}</p>



                <p>
                    리덕스
                    - 사용이유
                    props 귀찮을 때 --> 부모에서 손자한테 props 한번에 전송 이런 거 없음
                    state 문법 귀찮을 때

                    Redux 설치 후 js 파일 만들고 원하는 변수를 넣으면
                    아무대서나 사용할 수 있음
                    react-redux, redux npm 다운

                    state 수정해주는 js파일을 reducer


                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;