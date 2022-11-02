// store에서 state, 함수 가져올 때는 import
import { useDispatch, useSelector } from "react-redux";
import { changeName, plus, plus2, changeArr, changeItemName, addItem, ascChange, deleteItem } from "../store";
// 파일 분할 했을 때 import도 변경해줘야함

const Contact = () => {
    // store에 있는 state를 가져와주는 함수
    // store안에 있는 변수가 해당 변수에 다 남음
    let state = useSelector((state) => {return state});
                        // store 안에 모든 state를 뜻함
    // let state = useSelector((state) => return state.user);
                                // 원하는 state만 가져오기👍
    // console.log(state);
    // 함수 가져올 땐 이 함수도 필요 --> store.js 한테 요청 보내주는 함수
    let dispatch = useDispatch();

    let obj = { name: 'dust'};
    JSON.stringify(obj); // 이렇게 넣으면 json으로 바꿔서 객체가 깨지지않음
    // 이상태로 넣으면 깨짐
    localStorage.setItem('data',JSON.stringify(obj));
    let test = localStorage.getItem('data');
    console.log(test.name); // 으로 뽑을 수 없음 -> 왜냐면 JSON으로 따옴표만 추가했기 때문에
    let test2 = JSON.parse(test); // 이렇게 해야 변환해서 자료를 남겨줌
    console.log(test2.name);

    return(
        <div className="wrap">
            <h1 style={{textAlign: 'center', fontSize: '1.5rem'}}>{state.user}의 장바구니! 
                <span onClick={() => { dispatch(changeName())}}>이름수정</span>
            </h1>
            <div>
                {state.arr.age}
                <span onClick={() => {
                dispatch(changeArr())
            }}>하나씩 올리기</span>
            </div>
            <button onClick={() => {
                // 안되네..
                dispatch(ascChange(state.cartItem))
            }}>오름차순 정렬</button>
            <div className="cart-grid">
                {/* <div>#</div> */}
                <div>상품명</div>
                <div>수량</div>
                <div>수량 변경하기</div>
                <div>삭제하기</div>
                {state.cartItem.map((value) => (
                    <>
                        {/* <div key={value.id}>{value.id}</div> */}
                        <div>{value.name}</div>
                        <div>{value.count}</div>
                        {/* store에서 가져온 함수 사용하기 --> store.js에서 수정 함수 실행해주세요(어디서 잘못했는지 찾기 쉬움) */}
                        <div><button onClick={() => {
                            dispatch(plus(value.id));
                        }}>+</button></div>
                        <div><button onClick={() => {
                            dispatch(deleteItem(value))
                        }}>😢</button></div>
                    </>
                ))}
                <button onClick={() => {
                    dispatch(changeItemName())
                }} className="btn">0번째 상품명 변경하기!</button>
            </div>
            <ContactDetail/>
        </div>
    )
}

const ContactDetail = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();

    return(
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '20px'}}>
            {state.cartItemDetail.map((value, idx) => (
                <div style={{width: '100%', height: '200px', background: 'lightpink', textAlign: 'center'}} key={idx}>
                    <img style={{width: '100%', height: '100%'}} src={process.env.PUBLIC_URL + `/img/2e7bac51f4d7d7f33379dae9ce79b0ec1c1773c4.gif`} alt="포스트 메인 짱구 이미지"/>
                    <p>상품 이름: {value.name}</p>
                    <button onClick={() => {
                        dispatch(addItem(value));
                    }}>장바구니 담기</button>
                </div>
            ))}
        </div>
    )
}
export default Contact;