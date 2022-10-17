import { useState } from "react";

const Arr = () => {
    const arr = [
        '부모한테 배열 props를 가져오려면',
        '<컴포넌트명 변수명={변수명} (이름은 상관없지만) />',
        '자식컴포넌트 () 안에 props나 속성명을 써줌',
        '예를 들어 props 를 써줄경우',
        'props.arr.map((value, index) => <p key={index}>{value}</p>',
        '작성시 배열 내 값을 가져올 수 있다',
        'Array.prototype.map() expects a return value from arrow function',
        '오류 시 {} 괄호 말고 ()로 변경해볼 것',
        'https://velog.io/@ylyl/TIL-Warning-arrow-function-return-value 주소 참고'
    ];
    const arrObject = [
        {
            title: '(border, bgColor) props 값을 이렇게 받을시 style적용 안됨',
            content: '출력하면 객체로 나옴 --> {border: black, bgColor: light~로 나오고 bgColor 값은 {} 빈 객체로 나옴',
        },
        {
            title: '({border, bgColor})',
            content: '출력하면 black 한줄 lightseagreen 한줄 값만 나옴'
        },
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
    const [count, setCount] = useState(0);
    const like = () => {
        setCount(count + 1);
    }
    const hate =() => {
        setCount(count - 1);
    }
    return(
        <div>
            <h2>객체, 배열객체</h2>
            <Modal bgColor={'lightgoldenrodyellow'} arr={arr} {...arrObject}/>
            <div style={{textAlign: 'center'}}>
                <p className="ft_red">style 값도 props로 받을 수 있음 </p>
                <p className="ft_red">부모: 컴포넌트 옆에 속성 bgColor=괄호안에 'skyblue'</p>
                <p className="ft_red">자식 : background: props.bgColor</p>
            </div>
            <Object arrObject={arrObject} like={like} hate={hate} count={count} setCount={setCount}/>
            {/* border={'black'} bgColor={'lightseagreen'} */}
            {/* 속성값이 많을 땐 이렇게 주는 게 아닌가? */}
        </div>
    )
}

const Object = ({arrObject, like, hate, count}) => {
    // arrObject.prototype.map()
    // https://velog.io/@fltxld3/React-%EB%B0%B0%EC%97%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-List-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%A1%B0%ED%9A%8C
    return(
        // style={{border:`1px solid ${border}`, background: bgColor}}
        <div className="md_wrap">
            <button>부모컴포넌트에서 기능 가져오기(옆 버튼 클릭)</button>
            <button onClick={like}>좋아요💕</button><span className="ft_red">({count})</span><button onClick={hate}>싫어요🤦‍♂️</button>
            <p style={{fontSize: '30px', marginBottom: '15px'}}>🤣배열객체🤣</p>
                <ul>
                    {/* {arrObject.map((title, content, index) => (
                    <li key={index}>
                        <p>{title}</p>
                        <div>
                            {content}
                        </div>
                    </li>
                    ))} */}
                </ul>
                {/* 밑에처럼 하고 싶은데 뭐가 문제일까..? */}
                <ul>
                    <li>
                        <p>{arrObject[0].title}</p>
                        <div>
                            {arrObject[0].content}
                        </div>
                    </li>
                    <br/>
                    <li>
                        <p>{arrObject[1].title}</p>
                        <div>
                            {arrObject[1].content}
                        </div>
                    </li>
                </ul>
        </div>
    )
}

const Modal = (props) => {
    return(
        <div className="md_wrap" style={{background: props.bgColor}}>
            <p style={{fontSize: '30px', marginBottom: '15px'}}>🤣배열🤣(Modal)</p>
            {/* 값 가져올 때 props로 가져왔으면 앞에 props를 붙여줘야함 */}
                <ul>
                {props.arr.map((value, index) => 
                (
                    <li key={index}>{value}</li>
                ))}
                </ul>
            <br/>
        </div>
    )
}


export default Arr;