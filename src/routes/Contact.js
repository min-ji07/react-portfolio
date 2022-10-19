// store에서 state, 함수 가져올 때는 import
import { useDispatch, useSelector } from "react-redux";
import { changeName, plus, plus2, changeArr, changeItemName } from "../store";
// 파일 분할 했을 때 import도 변경해줘야함

const Contact = () => {
    // store에 있는 state를 가져와주는 함수
    // store안에 있는 변수가 해당 변수에 다 남음
    let state = useSelector((state) => {return state});
                        // store 안에 모든 state를 뜻함
    // let state = useSelector((state) => return state.user);
                                // 원하는 state만 가져오기👍
    console.log(state);
    // 함수 가져올 땐 이 함수도 필요 --> store.js 한테 요청 보내주는 함수
    let dispatch = useDispatch();
    return(
        <>
        {/* + 버튼 눌렀을 때 해당 id 값을 가진 아이템이 + 되게 하기 */}
        {/* 상세페이지에서 추가하기 버튼 만들고 누르면 장바구니에 뜨게 하기 */}
        {/* 배열에 추가하면 됨 */}
            <h1 style={{textAlign: 'center', fontSize: '1.5rem'}}>{state.user}의 장바구니! 
                <span onClick={() => { dispatch(changeName())}}>이름수정</span>
            </h1>
            <div>
                {state.arr.age}
                <span onClick={() => {
                dispatch(changeArr())
            }}>하나씩 올리기</span>
            </div>
            <div className="cart-grid">
                <div>#</div>
                <div>상품명</div>
                <div>수량</div>
                <div>수량 변경하기</div>
                {state.cartItem.map((value, idx) => (
                    <>
                        <div key={idx}>{value.id}</div>
                        <div>{value.name}</div>
                        <div>{value.count}</div>
                        {/* store에서 가져온 함수 사용하기 --> store.js에서 수정 함수 실행해주세요(어디서 잘못했는지 찾기 쉬움) */}
                        <div><button onClick={() => {
                            dispatch(plus())
                        }}>+</button></div>
                    </>
                ))}
                <button onClick={() => {
                    dispatch(changeItemName())
                }} className="btn">object 값 수정하기(index값 찾고 보내기는 어떻게..?)</button>
            </div>
        </>
    )
}
export default Contact;