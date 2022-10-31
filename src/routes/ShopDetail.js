import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link, Outlet } from "react-router-dom";
import { shopAddItem, btnSwitch } from "../store";
import ShopBasket from "../components/ShopBasket";
import { useEffect } from "react";

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
                탭 버튼 및 상세페이지 구현하기
            </div>
            {state.close && <ShopBasket/>}
            <Link to={`/shop/shopdetail/${id}/hook`}>클릭하면 /study/hook 으로 이동합니다</Link>
            <Outlet/>
        </div>
    )
}
export default ShopDetail;