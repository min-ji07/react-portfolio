import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link, Outlet } from "react-router-dom";
import { shopAddItem, btnSwitch } from "../store";
import ShopBasket from "../components/ShopBasket";
import { useEffect, useState } from "react";

const ShopDetail = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        let getItem = localStorage.getItem("itemId");
        getItem = JSON.parse(getItem);
        getItem.push(id);
        // set 자료형 -> 중복을 허용하지 않는 자료형
        getItem = new Set(getItem);
        // 다시 array로 바꿔줌
        getItem = Array.from(getItem);
        localStorage.setItem("itemId", JSON.stringify(getItem));
    });

    const [tab, setTab] = useState(0);

    return(
        <div className="wrap">
            <div onClick={() => {
                navigate(-1);
            }} className="next-btn">뒤로</div>
            <div className="detail-img-div">
                <img src={process.env.PUBLIC_URL + `/img/${state.shopImg[id].src}.jpg`} alt="상품이미지" />
            </div>
            <div className="detail-item-title">
                <p>{state.shopImg[id].name}</p>
                <p>{state.shopImg[id].price}</p>
                <button onClick={(() => {
                    dispatch(shopAddItem(state.shopImg[id]));
                    dispatch(btnSwitch(true));
                })} className="cart-btn">담기👀</button>
            </div>
            <div className="detail-item-content" style={{}}>
                <div className="tab" style={{}}>
                    <div onClick={() => {
                        setTab(0);
                    }}>상세페이지</div>
                    <div onClick={() => {
                        setTab(1);
                    }}>문의사항</div>
                </div>
                {tab === 0 ? 
                    <div className="tab-inner">상세페이지</div> : 
                    <div className="tab-inner wait">문의사항</div>
                }
            </div>
            {state.close && <ShopBasket/>}
        </div>
    )
}
export default ShopDetail;