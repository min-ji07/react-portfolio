/* eslint-disable no-unreachable */
const Memo = () => {
    return
    <>
        <div>
            <p>ajax로 데이터 가져올 때</p>
            <p>성공/실패 시 원하는 html 보여주려면</p>
            <p>실패시 몇 초 후 요청 재시도 하려면</p>
            <p>pregetch</p>
            <p>를 쉽게 구현해주는</p>
            <p>React Query가 있음</p>
            <p>실시간 sns, 코인거래소 등 실시간 데이터를 가져올 때 유용함!</p>
            <p>sns만들 때 좋겠다</p>
            <p>npm install react-query</p>
            <p>사용 방법</p>
            <p>--{">"}</p>
            <p>index.js 세팅</p>
            <p>import 밑에 const queryClient = new QueryClient()</p>
        </div>
        <div>
            <p>개발자도구에서 컴포넌트로 확인할 수 있는 크롬 플러그인</p>
            <p>react developer tools 설치하고 개발자도구 Components 확인</p>
            <p>props 값도 확인할 수 있음</p>
            <p>성능개선1: 개발자도구 & lazy import 강의 듣기</p>
            <p>Redux 플러그인 설치하면 위에꺼처럼 확인할 수 있음</p>
        </div>
    </>
}
export default Memo;