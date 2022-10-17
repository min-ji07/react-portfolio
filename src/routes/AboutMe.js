import { useState } from "react";
import Btn from '../components/Btn';



function AboutMe(){
    // useState 여러개 사용 할거면 이해해야하는듯.. 잘 모름 ㅠ

    // const [write, setWrite] = useState([
    //     {
    //         title: '애플코딩에서 리액트 배우는중',
    //         content: '오늘 한 3화 들었나',
    //     },
    //     {
    //         title: '애플코딩 리액트 숙제 하는중',
    //         content: '다들 어떻게 한걸까',
    //     },
    //     {
    //         title: '내일 아침 9시30분까지 병원 가야함',
    //         content: '한시간 있다가 씻어야겠음',
    //     }
    // ])`` 

    // 좋아요 count 
    const [count, setCount] = useState([0, 0, 0]);
    const write = [
        {
            title: '애플코딩에서 리액트 배우는중',
            content: '오늘 한 4화 들었나',
        },
        {
            title: '애플코딩 리액트 숙제 하는중',
            content: '다들 어떻게 한걸까',
        },
        {
            title: '내일 아침 9시30분까지 병원 가야함',
            content: '한시간 있다가 씻어야겠음',
        }
    ];

    // 그냥 배열 내 값 수정
    const [arr, setArr] = useState([
        '3.배열객체 어려워요', 
        '1.배열객체 다시 공부해야함', 
        '2.이건 그냥 배열'
    ]);
    // 버튼 클릭시 글 수정
    const changeWrite = (e) => {
        const test = e.target;
        // 해당 요소 key 값이나 누른 거 어케 가져오지? --> 가져와야 if문으로 클릭한 곳만 수정할 수 있음
        console.log(test.index);
        let newArr = [...arr];
        newArr = [
            '3. 수정버튼 누르면 수정/대신 전체 수정임/각자 수정을 만들어볼 것',
            '1. 코드 9번째줄로 돌아가세요',
            '2. 해당 요소 클릭했을 때 해당요소만 바뀔 수 있게 수정 필요함'
        ];
        setArr(newArr);
    }
    // 오름차순으로 정렬
    const kanadaChange = () => {
        const kanada = [...arr];
        kanada.sort();
        setArr(kanada);
    }

    // 클릭시 보이기
    const [show, setShow] = useState(false);
    // memo
    const [memo, setMemo] = useState('닫기🐱‍👤/memo로 props보내기');

    const [modalCount, setModalCount] = useState(0);
    

    return(
        <>
            <h1 className="blog">BLOG</h1>
            <ul className="flex">
                <li>Blog</li>
                <li>project</li>
            </ul>
            <div className="p_div">
                {/* <Btn text={'가나다 순으로 정렬'} onClick={kanadaChange}/> */}
                <button onClick={kanadaChange} className='btn_b'>가나다 순으로 정렬</button>
                {arr.map((arr, index) => (
                    <p>
                        {arr}
                        <span key={index} onClick={changeWrite}>글 수정</span>
                    </p>
                    )
                )}
            </div>
            <div className="blog_inner">
                {write.map((write, index) => 
                <>
                    <p key={index} className="blog_title">
                        {write.title}
                        <span onClick={() => {
                            // 배열 복사
                            const copy = [...count];
                            // 복사한 배열에 key(index)번호 가져와서 숫자 1추가함
                            copy[index] = copy[index] + 1;
                            // 복사한 배열 copy의 state값 수정해서 보여줌
                            // 근데 만약 배열이 3개가 아니라면? 추가해야하는데
                            // 🤳🤳 글이 새로 생기면 count 에 배열값 추가하는것도 해야할듯
                            // 🤳🤳 그리고 좋아요버튼 눌렀을 때만 리렌더링 되도록 추가
                            setCount(copy);
                        }}>좋아요💕<span>({count[index]})</span></span>
                    </p>

                    {/* 🤳🤳 여기에도 key 값을 넣고 싶은데 어떻게 해야하는건지.. */}
                    <div className="blog_content">
                        {write.content} <button>글 수정</button>
                    </div>
                </>
                )}
            </div>
            <button onClick={() => setShow(!show)}>Modal을 사용하면 좋은, 장점 알아보기</button>
            {show ? 
            <>
                {/* 객체를 보낼 때 */}
                <Modal {...write}/>
                {/* 그냥 배열 보낼 때 / 편하다! */}
                <Modal1 arr={arr} bgColor={'skyblue'} onClick={kanadaChange}/>
            </> : null }
            <button className="mm_btn" onClick={() => setMemo(!memo)}>메모열기/닫기</button>
            {/* <Btn text={'메모열기/닫기'} onClick={() => setMemo(!memo)} /> */}
            {memo ? <Memo memo={memo}/> : null}
        </>
    )
}
// const 변수의 이점 --> error 메세지 출력
// 
const Modal1 = (props) => {
    return(
        <div className="md_wrap" style={{background: props.bgColor}}>
            <p>이것도 Modal과 같음</p>
            <p>부모 컴포넌트에서 값 보내기(그냥 배열) / 🤣내가 알고 싶은 건 배열 객체 라고!🤣</p>
            <p className="ft_red">props.arr.map((value, index) => 어쩌고 저쩌고)</p>
            <p>props.arr로 쓰기 위해서는 컴포넌트의 속성이름 값을 arr로 줘야함</p>
            <p>예를 들어 <span className="ft_red">모달 속성이름(예를들어 arr) = 괄호 안에 변수명</span> 이런식으로</p>
            <br/>
            <p className="ft_red">style 값도 props로 받을 수 있음 부모: 컴포넌트 옆에 속성 bgColor=괄호안에 'skyblue'  / 자식 : background: props.bgColor</p>
            <br/>
            {/* 이렇게 써야하는 거였음 */}
            <button onClick={props.kanadaChange}>가나다 순으로 정렬</button>
            {props.arr.map((value, index) => <p key={index}>{value}</p>)}
        </div>
    )
}
function Modal(props){
    console.log('Modal로 보낸 props',props);
    // 이거는 안된단말이야..
    // console.log(props.write.title);
    return(
        <>
            <div className="md_wrap">
                <h3>클릭시 배열 객체 값 가져오기</h3>
                <button>props function</button>
                <p>props 값 --> <span className="ft_red">{props[1].title}</span> 왜 안나오지</p>
                <p>props[index].title 하면 잘 나오긴하는데 왜 map은 안되는겨</p>
                <div>
                    {/* {props.map((title, content, index) => (
                        <>
                        /
                            <p key={props.index}>{props[index].title}</p>
                            <p>{props[index].content}</p>
                        </>
                    ))} */}
                </div>
                <br/>
                <p>컴포넌트 장점, 사용하면 좋은</p>
                <p>반복적으로 사용하는 html</p>
                <p>큰 페이지(반복되는)</p>
                <p>자주 변경되는 페이지 만들어놓으면 필요없을 때 없애고 필요할 때 추가</p>
            </div>
        </>
    )
}


// 이걸 오늘의 할일로 만들면 되겠다
const Memo = ({memo}) => {
    return(
        <div className="mm_wrap">
            <a href="#" className="close_mm">{memo}</a>
            {/* 여기도 안나옴 */}
            <ul>
                <li>
                    <a href="https://codingapple.com/course/react-basic/">
                https://codingapple.com/course/react-basic/
                    </a>
                </li>
                <li>
                    메모 기능 구현(todo-list)
                </li>
                <li>
                    배열 복사 한번 더 보기/ 사용해보기 100
                </li>
                <li>
                    배열 객체 공부하기/ useState로 배열 저장 후 사용하기 7 / 배열 객체일 때 key값을 어떻게 줘야하는지 110
                    <br/>
                    <a href="https://crispypotato.tistory.com/150">https://crispypotato.tistory.com/150</a>
                </li>
                <li>
                    배열 객체 관련 클릭시 해당 요소 key 값 가져오는 법 50
                </li>
                <li>
                    Btn 컴포넌트 클릭시 onClick 사용 가능하게 하기(컴포넌트로 함수사용) aboutMe 81 / 121-124
                </li>
                <li>
                    Memo컴포넌트로 onClick, memo state 보내서 닫기 버튼 클릭시 닫히게 하기 174
                </li>
                <li>
                    
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                    
                </li>

            </ul>
        </div>
    )
}
export default AboutMe;