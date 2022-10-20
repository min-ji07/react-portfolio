import { useDispatch, useSelector } from "react-redux";


const MoreBtn = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => {return state});

    return(
        <>
        <div style={{width: '100%', textAlign:'center'}}>
            <button  className="btn">상품 더보기</button>
        </div>
        </>
    )
}
export default MoreBtn;