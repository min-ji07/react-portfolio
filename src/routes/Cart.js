import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { shopDeleteItem, allDeleteItem } from "../store";

const Cart = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();

    const [avg, setAvg] = useState([]);
    let getItem = localStorage.getItem("itemId");
    getItem = JSON.parse(getItem);
    useEffect(() => {
        let sum = 0;
        for(let i = 0; i < getItem.length; i++){
            sum += getItem[i].sum;
        }
        setAvg(sum);
    }, [avg])
    return(
        <div className="wrap">
            <h1 style={{textAlign: 'center', fontSize: '1.5rem'}}>{state.user}의 장바구니!</h1>
            <div className="cart-grid">
                <div>상품명</div>
                <div>수량</div>
                <div>금액</div>
                <div>삭제하기</div>
                {getItem.map((value, idx) => (
                    <React.Fragment key={idx}>
                        <div>{value.name}</div>
                        <div>{value.count}</div>
                        {/* store에서 가져온 함수 사용하기 --> store.js에서 수정 함수 실행해주세요(어디서 잘못했는지 찾기 쉬움) */}
                        <div>{value.price * value.count}</div>
                        <div><button onClick={() => {
                            dispatch(shopDeleteItem(value.id));
                            setAvg();
                        }}>😢</button></div>
                    </React.Fragment>
                ))}
                {getItem.length ?
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