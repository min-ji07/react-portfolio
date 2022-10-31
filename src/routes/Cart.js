import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { shopDeleteItem, allDeleteItem } from "../store";

const Cart = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    
    let arr = state.shopItem.map((value) => value.price);
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        avg += arr[i];
    }
    return(
        <div className="wrap">
            <h1 style={{textAlign: 'center', fontSize: '1.5rem'}}>{state.user}의 장바구니!</h1>
            <div className="cart-grid">
                <div>상품명</div>
                <div>수량</div>
                <div>금액</div>
                <div>삭제하기</div>
                {state.shopItem.map((value, idx) => (
                    <React.Fragment key={idx}>
                        <div>{value.name}</div>
                        <div>{value.count}</div>
                        {/* store에서 가져온 함수 사용하기 --> store.js에서 수정 함수 실행해주세요(어디서 잘못했는지 찾기 쉬움) */}
                        <div>{value.price}</div>
                        <div><button onClick={() => {
                            dispatch(shopDeleteItem(value.id))
                        }}>😢</button></div>
                    </React.Fragment>
                ))}
                {state.shopItem.length ?
                <>
                    <div className="cart-avg">총액</div>
                    <div>{avg}</div>
                    <div onClick={() => {
                        dispatch(allDeleteItem());
                    }} style={{borderBottom: '1px solid lightgray'}}>😢전체삭제😢</div>
                </>
                : null}
            </div>
        </div>
    )
}
export default Cart;