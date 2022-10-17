import { useState } from "react";

const Post = () => {
    const [title, setTitle] = useState('');
    return(
        <div className="inner_wrap">
            <h1>글을 작성해주세요.</h1>
            <input onChange={(e) => {
                setTitle(e.target.value);
                // e.target 은 event가 발생하는 곳
                
            }} />
            <h2>{title}</h2>

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