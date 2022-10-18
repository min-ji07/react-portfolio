import { useState } from "react";
import Btn from '../components/Btn';



function AboutMe(){
    // 좋아요 count 
    const [count, setCount] = useState([0, 0, 0]);
    const [write, setWrite] = useState([
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
    ]);
    const [objectTitle, setObjectTitle] = useState('');
    const [objectContent, setObjectContent] = useState('');
    const ObjectArrPush = () => {
        let copy = [...write];
        // 이렇게 추가하면 될듯 /엥.. 하나밖에 추가 안됨.. 무엇..
        let test = copy.length + 1;
        copy[test] = {
            title: objectTitle,
            content: objectContent
        }
        setWrite(copy);
    }

    // 그냥 배열 내 값 수정
    const [arr, setArr] = useState([
        '3.배열객체 어려워요', 
        '1.배열객체 다시 공부해야함', 
        '2.이건 그냥 배열'
    ]);
    // 버튼 클릭시 글 수정
    const changeWrite = (e) => {
        e.stopPropagation();
        // 이벤트 버블링 금지
        const test = e.target.key;
        console.log(test);
        // 해당 요소 key 값이나 누른 거 어케 가져오지?
        // --> 가져와야 if문으로 클릭한 곳만 수정할 수 있음
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

    // Modal을 사용하면 좋은, 장점 알아보기 클릭시 보이기
    const [show, setShow] = useState(false);
    // memo
    const [memo, setMemo] = useState('닫기🐱‍👤/memo로 props보내기');
    // 해당 글 클릭시 해당글만 보이기
    const [arrShow, setArrShow] = useState(false);
    const [title, setTitle] = useState(0);
    // input에 글 입력 후 배열 추가하기
    const [post, setPost] = useState('');
    const onChange = (e) =>{
        setPost(e.target.value);
    }
    const onPushArr = (e) => {
        let pushArr = [...arr];
        pushArr.push(post);
        // unshift 배열의 맨 앞에 값을 추가
        setArr(pushArr);
    }
    // 버튼 클릭시 글 삭제
    // 얘는 index만 들어오면 잘 작동할 것 같은데 span 태그 안에서 작동이 안됨.. 왜지..?
    const onSpliceArr = (e) => {
        e.stopPropagation();
        let copy = [...arr];
        console.log(copy);
        copy.splice(0, 1);
        console.log(copy);
        setArr(copy);
    }
    const [tab, setTab] = useState(0);
    return(
        <>
            <h1 className="blog">BLOG</h1>
            <ul className="flex">
                <li onClick={() => {
                    console.log(tab);
                    setTab(0)}}>Blog</li>
                <li onClick={() => {
                    console.log(tab);
                    setTab(1)}}>project</li>
                    {/* 콘솔찍어보면 알겠지만 +1 되지않고 0이 먼저 찍힘 --> 이것은 비동기처리 */}
            </ul>
            {/* 해당 글을 컴포넌트로 만들어서 if문으로 사용해도 될 것 같음 괄호때문에 막히니까 */}
            <div className="p_div">
                {/* <Btn text={'오름차순으로 정렬'} onClick={kanadaChange}/> */}
                <button onClick={kanadaChange} className='btn_b'>오름차순으로 정렬</button>
                <br/>
                <div style={{display:'flex'}}>
                    <input type="text" style={{width: '100%'}} onChange={onChange} placeholder="글을 입력하세요. 배열에 추가할거예요"/>
                    <button onClick={onPushArr} style={{ width: '200px'}}>배열에 추가하기</button>
                </div>
                {arr.map((arr, index) => (
                    <>
                        <p key={index} style={{display:'flex', justifyContent: 'space-between'}} onClick={() => {
                            setArrShow(true);
                            setTitle(index);
                            console.log(index);
                        }}>
                            {arr}
                            <div>
                                <span onClick={changeWrite}>글 수정</span>
                                <span style={{background: 'lightpink'}} onClick={onSpliceArr}>글 삭제</span>
                            </div>
                        </p>
                        {/* 이벤트 버블링때문에 요소 나눔 */}
                    </>
                    )
                )}
            </div>
            {
                arrShow ? (
                <div className="md_wrap" style={{background: 'lightgreen'}}>
                    {arr[title]}
                </div>
                ) : null
            }
            <div className="blog_inner">
                <div style={{width: '100%', display:'flex', alignItems:'center', marginBottom: '20px'}}>
                    <input type="text" onChange={(e) => {
                        setObjectTitle(e.target.value);
                    }} style={{width: '100%'}} placeholder="여기는 배열객체 제목 입력란입니다"/>
                    <input type="text" onChange={(e) => {
                        setObjectContent(e.target.value);
                    }} style={{width: '100%'}} placeholder="여기는 배열객체 내용 입력란입니다"/>
                    <button onClick={ObjectArrPush} style={{width: '120px', height: '40px', marginLeft: '20px'}}>배열객체추가</button>
                </div>
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
                {/* 그냥 배열 보낼 때 / 편하다! */}
                <Modal arr={arr} bgColor={'skyblue'} onClick={kanadaChange}/>
            </> : null }
            <button className="mm_btn" onClick={() => setMemo(!memo)}>메모열기/닫기</button>
            {/* show hide 버튼값은 어떻게 넘기는지 */}
            {/* <Btn text={'메모열기/닫기'} setBtnShow={setBtnShow}/> */}
            {memo ? null : <Memo memo={memo}/>}
            {/* 이거 뭔가 이상한데..? */}
            {tab === 1 ? 
                <div>
                    tab 2번
                </div> : null}
        </>
    )
}
/*
예를들어 밑에 함수처럼 컴포넌트를 만든다면
컴포넌트는 return문 꼭 필요함 안써주면 안됨

function TabContent({tab}){
    if(tab == 0){
        return <div>내용0</div>
    }else if(tab == 0){
        return <div>내용1</div>
    }else if(tab == 0){
        return <div>내용2</div>
    }
}

*/




// const 변수의 이점 --> error 메세지 출력
// 
const Modal = (props) => {
    console.log(props);
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
            <button onClick={props.kanadaChange}>오름차순으로 정렬</button>
            {props.arr.map((value, index) => <p key={index}>{value}</p>)}
            <p>얘는 왜 안되는지 모르겠다</p>
        </div>
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
                show hide 버튼값은 어떻게 넘기는 법 / value, setValue, onClick
                </li>
                <li>
                    Btn 컴포넌트 클릭시 onClick 사용 가능하게 하기(컴포넌트로 함수사용) aboutMe 81 / 121-124
                </li>
                <li>
                    Memo컴포넌트로 onClick, memo state 보내서 닫기 버튼 클릭시 닫히게 하기 174
                </li>
                <li>
                👍 Route -> aboutMe -> todolist 로 가는방법 알아보기(App.js 참고)
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
                👍 배열 객체 관련 클릭시 해당 요소 key 값 가져오는 법 50 --> 89~107
                </li>
                <li>
                방명록 입력 시간 띄우기, 근데 다 같이 바뀜..(GuestBook 25)
                </li>
                <li>
                    <a href="https://codingapple.com/course/react-basic/">
                    👍 애플코딩 주소 https://codingapple.com/course/react-basic/
                    </a>
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