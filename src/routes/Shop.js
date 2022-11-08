import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopBasket from "../components/ShopBasket";
import { btnSwitch, shopAddItem } from '../store';

const Shop = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        let getItem = localStorage.getItem("itemId");
        getItem = JSON.parse(getItem);
        if(Array.isArray(getItem)){
            return
        }else{
            localStorage.setItem("itemId", JSON.stringify([]))
        }
    },[])

    return(
        <>
            <div className="wrap">
            <div className="shop-info" style={{marginBottom: '10px'}}>
                타이틀, 이미지 클릭시 상세페이지로 이동합니다!<br/>
                담기 버튼 클릭시 모달 띄움, 장바구니에 아이템을 추가합니다<br/>
            </div>
            {/* <img className="post-main-img" src={process.env.PUBLIC_URL + `/img/2e7bac51f4d7d7f33379dae9ce79b0ec1c1773c4.gif`} alt="포스트 메인 짱구 이미지"/> */}
                <div className="shop-grid">
                    {state.shopImg.map((value, idx) => 
                    <div key={idx}>
                        <div onClick={() => {
                            navigate(`shopdetail/${idx}`);
                        }} className="img-div">
                            <img className="shop-item-img" src={process.env.PUBLIC_URL + `/img/${value.src}.jpg`} alt="상품이미지" />
                        </div>
                        <p  onClick={() => navigate(`shopdetail/${idx}`)}>{value.name}</p>
                        <p>{value.price}</p>
                        <button onClick={(() => {
                            dispatch(shopAddItem(value));
                            dispatch(btnSwitch(true));
                        })} className="cart-btn">담기👀</button>
                    </div>
                    )}
                </div>
            </div>
            {state.close && <ShopBasket/>}
        </>
    )
}
export default Shop;