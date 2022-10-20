// 장바구니
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shopAddItem, shopDeleteItem, btnSwitch } from "../store";
const ShopBasket = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // console.log(state);
    return(
        <div className="m-shop-basket" style={{overflowY: 'scroll', background:'ivory', position:'fixed', bottom:'50px', right: '40px', width: '400px', height: '400px', border:'1px solid gray'}}>
            <button className="btn" onClick={() => {
                dispatch(btnSwitch(false));
            }} style={{textAlign: 'right'}}>🙏닫기🙏</button>
            <button className="btn" onClick={() => navigate(`/cart`)}>👉장바구니로 이동👉</button>
            <div className="cart-grid" style={{gridTemplateColumns: '1fr .5fr .5fr .5fr', background:'lightgray'}}>
                <div>상품명</div>
                <div>수량</div>
                <div>추가</div>
                <div>삭제</div>
                {state.shopItem.map((value, idx) => 
                    <React.Fragment key={idx}>
                        <div>{value.name}</div>
                        <div>{value.count}</div>
                        <div onClick={() => {
                            dispatch(shopAddItem(value))
                        }}>👍</div>
                        <div onClick={() => {
                            dispatch(shopDeleteItem(value))
                        }}>😢</div>
                    </React.Fragment>
                )}
            </div>
        </div>
    )    
}
export default ShopBasket;
