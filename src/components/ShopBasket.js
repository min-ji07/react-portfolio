// μ₯λ°κ΅¬λ
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
        <div className="m-shop-basket">
            <div className="btn-set">
                <button className="btn" onClick={() => navigate(`/cart`)}>πμ₯λ°κ΅¬λλ‘ μ΄λπ</button>
                <button className="btn" onClick={() => {
                    dispatch(btnSwitch(false));
                }}>πλ«κΈ°π</button>
            </div>
            <div className="cart-grid">
                <div>μνλͺ</div>
                <div>μλ</div>
                <div>μΆκ°</div>
                <div>μ­μ </div>
                {state.shopItem.map((value, idx) => 
                    <React.Fragment key={idx}>
                        <div>{value.name}</div>
                        <div>{value.count}</div>
                        <div onClick={() => {
                            dispatch(shopAddItem(value))
                        }}>π</div>
                        <div onClick={() => {
                            dispatch(shopDeleteItem(value.id))
                        }}>π’</div>
                    </React.Fragment>
                )}
            </div>
        </div>
    )    
}
export default ShopBasket;
