import { Link } from "react-router-dom";
const Write = () => {
    return(
        <div className="wrap" style={{ background: 'lightgray'}}>
            <div style={{padding: '20px'}}>
                <div style={{display:'flex', marginBottom:'20px', justifyContent:'space-between'}}>
                    {/* 타이틀 길어지면 좋아요 망가짐 */}
                    <h2 style={{fontSize: '24px'}}>🤣배열🤣</h2>
                    <p ><span style={{fontSize:'24px'}}>좋아요💖(0)</span></p>
                </div>
                <p>아직 study 안에 기능 만진 거 없음</p>
                <br/>
                <p>arr.js파일 참고</p>
                <p>부모 컴포넌트에서 배열을 가져오려면 (props)</p>
                <p>🪒컴포넌트명 원하는 이름 작명=🌫변수명🌫 /🪒</p>
                <p>아오.. 괄호 안써져서 이모지로 대체</p>
                <p>(이름은 원하는대로/보통 변수명과 같게 작성)</p>
                <p><Link to={'/arr'}>👉arr페이지로 이동👉</Link></p>
            </div>
        </div>
    )
}
export default Write;