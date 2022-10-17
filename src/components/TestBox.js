import { useEffect, useState } from "react";

const TestBox = ({ createBoxStyle }) => {
    const [style, setStyle] = useState({});
    console.log(style);

    useEffect(() => {
        console.log('사이즈 바뀔때만')
        setStyle(createBoxStyle());
        // 함수 안에 값을 setStyle에 저장 --> style
    }, [createBoxStyle]);
    // 처음 렌더링 될 때, 또는 props가 변경이 될 때 리렌더링
    return (
        <div style={style}></div>
    )
}

export default TestBox;