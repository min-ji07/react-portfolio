import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

// class형식으로 컴포넌트 만들고 간섭하는 법
class DetailTest extends React.Component{
    // 마운트 될 때
    componentDidMount(){
    // 업데이트 될 때
    }componentDidUpdate(){
    // 언마운트 될 때
    }componentWillUnmount(){

    }
}
// 함수 형식으로 컴포넌트 만들고 간섭하는 법 useEffect
// 보통 useEffect 안에 사용하는 코드는
// 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 등
const PostDetail = ({img, item}) => {
    const [autoHide, setAutoHide] = useState(true);
    useEffect(() => {
        // setTimeout 함수를 변수에 담는 이유는 제거하기 위함
        let timeOut = setTimeout(() => {
            setAutoHide(false);
            console.log('false로 변경');
        }, 3000);
        return() => {
            // clean up function 은 mount될 때는 실행x, unmount 될 때 실행됨
            // 기존 코드 지우는 코드를 많이 입력
            clearTimeout(timeOut);
        }
    },[autoHide]);
    // 현재 url 의 파라미터 정보가 남음
    let {id} = useParams();
    // console.log(id);
    // find() --> 만족하는 첫 번째 요소의 값을 반환 없다면 undefined 반환
    let value = item.find((item) => item.id == id);
    console.log(value);

    return(
        <div className="img-inner">
            {/* if문 사용 가능, 원하는 id값이 아닐경우(예를 들어 글자) 404페이지 보여주기 */}
            <img src={process.env.PUBLIC_URL + `/img/${img[id]}.jpg`} alt="짱구이미지"/>
            <div style={{textAlign: 'center', height: '60px'}}>
                <p>{item[id].title}</p>
                <p>{item[id].content}</p>
                <p>{item[id].price}</p>
            </div>
            <button>장바구니 추가</button>
            {autoHide ? <div style={{background: 'Yellow', width: '200px', height: '30px', margin: '0 auto'}}>3초후에 사라질 박스</div> : null }
        </div>
    )
}

export default PostDetail;

