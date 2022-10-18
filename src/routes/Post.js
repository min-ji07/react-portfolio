import { 
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate
   } from 'react-router-dom'; // 이건 6에서만 쓸 수 있는건가보다
import { useState } from "react";
import { data, gogo } from '../data';
import PostDetail from '../components/PostDetail';
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
            <img className="post-main-img" src={process.env.PUBLIC_URL + `/img/1a04cafd9593925989a9589cc4531377a7695699.gif`} alt="포스트 메인 짱구 이미지"/>
            <Outlet/>

            <Link to={'/post/postdetail'}>postdetail 왜 안나오는지 모르겠지만.. 일단 주소로 이동</Link>
            <div className="post-inner">
                <h1>글을 작성해주세요.</h1>
                <input onChange={(e) => {
                    setTitle(e.target.value);
                    // e.target 은 event가 발생하는 곳
                }} value={title} placeholder="입력해보시오."/>
                <ImgBox img={img} item={item} navigate={navigate}/>
            </div>

            <Routes>
                <Route path={`/postdetail/:id`} element={<PostDetail img={img} item={item} />} /> 
            </Routes>
            {/* page 여러개 만들고 싶을 때 url 파라미터 사용 */}
        </div>
    )
}
const ImgBox = ({img, item, navigate}) => {
    return(
        <div className="img-box">
            {img.map((img, idx) => 
            <div className="img-inner">
                <img key={idx} src={process.env.PUBLIC_URL + `/img/${img}.jpg`} alt={idx}/>
                <div className="img-box-text" key={item.id}>
                    <p onClick={() => navigate(`postdetail/${idx}`)}>{item[idx].title}</p>
                    <p>{item[idx].content}</p>
                    <p>{item[idx].price}</p>
                </div>
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

navigate 굿👍
navigate(1) --> 앞으로 한 페이지 이동
navigate(-1) --> 뒤로 한 페이지 이동

*/