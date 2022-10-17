import { useEffect, useState, useRef, useCallback } from "react";
import TestBox from "./TestBox";

// ****** input
// Hook에 맨 밑에 export 하는것과 같음
export const useInput = (initialValue, validator) => {
    // 유효성 검사?
    // input을 업데이트
    const [value, setValue] = useState(initialValue);
    // 해당 콘솔은 리렌더링 될 때 출력됨
    // 값이 변경되면 리렌더링 되기 때문에 변경되면서 같이 또 출력되는 것
    // console.log(value, "0");
    const onChange = e => {
        // input 값이 변경될 때 출력
        // const value = e.target.value 와 같음
        // 이렇게 쓰는 이유는 const value 변수명이 위에도 있기 때문임
        console.log(validator);
        // value => !value.includes("@")
        const {
            target: {value}
        } = e;
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value);
            console.log(value, "1");
        }
        if(willUpdate){
            setValue(value);
            console.log(value, "2");
        }
    }
    return { value, onChange }; 
}

// ****** tabs
const content = [
    // 배열의 0의 값
    {
        tab: "Section 1",
        content: "리액트야 Section 1 보여줘."
    },
    {
        tab: "Section 2",
        content: "리액트야 Section 2 보여줘."
    }
];

export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentInder] = useState(initialTab);
    // if(!allTabs || Array.isArray(allTabs)){
    //     return;
    // };
    return{
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentInder
    }
}

// ****** html <title> 변경
const useTitle = (initialTitle) =>{
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}






function Hook(){
    // @가 입력되지않게함
    const check = value => !value.includes("@");
    const name = useInput("dust", check);

    // 밑에 변수는 state.currentItem 과 같다고 보면 됨
    const { currentItem, changeItem } = useTabs(0, content);
    // 상단 useTabs의 초기 값이 0이 됨

    const [number, setNumer] = useState(0);
    const [aNumber, setANumber] = useState(0);
    const plus = () => {
        setNumer(number + 1);
    }
    const plusA = () => {
        setANumber(aNumber + 1);
    }
    const sayHello = () => console.log('앞에 숫자가 변경될 때만 출력');
    useEffect(sayHello,[number]);

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => {
        titleUpdater("✨dust home✨");
        // setTimeout(() => {
        //     titleUpdater("dust home")
        // }, 1000);
    },3000);

    const tomato = useRef();
    // setInterval(() => console.log(tomato), 5000);
    // 모야.. 한번인데 왜 계속..?
    // setTimeout(() => tomato.current.focus(), 5000);

    // ****** useCallBack
    const [callBack, setCallBack] = useState(0);
    const [toggle, setToggle] = useState(true);
    const somefunction = useCallback(() => {
        console.log(`someFunc: callBack: ${callBack}`);
        setToggle(!toggle);
        return;
    },[callBack, toggle]);
    
    useEffect(() => {
        console.log('someFunc 변경')
    },[somefunction]);

    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);
    // 사이즈가 바꼈을 때만
    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'tomato',
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);
    return (
        <div>
            <h1 style={{fontSize: '40px'}}>HOOK</h1>
            <input type="number" value={callBack} onChange={(e) => setCallBack(e.target.value)} placeholder="useCallback"/>
            <button onClick={somefunction}>Call someFunc</button>
            <button>{toggle.toString()}</button>
            <div style={{background: isDark ? "black" : "white", width: '200px', height: '200px'}}>
                <input type="number" placeholder="박스 크기를 입력하세요" onChange={(e) => setSize(e.target.value)}/>
                <TestBox createBoxStyle={createBoxStyle}/>
                <button onClick={() => setIsDark(!isDark)}>on/off</button>
            </div>
            <p>함수형 컴포넌트에 사용되고 코드 가독성이 좋아짐  (짧아져서) </p>
            <p style={{fontSize:'30px'}}>{number}, {aNumber}</p>
            <button onClick={plus}>number</button>
            <button onClick={plusA}>aNumber</button>
            <input placeholder="이름을 입력하세요" ref={tomato} {...name} style={{border: '1px solid black'}}/>
            {/*  maxLength={check} onChange={name.onChange} value={name.value}  */}
            {/* 위처럼 길게 쓰지 않고 value={name.value} 를 지우고 {...name} 을 써도 됨 그럼 object 자체를 input한테 주는것임 */}
            {/* 그냥 name만 쓰니까 object가 나옴 */}
            <div>
                <div>
                    {content.map((section, index) => 
                        <button onClick={() => changeItem(index)} key={index}>{section.tab}</button>
                    )}
                </div>
                <div>{currentItem.content}</div>
            </div>
        </div>
    )
}

export default Hook;