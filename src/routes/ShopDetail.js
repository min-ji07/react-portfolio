import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { shopAddItem, btnSwitch } from "../store";
import ShopBasket from "../components/ShopBasket";

const ShopDetail = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();
    let {id} = useParams();
    // console.log(id);
    // console.log(state[id]);
    return(
        <div className="wrap">
            <div style={{width: '500px', height:'500px', margin: '0 auto'}}>
                <img style={{width: '100%', hegiht: '100%'}} className="shop-item-img" src={process.env.PUBLIC_URL + `/img/${state.shopImg[id].src}.jpg`} alt="상품이미지" />
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <p>{state.shopImg[id].name}</p>
                <p>{state.shopImg[id].price}</p>
                <button onClick={(() => {
                    dispatch(shopAddItem(state.shopImg[id]));
                    dispatch(btnSwitch(true));
                })} className="cart-btn">담기👀</button>
            </div>
            <div style={{border:'1px solid black', width: '100%', height:'500px', marginTop: '30px'}}>
                상세설명이 필요하다면 여기
            </div>
            {state.close && <ShopBasket/>}
        </div>
    )
}
export default ShopDetail;