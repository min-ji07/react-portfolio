import { Outlet, useParams } from "react-router-dom";

const PostDetail = ({img, item}) => {
    // 현재 url 의 파라미터 정보가 남음
    let {id} = useParams();
    // console.log(id);
    // find() --> 만족하는 첫 번째 요소의 값을 반환 없다면 undefined 반환
    let value = item.find((item) => item.id == id);
    // console.log(value);

    return(
        <div className="img-inner">
            {/* if문 사용 가능, 원하는 id값이 아닐경우(예를 들어 글자) 404페이지 보여주기 */}
            <img src={process.env.PUBLIC_URL + `/img/${img[id]}.jpg`} alt="짱구이미지"/>
            <div style={{textAlign: 'center', height: '60px'}}>
                <p>{item[id].title}</p>
                <p>{item[id].content}</p>
                <p>{item[id].price}</p>
            </div>
            <Outlet/>
        </div>
    )
}

export default PostDetail;