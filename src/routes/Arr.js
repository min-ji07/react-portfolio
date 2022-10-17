const Arr = () => {
    const arr = [
        '부모한테 배열 props를 가져오려면',
        '<컴포넌트명 변수명={변수명} (이름은 상관없지만) />',
        '자식컴포넌트 () 안에 props나 속성명을 써줌',
        '예를 들어 props 를 써줄경우',
        'props.arr.map((value, index) => <p key={index}>{value}</p>',
        '작성시 배열 내 값을 가져올 수 있다',
        'Array.prototype.map() expects a return value from arrow function',
        '오류 시 {} 괄호 말고 ()로 변경해볼 것 / https://velog.io/@ylyl/TIL-Warning-arrow-function-return-value'
    ];
    const arrObject = [
        {
            title: '(border, bgColor) props 값을 이렇게 받을시 style적용 안됨',
            content: '출력하면 객체로 나옴 --> {border: black, bgColor: light~로 나오고 bgColor 값은 {} 빈 객체로 나옴',
        },
        {
            title: '({border, bgColor})',
            content: '출력하면 black 한줄 lightseagreen 한줄 값만 나옴'
        }
    ]
    return(
        <div>
            <h2>객체, 배열객체</h2>
            <Modal bgColor={'lightgoldenrodyellow'} arr={arr}/>
            <div style={{textAlign: 'center'}}>
                <p className="ft_red">style 값도 props로 받을 수 있음 </p>
                <p className="ft_red">부모: 컴포넌트 옆에 속성 bgColor=괄호안에 'skyblue'</p>
                <p className="ft_red">자식 : background: props.bgColor</p>
            </div>
            <Object arrObject={arrObject}/>
            {/* border={'black'} bgColor={'lightseagreen'} */}
            {/* 속성값이 많을 땐 이렇게 주는 게 아닌가? */}
            {/* object 컴포넌트에서 콘솔 찍으면 다른 속성까지 다 나옴*/}
        </div>
    )
}

const Object = ({arrObject}) => {
    // border, bgColor
    // console.log(arrObject);
    // console.log(arrObject[0].content);
    // arrObject.prototype.map()
    // https://velog.io/@fltxld3/React-%EB%B0%B0%EC%97%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-List-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%A1%B0%ED%9A%8C
    return(
        // style={{border:`1px solid ${border}`, background: bgColor}}
        <div className="md_wrap">
            <p style={{fontSize: '30px', marginBottom: '15px'}}>🤣배열객체🤣</p>
            {arrObject.map((title, content, index) => (
                <ul>
                    <li key={index}>
                        <p>{title}</p>
                        <div>
                            {content}
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}

const Modal = (props) => {
    return(
        <div className="md_wrap" style={{background: props.bgColor}}>
            <p style={{fontSize: '30px', marginBottom: '15px'}}>🤣배열🤣</p>
            {props.arr.map((value, index) => 
            (
                <ul>
                    <li key={index}>{value}</li>
                </ul>
            ))}
            <br/>
            <button>부모컴포넌트에서 기능 가져오기</button>
        </div>
    )
}


export default Arr;