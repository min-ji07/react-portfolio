import styled from 'styled-components';

// 장점
// 변수에 담아서 사용하기
// 다른 js 파일에 간섭하지 않음
// 예를 들어 App.module.css 로 파일명을 만들면
// App.js 파일에 종속되는 css 파일이 되는 것임 --> App.js 에만 적용
// 로딩 시간이 단축 됨

// 단점
// 컴포넌트와 styled 컴포넌트가 헷갈릴 수 있음
// css 잘하는 사람과 협업할 때 이슈가 발생할 수 있음

let GreenBtn = styled.button`
    appearance: none;
    border: 1px solid ${props => props.border};
    border-radius: 10px;
    background: lightseagreen;
    color: ${props => props.border == 'white' ? 'white' : 'black'};
    // props.border 가 white일 경우 color는 white, 아닐 경우 black
    padding: 10px;
    `

// 기존 스타일 복사
// let YellowBtn = styled.button(GreenBtn)`
//     // 커스터마이징 하면 됨
// `

function Btn(props){
    return(
        <>
            <GreenBtn border={props.border}>{props.text}</GreenBtn>
            {/* <button border="yellow">{props.text}</button> */}
        </>
    )
}
 
export default Btn;