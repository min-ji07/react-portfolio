import { 
    Routes,
    Route,
    Link,
    Outlet
   } from 'react-router-dom'; // 이건 6에서만 쓸 수 있는건가보다
import { useState, useNavigate } from "react";
import { data, gogo } from '../data';
// 코드 길어지면 import export 강의
const Post = () => {
    // 일단 서버에서 가져온 데이터
    let [item] = useState(data);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState([
        '64f2e3bfa8f54698fb5228aadad5c7a07909ae7f',
        '72a591baa05fb27ad8adac973de52f1e606bf473',
        'dfaf657304f2816b514692d36e761f7440f4d531'
    ]);
    // 페이지 이동을 도와주는 함수
    let navigate = useNavigate();
    return(
        <div>
            <img style={{width: '100%', height: '200px', objectFit:'contain', background: 'lightgray'}} 
            src={process.env.PUBLIC_URL + `/img/1a04cafd9593925989a9589cc4531377a7695699.gif`} alt=""/>
            <div style={{margin:'20px'}}>
                <h1 style={{marginBottom: '10px'}}>글을 작성해주세요.</h1>
                <input onChange={(e) => {
                    setTitle(e.target.value);
                    // e.target 은 event가 발생하는 곳
                }} value={title} placeholder="입력해보시오."/>
                <div className="img-item">
                    <div style={{display: 'flex', justifyContent:'space-around'}}>
                        {/* 이미지 클릭시 /detail/:index 로 이동 */}
                    {img.map((value, idx) => 
                        <img key={idx} src={process.env.PUBLIC_URL + `/img/${value}.jpg`} alt="짱구이미지"/>
                    )}
                    </div>
                    <ImgBox img={img} item={item} navigate={navigate}/>
                </div>
            </div>
            {/* 이렇게 사용하던데 (리액트 라우터1) 셋팅이랑 기본 라우팅*/}
            {/* <Routes>
                <Route path="/">
                </Route>
            </Routes> */}
        </div>
    )
}
const ImgBox = ({item, navigate}) => {
    return(
        <div style={{display:'flex', justifyContent: 'space-between'}}>
            {item.map((value) => 
                <div style={{width: '100%', textAlign:'center'}}>
                    <p onClick={() => {navigate('/postdetail')}}>{value.id}. {value.title}</p>
                    <p>{value.content}</p>
                    <p>{value.price}</p>
                </div>
            )}
        </div>
    )
}

export default Post;

/*

state 변경함수는 늦게 처리됨 --> 비동기처리
(왜냐하면 저장 후에 새로고침 때문에?)

이벤트 버블링 막는 방법 --> e.stopPropagation(); --> 상위요소로 클릭이 지정되지 않음

이벤트 핸들러 약 30개 정도
onMouseOver - 마우스 갖다 댔을 때
onScroll - 스크롤바를 조작할 때 마다

*/