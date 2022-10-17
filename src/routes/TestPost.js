import { useState } from "react";
import data from '../data';
const Post = () => {
    let [item] = useState(data);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState([
        '64f2e3bfa8f54698fb5228aadad5c7a07909ae7f',
        '72a591baa05fb27ad8adac973de52f1e606bf473',
        'dfaf657304f2816b514692d36e761f7440f4d531'
    ]);
    return(
        <div>
            <img src={process.env.PUBLIC_URL + `/img/1a04cafd9593925989a9589cc4531377a7695699.gif`} alt=""/>
            <div style={{margin:'20px'}}>
                <h1 style={{marginBottom: '10px'}}>글을 작성해주세요.</h1>
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <ImgBox img={img} item={item}/>
            </div>
        </div>
    )
}
const ImgBox = ({img, item}) => {
    return(
        <div className="img-item">
            {img.map((value, idx) => 
            <div>
                <img key={idx} src={process.env.PUBLIC_URL + `/img/${value}.jpg`} alt="이미지"/>
                {/* 😢 */}
                {item.map((value) => 
                    <>
                        <p>{value.id}. {value.title}</p>
                        <p>{value.content}</p>
                        <p>{value.price}</p>
                    </>
                )}
            </div>
            )}
        </div>
    )
}

export default Post;

// card 컴포넌트 만들기 질문관련




