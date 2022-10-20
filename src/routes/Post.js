import { 
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate,
    json
   } from 'react-router-dom'; // 이건 6에서만 쓸 수 있는건가보다
import { useEffect, useState } from "react";
import { data, gogo } from '../data';
import PostDetail from '../components/PostDetail';
import axios from 'axios';

// 코드 길어지면 import export 강의
const Post = () => {
    // 일단 서버에서 가져온 데이터
    let [item, setItem] = useState(data);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState([
        '64f2e3bfa8f54698fb5228aadad5c7a07909ae7f',
        '72a591baa05fb27ad8adac973de52f1e606bf473',
        'dfaf657304f2816b514692d36e761f7440f4d531'
    ]);
    const [imgPlus] = useState([
        '023c3cee1f8f76526b1086abca413f182b4700b8',
        '10241f6c6779a09b4c528705e3004fa317a7abbd',
        '833f6076d7dd105c72ea48aebf60341e8d135386'
    ]);
    const [imgPlus2] = useState([
        '9beeaf2766837cc132df501e186de764ac096f7a',
        '42ca0a4fdb62e20d88af06631a677fc0a91f279b',
        'e5110a2cf766f1626f615b68f4372f4ec23be863'
    ]);
    // 더보기
    const [clickNum, setClickNum] = useState(1);
    const [more, setMore] = useState(true);
    // 로딩중
    const [loading, setLoading] = useState(false);
    // fade in
    const [fade, setFade] = useState('');
    useEffect(() => {
        // fade 값이 변경되면 2초후에 아이디 값 추가
        let clear = setTimeout(() => {setFade('ani-fade-out')}, 1500);
        // return 안에 넣어두니까 좀 느린데.. 반응이
        return(() => {
            clearTimeout(clear);
            setFade('');
        })
    }, [loading]);
    const onClick = () => {
        setClickNum(clickNum + 1);
        /*
            fetch('url')
            .then(result => result.json()) --> array/object 변환과정 필요
            .then(data => {
            })
        */
        if(clickNum === 1){
            setLoading(true);
            axios.get(`https://codingapple1.github.io/shop/data2.json`)
            .then((json) => {
                let copy = [
                    ...item,
                    ...json.data
                ];
                let copyImg = [
                    ...img,
                    ...imgPlus
                ];
                setItem(copy);
                setImg(copyImg);
                setTimeout(() => {
                    setLoading(false);
                    setFade('ani-fade-out');
                },2000)
            })
            .catch(() => {
                console.log('data 가져오기 실패');
            });
        }else if(clickNum === 2){
            setLoading(true); 
            setFade('');
            axios.get(`https://codingapple1.github.io/shop/data3.json`)
            .then((json) => {
                let copy = [
                    ...item,
                    ...json.data
                ];
                let copyImg = [
                    ...img,
                    ...imgPlus2
                ];
                setItem(copy);
                setImg(copyImg);
                setTimeout(() => {
                    setLoading(false);
                    setFade('ani-fade-out');
                },2000)
            })
            .catch(() => {
                console.log('data 가져오기 실패');
            });
            setMore(false);
        }else{

        }
        // 서버로 데이터 전송하는 post요청
        // axios.post(`/url~~~`, {name: 'dust'}) 기타등등

        // 동시에 여러곳으로 요청할 때
        // Promise.all([ axios.get('/url~'), axios.get('/url2~'), axios.get('/url3~'),])
        // .then(()=>{
        // 두개의 요청이 성공했을 때 안에 있는 코드 실행
        // })
    }
    useEffect(() => {
        // 숫자면 true
        if(!isNaN(title)){
            console.log('true')
        }else{
            console.log('false');
            alert('숫자만 입력하세요');
        }
    },[title])
    // 페이지 이동을 도와주는 함수
    let navigate = useNavigate();
    return(
        <div>
            <img className="post-main-img" src={process.env.PUBLIC_URL + `/img/2e7bac51f4d7d7f33379dae9ce79b0ec1c1773c4.gif`} alt="포스트 메인 짱구 이미지"/>
            <Outlet/>
            <div className="post-inner">
                <h1>글을 작성해주세요.</h1>
                <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="입력해보시오."/>
                <ImgBox img={img} item={item} navigate={navigate} loading={loading} fade={fade}/>
            </div>
            {more ? <button onClick={onClick}>상품더보기</button> : null}
            <Routes>
                <Route path={`/postdetail/:id`} element={<PostDetail img={img} item={item} />} /> 
            </Routes>
            {/* page 여러개 만들고 싶을 때 url 파라미터 사용 */}
        </div>
    )
}
const ImgBox = ({img, item, navigate, loading, fade}) => {
    return(
        <div className="img-box">
            {loading ? 
                <div className={`loading ` + fade}>
                    <p>Loading...</p>
                    <img src={process.env.PUBLIC_URL + `/img/1a04cafd9593925989a9589cc4531377a7695699.gif`} alt="loading..."/>
                </div> : null}
            {/* 배열 추가되도 안나오길래 확인 했더니 이미지가 없어서 그런 것 */}
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

npm install styled-components

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